# 第18章 探讨C++新标准

## 本章概述

本章介绍C++11的主要新特性，包括移动语义和右值引用、新的类功能、Lambda表达式、包装器function、可变参数模板以及并发编程。这些特性使C++更加现代化和高效。


## 18.1 复习前面介绍过的C++11功能

### 新类型

```cpp
// long long（至少64位）
long long big = 123456789012345LL;

// char16_t和char32_t（Unicode）
char16_t c16 = u'A';
char32_t c32 = U'A';
```

### 统一的初始化

```cpp
// 列表初始化（C++11）
int x = {5};
int y{5};
int arr[] = {1, 2, 3};
vector<int> nums = {1, 2, 3, 4, 5};
```

### 类型推断

```cpp
// auto类型推断
auto x = 10;        // int
auto y = 3.14;      // double
auto z = "Hello";   // const char*

// decltype
int a = 10;
decltype(a) b = 20;  // int
```

### 智能指针

```cpp
#include <memory>

unique_ptr<int> p1(new int(10));
shared_ptr<int> p2(new int(20));
weak_ptr<int> p3;
```

### 作用域枚举

```cpp
// C++11作用域枚举
enum class Color { RED, GREEN, BLUE };
Color c = Color::RED;

// 对比传统枚举
enum ColorOld { RED_OLD, GREEN_OLD, BLUE_OLD };
```

---

## 18.2 移动语义和右值引用

### 为何需要移动语义

传统复制在返回临时对象时效率低下，移动语义通过转移资源所有权避免不必要的复制。

```cpp
// 传统复制（低效）
vector<int> createVec() {
    vector<int> result = {1, 2, 3, 4, 5};
    return result;  // 可能复制整个vector
}

// 移动语义（高效）
vector<int> createVec() {
    vector<int> result = {1, 2, 3, 4, 5};
    return result;  // C++11编译器自动使用移动
}
```

### 移动构造函数

```cpp
class String {
private:
    char* data;
    size_t length;

public:
    // 移动构造函数
    String(String&& other) noexcept
        : data(other.data), length(other.length) {
        other.data = nullptr;
        other.length = 0;
    }

    // 移动赋值运算符
    String& operator=(String&& other) noexcept {
        if (this != &other) {
            delete[] data;
            data = other.data;
            length = other.length;
            other.data = nullptr;
            other.length = 0;
        }
        return *this;
    }
};
```

### 强制移动

```cpp
#include <utility>

String s1("Hello");
String s2 = std::move(s1);  // s1被移动，现在为空

void process(String s);
process(std::move(s1));  // 移动s1
```

---

## 18.3 新的类功能

### 默认和禁用的方法

```cpp
class MyClass {
public:
    MyClass() = default;              // 使用默认实现
    MyClass(const MyClass&) = delete; // 禁止拷贝
    MyClass& operator=(const MyClass&) = delete;
    ~MyClass() = default;
};
```

### 委托构造函数

```cpp
class Widget {
public:
    Widget() : Widget(0, "") {}
    Widget(int i) : Widget(i, "") {}
    Widget(int i, string s) : id(i), name(s) {}

private:
    int id;
    string name;
};
```

### 继承构造函数

```cpp
class Base {
public:
    Base() : x(0) {}
    Base(int x) : x(x) {}

protected:
    int x;
};

class Derived : public Base {
public:
    using Base::Base;  // 继承构造函数
};

Derived d1;      // 调用Base()
Derived d2(10);  // 调用Base(int)
```

### override和final

```cpp
class Base {
public:
    virtual void func() {}
};

class Derived : public Base {
public:
    void func() override {}  // 显式重写
};

class Final final : public Derived {
    // Final类不能被继承
};
```

---

## 18.4 Lambda表达式

### Lambda语法

```cpp
[捕获列表](参数列表) mutable(可选) -> 返回类型(可选) { 函数体 }
```

### 使用示例

