# Go 并发编程

## Goroutine

### 创建 Goroutine

```go
package main

import (
    "fmt"
    "time"
)

func sayHello() {
    for i := 0; i < 5; i++ {
        fmt.Println("Hello")
        time.Sleep(100 * time.Millisecond)
    }
}

func main() {
    go sayHello()  // 启动 goroutine
    
    for i := 0; i < 5; i++ {
        fmt.Println("World")
        time.Sleep(100 * time.Millisecond)
    }
}
```

### sync.WaitGroup

```go
package main

import (
    "fmt"
    "sync"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done()
    
    fmt.Printf("Worker %d starting\n", id)
    
    // 模拟工作
    for i := 0; i < 3; i++ {
        fmt.Printf("Worker %d: %d\n", id, i)
    }
    
    fmt.Printf("Worker %d done\n", id)
}

func main() {
    var wg sync.WaitGroup
    
    for i := 1; i <= 3; i++ {
        wg.Add(1)
        go worker(i, &wg)
    }
    
    wg.Wait()
    fmt.Println("All workers done")
}
```

## Channel

### 创建 Channel

```go
// 创建无缓冲 channel
ch := make(chan int)

// 创建带缓冲 channel
ch := make(chan int, 10)
```

### 发送和接收

```go
ch := make(chan int)

// 发送
ch <- 42

// 接收
value := <-ch
```

### 关闭 Channel

```go
ch := make(chan int)

go func() {
    for i := 0; i < 5; i++ {
        ch <- i
    }
    close(ch)
}()

// 接收直到 channel 关闭
for value := range ch {
    fmt.Println(value)
}
```

### 单向 Channel

```go
// 只发送
func send(ch chan<- int) {
    ch <- 42
}

// 只接收
func receive(ch <-chan int) {
    value := <-ch
    fmt.Println(value)
}

func main() {
    ch := make(chan int)
    go send(ch)
    receive(ch)
}
```

## Select

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)
    
    go func() {
        time.Sleep(1 * time.Second)
        ch1 <- "one"
    }()
    
    go func() {
        time.Sleep(2 * time.Second)
        ch2 <- "two"
    }()
    
    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-ch1:
            fmt.Println("received", msg1)
        case msg2 := <-ch2:
            fmt.Println("received", msg2)
        }
    }
}
```

## Mutex

```go
package main

import (
    "fmt"
    "sync"
)

type Counter struct {
    mu    sync.Mutex
    value int
}

func (c *Counter) Increment() {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.value++
}

func (c *Counter) Value() int {
    c.mu.Lock()
    defer c.mu.Unlock()
    return c.value
}

func main() {
    var wg sync.WaitGroup
    counter := Counter{}
    
    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            counter.Increment()
        }()
    }
    
    wg.Wait()
    fmt.Println("Final value:", counter.Value())
}
```

## 并发模式

### Worker Pool

```go
package main

import (
    "fmt"
    "sync"
)

func worker(id int, jobs <-chan int, results chan<- int) {
    for job := range jobs {
        fmt.Printf("Worker %d processing job %d\n", id, job)
        results <- job * 2
    }
}

func main() {
    jobs := make(chan int, 100)
    results := make(chan int, 100)
    
    // 启动 3 个 worker
    for w := 1; w <= 3; w++ {
        go worker(w, jobs, results)
    }
    
    // 发送 9 个任务
    for j := 1; j <= 9; j++ {
        jobs <- j
    }
    close(jobs)
    
    // 收集结果
    for a := 1; a <= 9; a++ {
        <-results
    }
}
```

---

**上一章**: [Go 基础语法](./Go基础语法)

**下一章**: [Go 网络编程](./Go网络)