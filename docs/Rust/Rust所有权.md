# Rust 所有权

## 所有权规则

1. 每个值都有一个所有者
2. 值在任意时刻只能有一个所有者
3. 当所有者离开作用域，值被丢弃

## 所有权转移

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1;  // s1 的所有权转移给 s2
    
    // println!("{}", s1);  // 错误！s1 不再有效
    println!("{}", s2);  // 正确
}
```

## 克隆

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1.clone();  // 深拷贝
    
    println!("s1 = {}, s2 = {}", s1, s2);  // 都有效
}
```

## 栈数据的复制

```rust
fn main() {
    let x = 5;
    let y = x;  // 整数在栈上，简单复制
    
    println!("x = {}, y = {}", x, y);  // 都有效
}
```

## 函数与所有权

```rust
fn takes_ownership(s: String) {
    println!("{}", s);
}

fn gives_ownership() -> String {
    String::from("hello")
}

fn main() {
    let s1 = String::from("hello");
    takes_ownership(s1);
    // println!("{}", s1);  // 错误！s1 的所有权已转移
    
    let s2 = gives_ownership();
    println!("{}", s2);  // 正确
}
```

## 引用与借用

### 不可变引用

```rust
fn calculate_length(s: &String) -> usize {
    s.len()
}

fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1);  // 借用引用
    println!("长度: {}", len);
}
```

### 可变引用

```rust
fn append_world(s: &mut String) {
    s.push_str(", World!");
}

fn main() {
    let mut s = String::from("Hello");
    append_world(&mut s);
    println!("{}", s);  // "Hello, World!"
}
```

### 引用规则

1. 同一时刻只能有一个可变引用
2. 不能同时拥有可变引用和不可变引用
3. 引用必须始终有效

---

**上一章**: [Rust 基础语法](./Rust基础语法)

**下一章**: [Rust 借用](./Rust借用)