```cpp
// 基本Lambda
auto add = [](int a, int b) { return a + b; };
cout << add(3, 5) << endl;  // 8

// 捕获变量
int threshold = 3;
vector<int> nums = {5, 3, 1, 4, 2};
auto it = find_if(nums.begin(), nums.end(),
    [threshold](int x) { return x > threshold; });

// 用于排序
sort(nums.begin(), nums.end(), [](int a, int b) { return a < b; });

// 函数指针、函数符和Lambda比较
bool compare(int a, int b) { return a < b; }  // 函数指针
struct Compare {                               // 函数符
    bool operator()(int a, int b) const { return a < b; }
};
// Lambda更简洁
sort(nums.begin(), nums.end(), [](int a, int b) { return a < b; });
```

---

## 18.5 包装器function

```cpp
#include <functional>

// function包装器
function<int(int, int)> add = [](int a, int b) { return a + b; };
function<int(int, int)> mul = [](int a, int b) { return a * b; };

cout << add(3, 5) << endl;   // 8
cout << mul(3, 5) << endl;   // 15

// 使用包装器数组
function<int(int, int)> ops[] = {add, mul};

// 使用std::bind
using namespace std::placeholders;
auto add5 = bind(plus<int>(), _1, 5);
cout << add5(3) << endl;  // 8
```

---

## 18.6 可变参数模板

### 模板和函数参数包

```cpp
// 可变参数模板（C++11）
template <typename... Args>
void print(Args... args) {
    (cout << ... << args) << endl;  // 折叠表达式（C++17）
}

print(1, 2, 3);         // 123
print("Hello", " ", "World");  // Hello World
```

### 递归展开

```cpp
// 基础版本（终止递归）
template <typename T>
void print(T t) {
    cout << t << endl;
}

// 递归版本
template <typename T, typename... Args>
void print(T first, Args... rest) {
    cout << first << " ";
    print(rest...);
}
```

### 计算和

```cpp
template <typename T>
T sum(T t) { return t; }

template <typename T, typename... Args>
T sum(T first, Args... rest) {
    return first + sum(rest...);
}

cout << sum(1, 2, 3, 4, 5) << endl;  // 15
```

---

## 18.7 并发编程

```cpp
#include <thread>
#include <mutex>
#include <future>

// 线程
void func() { cout << "Hello from thread" << endl; }
thread t(func);
t.join();

// 互斥锁
mutex mtx;
void safeFunc() {
    lock_guard<mutex> lock(mtx);
    // 临界区代码
}

// 异步编程
auto future = async(launch::async, []() { return 42; });
cout << future.get() << endl;  // 42
```

### 新增的库

| 库 | 功能 |
|------|------|
| `<thread>` | 线程支持 |
| `<mutex>` | 互斥锁 |
| `<atomic>` | 原子操作 |
| `<condition_variable>` | 条件变量 |
| `<chrono>` | 时间库 |
| `<random>` | 随机数库 |
| `<tuple>` | 元组 |
| `<regex>` | 正则表达式 |

---

## 18.8 其他C++11特性

```cpp
// constexpr编译时计算
constexpr int factorial(int n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
constexpr int fact5 = factorial(5);  // 120

// nullptr空指针
int* ptr = nullptr;

// static_assert静态断言
static_assert(sizeof(int) == 4, "int must be 4 bytes");

// alignof和alignas
alignof(int);          // 对齐要求
alignas(16) int x;     // 指定对齐

// 原子操作
#include <atomic>
atomic<int> counter(0);
counter++;  // 原子操作
```

---

## 18.9 总结

C++11主要新特性：
- `auto`类型推断和`decltype`
- 范围for循环和列表初始化
- Lambda表达式
- 移动语义和右值引用
- 智能指针（`unique_ptr`、`shared_ptr`、`weak_ptr`）
- 并发编程支持（`thread`、`mutex`、`future`）
- 正则表达式库和随机数库

---

## 18.10 复习题

1. 移动语义解决了什么问题？
2. Lambda表达式的语法是什么？
3. `override`和`final`的作用是什么？
4. 可变参数模板如何工作？

---

## 18.11 编程练习

1. 使用Lambda表达式实现自定义排序
2. 使用移动语义优化字符串类
3. 实现一个简单的线程池
