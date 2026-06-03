# Go 网络编程

## HTTP 服务器

### 简单 HTTP 服务器

```go
package main

import (
    "fmt"
    "net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, World!")
}

func main() {
    http.HandleFunc("/", helloHandler)
    
    fmt.Println("Server starting on :8080")
    http.ListenAndServe(":8080", nil)
}
```

### 路由处理

```go
package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Home Page")
    })
    
    http.HandleFunc("/about", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "About Page")
    })
    
    http.HandleFunc("/user/{id}", func(w http.ResponseWriter, r *http.Request) {
        id := r.PathValue("id")
        fmt.Fprintf(w, "User ID: %s", id)
    })
    
    http.ListenAndServe(":8080", nil)
}
```

### HTTP 请求方法

```go
func handler(w http.ResponseWriter, r *http.Request) {
    switch r.Method {
    case http.MethodGet:
        fmt.Fprintf(w, "GET request")
    case http.MethodPost:
        fmt.Fprintf(w, "POST request")
    case http.MethodPut:
        fmt.Fprintf(w, "PUT request")
    case http.MethodDelete:
        fmt.Fprintf(w, "DELETE request")
    default:
        http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
    }
}
```

## HTTP 客户端

### 发送 GET 请求

```go
package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    resp, err := http.Get("https://api.example.com/data")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer resp.Body.Close()
    
    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        fmt.Println("Error reading body:", err)
        return
    }
    
    fmt.Println(string(body))
}
```

### 发送 POST 请求

```go
package main

import (
    "fmt"
    "net/http"
    "strings"
)

func main() {
    url := "https://api.example.com/submit"
    data := strings.NewReader("name=John&age=30")
    
    resp, err := http.Post(url, "application/x-www-form-urlencoded", data)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer resp.Body.Close()
    
    fmt.Println("Status:", resp.Status)
}
```

## TCP 服务器

```go
package main

import (
    "fmt"
    "net"
)

func handleConnection(conn net.Conn) {
    defer conn.Close()
    
    buffer := make([]byte, 1024)
    n, err := conn.Read(buffer)
    if err != nil {
        fmt.Println("Error reading:", err)
        return
    }
    
    fmt.Println("Received:", string(buffer[:n]))
    
    conn.Write([]byte("Hello from server"))
}

func main() {
    listener, err := net.Listen("tcp", ":8080")
    if err != nil {
        fmt.Println("Error listening:", err)
        return
    }
    defer listener.Close()
    
    fmt.Println("TCP server listening on :8080")
    
    for {
        conn, err := listener.Accept()
        if err != nil {
            fmt.Println("Error accepting:", err)
            continue
        }
        go handleConnection(conn)
    }
}
```

## TCP 客户端

```go
package main

import (
    "fmt"
    "net"
)

func main() {
    conn, err := net.Dial("tcp", "localhost:8080")
    if err != nil {
        fmt.Println("Error connecting:", err)
        return
    }
    defer conn.Close()
    
    conn.Write([]byte("Hello from client"))
    
    buffer := make([]byte, 1024)
    n, err := conn.Read(buffer)
    if err != nil {
        fmt.Println("Error reading:", err)
        return
    }
    
    fmt.Println("Received:", string(buffer[:n]))
}
```

## JSON 处理

```go
package main

import (
    "encoding/json"
    "fmt"
)

type Person struct {
    Name string `json:"name"`
    Age  int    `json:"age"`
    City string `json:"city"`
}

func main() {
    // 序列化
    p := Person{Name: "John", Age: 30, City: "New York"}
    data, _ := json.Marshal(p)
    fmt.Println(string(data))
    
    // 反序列化
    jsonStr := `{"name":"Alice","age":25,"city":"London"}`
    var p2 Person
    json.Unmarshal([]byte(jsonStr), &p2)
    fmt.Println(p2.Name)
}
```
