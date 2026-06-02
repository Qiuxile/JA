# Rust 借用

## 借用的规则

1. 借用不获取所有权
2. 借用必须有效（不能悬垂引用）
3. 同一时刻只能有一个可变借用
4. 不能同时有可变和不可变借用

## 不可变借用

```rust
fn main() {
    let s = String::from("hello");
    
    let r1 = &s;
    let r2 = &s;  // 可以有多个不可变借用
    
    println!("r1 = {}, r2 = {}", r1, r2);
}
```

## 可变借用

```rust
fn main() {
    let mut s = String::from("hello");
    
    let r1 = &mut s;
    // let r2 = &mut s;  // 错误！同一时刻只能有一个可变借用
    
    r1.push_str(" world");
    println!("{}", r1);
}
```

## 混合借用

```rust
fn main() {
    let mut s = String::from("hello");
    
    let r1 = &s;  // 不可变借用
    let r2 = &s;  // 另一个不可变借用
    
    // let r3 = &mut s;  // 错误！不能同时有不可变和可变借用
    
    println!("r1 = {}, r2 = {}", r1, r2);
}
```

## 借用作为函数参数

```rust
fn print_string(s: &String) {
    println!("{}", s);
}

fn update_string(s: &mut String) {
    s.push_str(" updated");
}

fn main() {
    let mut s = String::from("hello");
    
    print_string(&s);
    update_string(&mut s);
    print_string(&s);
}
```

## 悬垂引用

```rust
// 错误示例
fn dangle() -> &String {
    let s = String::from("hello");
    &s  // s 在这里离开作用域，引用变得无效
}

// 正确做法
fn no_dangle() -> String {
    let s = String::from("hello");
    s  // 返回所有权
}
```

---

**上一章**: [Rust 所有权](./Rust所有权)

**下一章**: [Rust 生命周期](./Rust生命周期)