# Rust 生命周期

## 生命周期注解

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}
```

## 生命周期标注语法

```rust
// 单个生命周期
&'a str

// 多个生命周期
fn example<'a, 'b>(x: &'a str, y: &'b str) -> &'a str {
    x
}
```

## 结构体中的生命周期

```rust
struct ImportantExcerpt<'a> {
    part: &'a str,
}

fn main() {
    let novel = String::from("Call me Ishmael. Some years ago...");
    let first_sentence = novel.split('.').next().expect("Could not find a '.'");
    
    let i = ImportantExcerpt {
        part: first_sentence,
    };
    
    println!("{}", i.part);
}
```

## 生命周期省略规则

1. 每个引用参数都有自己的生命周期
2. 如果只有一个输入生命周期，它被赋予所有输出生命周期
3. 如果有多个输入生命周期，但其中一个是 `&self` 或 `&mut self`，`self` 的生命周期被赋予所有输出生命周期

## 静态生命周期

```rust
let s: &'static str = "hello world";
```

## 结合泛型和生命周期

```rust
use std::fmt::Display;

fn longest_with_an_announcement<'a, T>(
    x: &'a str,
    y: &'a str,
    ann: T,
) -> &'a str
where
    T: Display,
{
    println!("Announcement! {}", ann);
    if x.len() > y.len() {
        x
    } else {
        y
    }
}
```

---

**上一章**: [Rust 借用](./Rust借用)