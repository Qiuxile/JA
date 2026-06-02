# Rust 基础语法

## 注释

```rust
// 单行注释

/* 多行注释
可以包含多个行 */
```

## 变量与数据类型

### 变量声明

```rust
// 不可变变量
let x = 5;

// 可变变量
let mut y = 10;
y = 15;

// 显式类型
let z: i32 = 42;
```

### 基本数据类型

```rust
// 整数类型
let a: i8 = 127;
let b: i32 = 100;
let c: u64 = 1000;

// 浮点数
let pi: f32 = 3.14;
let price: f64 = 99.99;

// 布尔值
let flag: bool = true;

// 字符
let ch: char = 'A';

// 字符串
let s: &str = "Hello";
let mut string: String = String::from("World");
```

## 常量

```rust
const PI: f64 = 3.14159;
const MAX_VALUE: i32 = 1000;
```

## 运算符

### 算术运算符

```rust
let a = 10;
let b = 3;

a + b   // 加法
a - b   // 减法
a * b   // 乘法
a / b   // 除法
a % b   // 取模
```

### 比较运算符

```rust
x == y  // 等于
x != y  // 不等于
x > y   // 大于
x < y   // 小于
x >= y  // 大于等于
x <= y  // 小于等于
```

### 逻辑运算符

```rust
a && b  // 逻辑与
a || b  // 逻辑或
!a      // 逻辑非
```

## 控制流程

### if-else 语句

```rust
let score = 85;

if score >= 90 {
    println!("优秀");
} else if score >= 60 {
    println!("及格");
} else {
    println!("不及格");
}
```

### match 表达式

```rust
let day = 3;

match day {
    1 => println!("周一"),
    2 => println!("周二"),
    3 => println!("周三"),
    4 | 5 => println!("周四或周五"),
    6..=7 => println!("周末"),
    _ => println!("无效"),
}
```

### 循环语句

```rust
// for 循环
for i in 1..=5 {
    println!("{}", i);
}

// while 循环
let mut count = 0;
while count < 5 {
    println!("{}", count);
    count += 1;
}

// loop 无限循环
loop {
    println!("loop");
    break;
}
```

## 函数

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
    let result = add(3, 5);
    println!("结果: {}", result);
}
```

### 函数返回值

```rust
fn divide(a: f64, b: f64) -> Option<f64> {
    if b == 0.0 {
        None
    } else {
        Some(a / b)
    }
}
```

---

**上一章**: [Rust 教程](./Rust教程)

**下一章**: [Rust 所有权](./Rust所有权)