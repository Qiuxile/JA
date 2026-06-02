# Go 基础语法

## 注释

```go
// 单行注释

/* 多行注释
可以包含多个行 */
```

## 变量与数据类型

### 基本数据类型

```go
// 布尔类型
var isActive bool = true

// 整数类型
var age int = 25
var count int32 = 100
var largeNum int64 = 10000000000

// 无符号整数
var u uint = 100
var u32 uint32 = 42

// 浮点数
var pi float64 = 3.14159
var price float32 = 99.99

// 字符类型
var ch rune = 'A'

// 字符串
var name string = "Go"
```

### 变量声明

```go
// 标准声明
var x int
var y string = "hello"

// 批量声明
var (
    a int
    b string
    c bool
)

// 简短声明（只能在函数内使用）
z := 42
message := "Hello"
```

### 常量

```go
const PI = 3.14159
const (
    STATUS_OK = 200
    STATUS_ERR = 500
)

// 常量组
const (
    _ = iota
    Monday
    Tuesday
    Wednesday
)
```

## 运算符

### 算术运算符

```go
a := 10
b := 3

a + b   // 加法
a - b   // 减法
a * b   // 乘法
a / b   // 除法
a % b   // 取模
```

### 比较运算符

```go
x == y  // 等于
x != y  // 不等于
x > y   // 大于
x < y   // 小于
x >= y  // 大于等于
x <= y  // 小于等于
```

### 逻辑运算符

```go
a && b  // 逻辑与
a || b  // 逻辑或
!a      // 逻辑非
```

## 控制流程

### if-else 语句

```go
score := 85

if score >= 90 {
    fmt.Println("优秀")
} else if score >= 60 {
    fmt.Println("及格")
} else {
    fmt.Println("不及格")
}
```

### switch 语句

```go
day := 3

switch day {
case 1:
    fmt.Println("周一")
case 2:
    fmt.Println("周二")
case 3:
    fmt.Println("周三")
default:
    fmt.Println("其他")
}
```

### 循环语句

```go
// for 循环
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

## 函数

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

---

**上一章**: [Go 教程](./Go教程)

**下一章**: [Go 并发编程](./Go并发)