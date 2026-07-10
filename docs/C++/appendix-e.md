# 附录E 其他运算符



## 本章概述

本附录介绍C++中一些特殊的运算符，包括按位运算符的详细用法、成员解除引用运算符、alignof以及noexcept。


## E.1 按位运算符

### 移位运算符

```cpp
int a = 8;  // 二进制：1000

// 左移（相当于乘以2^n）
int b = a << 1;  // 16（二进制：10000）
int c = a << 2;  // 32（二进制：100000）

// 右移（相当于除以2^n）
int d = a >> 1;  // 4（二进制：100）
int e = a >> 2;  // 2（二进制：10）
```

### 逻辑按位运算符

```cpp
int a = 0b1010;  // 10
int b = 0b1100;  // 12

int c = a & b;   // 0b1000 = 8（按位与）
int d = a | b;   // 0b1110 = 14（按位或）
int e = a ^ b;   // 0b0110 = 6（按位异或）
int f = ~a;      // 按位取反
```

### 按位运算符的替代表示

| 运算符 | 替代表示 | 说明 |
|--------|----------|------|
| `&` | `bitand` | 按位与 |
| `\|` | `bitor` | 按位或 |
| `^` | `xor` | 按位异或 |
| `~` | `compl` | 按位取反 |
| `&=` | `and_eq` | 按位与赋值 |
| `\|=` | `or_eq` | 按位或赋值 |
| `^=` | `xor_eq` | 按位异或赋值 |

### 常用位操作技术

```cpp
// 检查第n位
bool checkBit(int value, int n) {
    return (value & (1 << n)) != 0;
}

// 设置第n位
int setBit(int value, int n) {
    return value | (1 << n);
}

// 清除第n位
int clearBit(int value, int n) {
    return value & ~(1 << n);
}

// 切换第n位
int toggleBit(int value, int n) {
    return value ^ (1 << n);
}
```

---

## E.2 成员解除引用运算符

```cpp
class MyClass {
public:
    int value;
    void display() { cout << value << endl; }
};

// 成员指针
int MyClass::*ptr = &MyClass::value;
MyClass obj;
obj.*ptr = 10;  // 使用.*访问成员

// 通过指针访问
MyClass* pObj = &obj;
pObj->*ptr = 20;  // 使用->*访问成员

// 函数成员指针
void (MyClass::*funcPtr)() = &MyClass::display;
(obj.*funcPtr)();  // 调用成员函数
```

---

## E.3 alignof（C++11）

```cpp
// 获取类型的对齐要求
cout << alignof(int) << endl;       // 通常为4
cout << alignof(double) << endl;    // 通常为8
cout << alignof(char) << endl;      // 1
cout << alignof(long long) << endl; // 通常为8

// alignas指定对齐
alignas(16) int data[4];  // 16字节对齐
```

---

## E.4 noexcept（C++11）

```cpp
// 声明函数不会抛出异常
void func() noexcept {
    // 不会抛出异常
}

// 条件noexcept
template <typename T>
void swap(T& a, T& b) noexcept(noexcept(T(a))) {
    T temp = a;
    a = b;
    b = temp;
}

// 析构函数默认noexcept
class MyClass {
public:
    ~MyClass() noexcept {}
};
```

noexcept的用途：
- 告诉编译器函数不会抛出异常，可以优化代码
- 析构函数、移动构造函数、移动赋值运算符通常应为noexcept
- 用于条件性异常规范

