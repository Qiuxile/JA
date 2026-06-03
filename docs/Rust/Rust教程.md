# Rust 语言教程

## Rust 简介

Rust 是一种系统级编程语言，由 Mozilla 开发，于 2010 年首次发布。它专注于安全性、并发性和性能，无需垃圾回收即可提供内存安全。

### Rust 的特点

- **内存安全**: 通过所有权系统保证内存安全
- **零成本抽象**: 高性能的同时保持高级抽象
- **并发安全**: 编译期检测数据竞争
- **无 GC**: 手动内存管理但安全
- **现代工具链**: 内置包管理器和构建工具

## Rust 环境搭建

### 安装 Rust

```bash
# 使用 rustup 安装
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

验证安装：
```bash
rustc --version
cargo --version
```

### 创建项目

```bash
# 创建新项目
cargo new hello_world
cd hello_world

# 运行项目
cargo run
```

## 基础语法

### 第一个 Rust 程序

```rust
fn main() {
    println!("Hello, World!");
}
```

### 变量和数据类型

```rust
// 不可变变量
let x = 5;

// 可变变量
let mut y = 10;
y = y + 1;

// 显式类型
let z: i32 = 42;
let name: &str = "Rust";
```

### 基本数据类型

```rust
// 整数
let a: i8 = 127;
let b: u32 = 42;
let c: i64 = 1_000_000;

// 浮点数
let pi: f64 = 3.14159;

// 布尔值
let is_true: bool = true;

// 字符
let ch: char = 'A';

// 字符串
let s: &str = "Hello";
let mut string: String = String::from("World");
```

## 控制流程

### 条件语句

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

### 循环语句

```rust
// for 循环（遍历范围）
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
// 函数定义
fn add(a: i32, b: i32) -> i32 {
    a + b  // 无分号表示返回
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

## 所有权系统

### 所有权规则

1. 每个值都有一个所有者
2. 值在任意时刻只能有一个所有者
3. 当所有者离开作用域，值被丢弃

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1;  // s1 的所有权转移给 s2
    
    // println!("{}", s1);  // 错误！s1 不再有效
    println!("{}", s2);  // 正确
}
```

### 借用

```rust
fn calculate_length(s: &String) -> usize {
    s.len()
}

fn main() {
    let s = String::from("hello");
    let len = calculate_length(&s);  // 借用引用
    println!("长度: {}", len);
}
```

### 可变借用

```rust
fn append_world(s: &mut String) {
    s.push_str(", World!");
}

fn main() {
    let mut s = String::from("Hello");
    append_world(&mut s);
    println!("{}", s);  // 输出: Hello, World!
}
```

## 数据结构

### 元组

```rust
let tup: (i32, f64, &str) = (500, 6.4, "hello");
let (x, y, z) = tup;
println!("{}, {}, {}", x, y, z);
```

### 数组

```rust
let arr: [i32; 5] = [1, 2, 3, 4, 5];
println!("第一个元素: {}", arr[0]);
println!("数组长度: {}", arr.len());
```

### 向量

```rust
let mut v: Vec<i32> = Vec::new();
v.push(1);
v.push(2);
v.push(3);

for i in &v {
    println!("{}", i);
}
```

### 结构体

```rust
struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn new(name: &str, age: u32) -> Self {
        Person {
            name: String::from(name),
            age,
        }
    }
    
    fn greet(&self) {
        println!("Hello, my name is {}", self.name);
    }
}

fn main() {
    let p = Person::new("Alice", 28);
    p.greet();
}
```

## 枚举

```rust
enum Color {
    Red,
    Green,
    Blue,
    Rgb(u8, u8, u8),
}

fn get_color_name(c: Color) -> &'static str {
    match c {
        Color::Red => "红色",
        Color::Green => "绿色",
        Color::Blue => "蓝色",
        Color::Rgb(r, g, b) => {
            println!("RGB: {}, {}, {}", r, g, b);
            "RGB"
        }
    }
}
```

## 错误处理

### Result 类型

```rust
use std::fs::File;
use std::io::Read;

fn read_file(path: &str) -> Result<String, std::io::Error> {
    let mut file = File::open(path)?;
    let mut content = String::new();
    file.read_to_string(&mut content)?;
    Ok(content)
}

fn main() {
    match read_file("example.txt") {
        Ok(content) => println!("{}", content),
        Err(e) => println!("错误: {}", e),
    }
}
```

## 泛型

```rust
fn largest<T: PartialOrd>(list: &[T]) -> &T {
    let mut largest = &list[0];
    for item in list {
        if item > largest {
            largest = item;
        }
    }
    largest
}

fn main() {
    let numbers = vec![34, 50, 25, 100, 65];
    println!("最大数: {}", largest(&numbers));
}
```

## Rust 生态

| 工具/库 | 用途 |
|---------|------|
| Cargo | 包管理器和构建工具 |
| crates.io | Rust 包仓库 |
| Serde | 序列化/反序列化 |
| Tokio | 异步运行时 |
| Rocket | Web 框架 |
