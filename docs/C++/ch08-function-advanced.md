# 第8章 函数探幽



## 本章概述

本章将介绍C++函数的高级特性，包括内联函数、引用变量、默认参数、函数重载和函数模板。这些特性使函数更灵活、更强大，是C++面向对象编程的重要基础。

## 8.1 内联函数

内联函数是编译器在调用点展开的函数，可以减少函数调用的开销。

### 8.1.1 内联函数的定义

使用`inline`关键字声明内联函数：

```cpp
inline int square(int x) {
    return x * x;
}
```

### 8.1.2 内联函数的使用

内联函数通常用于简短、频繁调用的函数：

```cpp
#include <iostream>

inline double circleArea(double radius) {
    return 3.14159 * radius * radius;
}

int main() {
    double r = 5.0;
    std::cout << "Area: " << circleArea(r) << std::endl;
    return 0;
}
```

### 8.1.3 内联函数的注意事项

- 内联函数通常在头文件中定义
- 过长的函数不适合内联
- 内联是建议，编译器可能忽略

## 8.2 引用变量

引用是变量的别名，必须在声明时初始化，且不能重新绑定。

### 8.2.1 引用的声明和使用

```cpp
int main() {
    int value = 10;
    int& ref = value;  // ref是value的引用
    
    ref = 20;  // 修改ref也会修改value
    std::cout << "value: " << value << std::endl;  // 输出20
    return 0;
}
```

### 8.2.2 引用作为函数参数

引用传递可以直接修改原始变量：

```cpp
void increment(int& num) {
    num++;  // 直接修改原始变量
}

int main() {
    int x = 5;
    increment(x);
    std::cout << "x: " << x << std::endl;  // 输出6
    return 0;
}
```

### 8.2.3 引用作为返回值

函数可以返回引用，但必须确保返回的对象在函数结束后仍然存在：

```cpp
int& getMax(int& a, int& b) {
    return (a > b) ? a : b;
}

int main() {
    int x = 10, y = 20;
    int& maxRef = getMax(x, y);
    maxRef = 30;  // 修改y的值
    std::cout << "y: " << y << std::endl;  // 输出30
    return 0;
}
```

## 8.3 默认参数

默认参数允许在函数声明时为参数提供默认值。

### 8.3.1 默认参数的声明

```cpp
void printMessage(const std::string& msg, int times = 1);
```

### 8.3.2 默认参数的使用

```cpp
#include <iostream>
#include <string>

void printMessage(const std::string& msg, int times = 1) {
    for (int i = 0; i < times; i++) {
        std::cout << msg << std::endl;
    }
}

int main() {
    printMessage("Hello");           // 打印一次
    printMessage("World", 3);        // 打印三次
    return 0;
}
```

### 8.3.3 默认参数的规则

- 默认参数必须从右向左提供
- 函数声明和定义中只能有一处提供默认参数
- 调用函数时，从左向右匹配参数

## 8.4 函数重载

函数重载允许创建多个同名函数，但参数列表必须不同。

### 8.4.1 函数重载的声明

```cpp
int add(int a, int b);
double add(double a, double b);
std::string add(const std::string& a, const std::string& b);
```

### 8.4.2 函数重载的实现

```cpp
#include <iostream>
#include <string>

int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

std::string add(const std::string& a, const std::string& b) {
    return a + b;
}

int main() {
    std::cout << add(2, 3) << std::endl;           // 输出5
    std::cout << add(2.5, 3.5) << std::endl;       // 输出6
    std::cout << add("Hello, ", "World") << std::endl;  // 输出Hello, World
    return 0;
}
```

### 8.4.3 函数重载的注意事项

- 参数类型、数量或顺序必须不同
- 返回类型不同不足以区分重载函数
- 使用默认参数可能导致重载歧义

## 8.5 函数模板

函数模板是创建泛型函数的蓝图，可以处理多种数据类型。

### 8.5.1 函数模板的声明

```cpp
template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}
```

### 8.5.2 函数模板的使用

```cpp
#include <iostream>

template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    std::cout << max(3, 7) << std::endl;        // 输出7（int版本）
    std::cout << max(3.14, 2.71) << std::endl;  // 输出3.14（double版本）
    std::cout << max('a', 'z') << std::endl;    // 输出z（char版本）
    return 0;
}
```

### 8.5.3 函数模板的具体化

可以为特定类型提供具体实现：

```cpp
template <>
const char* max<const char*>(const char* a, const char* b) {
    return (std::strcmp(a, b) > 0) ? a : b;
}
```

### 8.5.4 多参数函数模板

```cpp
template <typename T, typename U>
auto add(T a, U b) -> decltype(a + b) {
    return a + b;
}
```

## 8.6 综合示例

以下程序演示了本章的高级函数特性：

```cpp
#include <iostream>
#include <string>

// 内联函数
inline int square(int x) {
    return x * x;
}

// 引用参数
void swapValues(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

// 默认参数
void greet(const std::string& name, const std::string& greeting = "Hello") {
    std::cout << greeting << ", " << name << "!" << std::endl;
}

// 函数重载
int multiply(int a, int b) {
    return a * b;
}

double multiply(double a, double b) {
    return a * b;
}

// 函数模板
template <typename T>
T getMax(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    // 内联函数
    std::cout << "Square of 5: " << square(5) << std::endl;
    
    // 引用参数
    int x = 10, y = 20;
    swapValues(x, y);
    std::cout << "After swap: x=" << x << ", y=" << y << std::endl;
    
    // 默认参数
    greet("Alice");           // 使用默认问候语
    greet("Bob", "Hi");       // 自定义问候语
    
    // 函数重载
    std::cout << multiply(3, 4) << std::endl;     // 输出12
    std::cout << multiply(2.5, 3.5) << std::endl; // 输出8.75
    
    // 函数模板
    std::cout << getMax(10, 20) << std::endl;     // 输出20
    std::cout << getMax(3.14, 2.71) << std::endl; // 输出3.14
    
    return 0;
}
```

## 8.7 小结

本章介绍了C++函数的高级特性，包括内联函数、引用变量、默认参数、函数重载和函数模板。这些特性使函数更加灵活和强大，为面向对象编程和泛型编程奠定了基础。

