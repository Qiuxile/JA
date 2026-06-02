# Go 语言教程

## Go 语言简介

Go 是 Google 开发的开源编程语言，于 2009 年发布。它结合了静态语言的安全性和动态语言的开发效率，特别适合构建高性能的网络服务和分布式系统。

### Go 语言的特点

- **简洁高效**: 语法简洁，编译速度快
- **并发支持**: 原生支持并发编程（Goroutine）
- **内存安全**: 自动垃圾回收
- **跨平台**: 编译成机器码，支持多种平台
- **标准库丰富**: 内置强大的标准库

## Go 环境搭建

### 安装 Go

1. 访问 [Go 官网](https://go.dev/dl/) 下载对应版本
2. 配置环境变量 `GOPATH` 和 `PATH`
3. 验证安装：`go version`

### Go 模块

```bash
# 初始化模块
go mod init example.com/hello

# 下载依赖
go mod tidy
```

## 基础语法

### 第一个 Go 程序

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

运行：
```bash
go run hello.go
```

### 数据类型

```go
// 基本类型
var age int = 25
var price float64 = 99.99
var name string = "Go"
var isActive bool = true

// 类型推断
count := 10
message := "Hello"
```

### 变量声明

```go
// 标准声明
var a int
var b string = "hello"

// 批量声明
var (
    x int
    y string
)

// 简短声明（只能在函数内使用）
z := 42
```

### 常量

```go
const PI = 3.14159
const (
    STATUS_OK = 200
    STATUS_ERR = 500
)
```

## 控制流程

### 条件语句

```go
if score >= 90 {
    fmt.Println("优秀")
} else if score >= 60 {
    fmt.Println("及格")
} else {
    fmt.Println("不及格")
}
```

### 循环语句

```go
// for 循环（Go 只有 for 循环）
for i := 0; i < 10; i++ {
    fmt.Println(i)
}

// while 风格
count := 0
for count < 5 {
    fmt.Println(count)
    count++
}

// 无限循环
for {
    fmt.Println("loop")
    break
}
```

### switch 语句

```go
switch day {
case 1:
    fmt.Println("周一")
case 2:
    fmt.Println("周二")
default:
    fmt.Println("其他")
}
```

## 函数

### 函数定义

```go
func add(a, b int) int {
    return a + b
}

func main() {
    result := add(3, 5)
    fmt.Println(result)
}
```

### 多返回值

```go
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}
```

### 匿名函数

```go
greet := func(name string) string {
    return "Hello, " + name
}
fmt.Println(greet("World"))
```

## 数据结构

### 数组

```go
var arr [5]int
arr[0] = 1
arr[1] = 2

// 初始化
nums := [3]int{1, 2, 3}
```

### 切片

```go
// 创建切片
s := []int{1, 2, 3, 4, 5}

// 切片操作
sub := s[1:3]  // [2, 3]

// 添加元素
s = append(s, 6)
```

### 映射

```go
// 创建 map
person := map[string]string{
    "name": "John",
    "city": "New York",
}

// 访问
fmt.Println(person["name"])

// 添加
person["age"] = "30"
```

### 结构体

```go
type Person struct {
    Name string
    Age  int
}

func main() {
    p := Person{Name: "Alice", Age: 28}
    fmt.Printf("Name: %s, Age: %d\n", p.Name, p.Age)
}
```

## 并发编程

### Goroutine

```go
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

### Channel

```go
func producer(ch chan<- int) {
    for i := 0; i < 5; i++ {
        ch <- i
    }
    close(ch)
}

func main() {
    ch := make(chan int)
    go producer(ch)
    
    for num := range ch {
        fmt.Println(num)
    }
}
```

## 包管理

```go
// 导入包
import (
    "fmt"
    "math/rand"
    "time"
)

// 自定义包
import "example.com/mypackage"
```

## 错误处理

```go
func doSomething() error {
    // 操作失败
    if err != nil {
        return fmt.Errorf("failed to do something: %w", err)
    }
    return nil
}

func main() {
    if err := doSomething(); err != nil {
        log.Fatal(err)
    }
}
```

## Go 标准库

| 包名 | 功能 |
|------|------|
| fmt | 格式化输入输出 |
| net/http | HTTP 客户端和服务端 |
| encoding/json | JSON 编解码 |
| os | 操作系统接口 |
| sync | 同步原语 |

---

**下一章**: [Go 并发编程详解](./Go并发)