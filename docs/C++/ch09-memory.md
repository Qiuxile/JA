# 第9章 内存模型和名称空间



## 本章概述

本章将介绍C++的内存模型和名称空间，包括单独编译、存储方案、链接性、名称空间以及函数的链接性。理解内存管理对于编写高效、可靠的C++程序至关重要。

## 9.1 单独编译

C++支持将程序分成多个文件单独编译，然后链接成一个可执行文件。

### 9.1.1 头文件和源文件

头文件通常包含声明，源文件包含定义：

```cpp
// myheader.h - 头文件
#ifndef MYHEADER_H
#define MYHEADER_H

void displayMessage();
int add(int a, int b);

#endif
```

```cpp
// myheader.cpp - 源文件
#include "myheader.h"
#include <iostream>

void displayMessage() {
    std::cout << "Hello from myheader!" << std::endl;
}

int add(int a, int b) {
    return a + b;
}
```

### 9.1.2 编译和链接

```bash
# 编译源文件
g++ -c myheader.cpp -o myheader.o
g++ -c main.cpp -o main.o

# 链接成可执行文件
g++ myheader.o main.o -o program
```

## 9.2 存储方案

C++使用不同的存储方案来管理变量的生命周期和作用域。

### 9.2.1 自动存储

自动变量在函数执行时创建，函数结束时销毁：

```cpp
void function() {
    int autoVar = 10;  // 自动变量
}  // autoVar在此处销毁
```

### 9.2.2 静态存储

静态变量在程序启动时创建，程序结束时销毁：

```cpp
void function() {
    static int staticVar = 0;  // 静态变量
    staticVar++;
    std::cout << "Static var: " << staticVar << std::endl;
}

int main() {
    function();  // 输出1
    function();  // 输出2
    function();  // 输出3
    return 0;
}
```

### 9.2.3 动态存储

动态存储使用`new`和`delete`手动管理内存：

```cpp
int main() {
    int* dynamicVar = new int(10);  // 动态分配
    std::cout << *dynamicVar << std::endl;
    delete dynamicVar;  // 释放内存
    return 0;
}
```

## 9.3 链接性

链接性描述了名称在不同文件间的可见性。

### 9.3.1 外部链接性

外部链接性名称可以在其他文件中访问：

```cpp
// file1.cpp
int globalVar = 10;  // 外部链接性

// file2.cpp
extern int globalVar;  // 声明外部变量
std::cout << globalVar << std::endl;
```

### 9.3.2 内部链接性

内部链接性名称只在当前文件中可见：

```cpp
static int staticVar = 20;  // 内部链接性
```

### 9.3.3 无链接性

无链接性名称只在当前作用域中可见：

```cpp
void function() {
    int localVar = 30;  // 无链接性
}
```

## 9.4 名称空间

名称空间用于避免名称冲突，提供命名上下文。

### 9.4.1 名称空间的声明

```cpp
namespace MyNamespace {
    int value = 10;
    void display() {
        std::cout << "Value: " << value << std::endl;
    }
}
```

### 9.4.2 名称空间的使用

```cpp
// 使用using声明
using MyNamespace::value;
using MyNamespace::display;

// 使用using指令
using namespace MyNamespace;

// 使用作用域解析运算符
MyNamespace::value = 20;
MyNamespace::display();
```

### 9.4.3 名称空间的嵌套

```cpp
namespace Outer {
    namespace Inner {
        int value = 100;
    }
}

std::cout << Outer::Inner::value << std::endl;
```

### 9.4.4 未命名名称空间

未命名名称空间具有内部链接性：

```cpp
namespace {
    int secretValue = 42;  // 只在当前文件可见
}
```

## 9.5 函数的链接性

函数也有链接性，决定其在不同文件中的可见性。

### 9.5.1 外部函数

默认情况下，函数具有外部链接性：

```cpp
// file1.cpp
void externalFunction() {  // 外部链接性
    std::cout << "External function" << std::endl;
}

// file2.cpp
extern void externalFunction();  // 可以调用
```

### 9.5.2 静态函数

使用`static`关键字限制函数的链接性：

```cpp
static void staticFunction() {  // 内部链接性
    std::cout << "Static function" << std::endl;
}
```

## 9.6 动态内存分配

### 9.6.1 new和delete

```cpp
int main() {
    // 分配单个变量
    int* ptr = new int(100);
    delete ptr;
    
    // 分配数组
    int* arr = new int[10];
    delete[] arr;
    
    // 分配对象
    MyClass* obj = new MyClass();
    delete obj;
    
    return 0;
}
```

### 9.6.2 内存泄漏

避免内存泄漏，确保每个`new`都有对应的`delete`：

```cpp
void leakyFunction() {
    int* ptr = new int(10);  // 分配内存
    // 忘记delete，导致内存泄漏
}
```

## 9.7 综合示例

以下程序演示了内存模型和名称空间的使用：

```cpp
#include <iostream>

// 名称空间
namespace Math {
    const double PI = 3.14159;
    
    double circleArea(double radius) {
        return PI * radius * radius;
    }
}

// 静态变量
static int counter = 0;

void incrementCounter() {
    static int staticCounter = 0;  // 静态局部变量
    staticCounter++;
    counter++;
    std::cout << "Static counter: " << staticCounter << std::endl;
}

int main() {
    // 使用名称空间
    std::cout << "PI: " << Math::PI << std::endl;
    std::cout << "Circle area (r=5): " << Math::circleArea(5) << std::endl;
    
    // 使用静态变量
    incrementCounter();  // 输出1
    incrementCounter();  // 输出2
    incrementCounter();  // 输出3
    
    // 动态内存分配
    int* dynamicArray = new int[5];
    for (int i = 0; i < 5; i++) {
        dynamicArray[i] = i * 10;
    }
    
    for (int i = 0; i < 5; i++) {
        std::cout << dynamicArray[i] << " ";
    }
    std::cout << std::endl;
    
    delete[] dynamicArray;  // 释放内存
    
    return 0;
}
```

## 9.8 小结

本章介绍了C++的内存模型和名称空间，包括单独编译、存储方案、链接性、名称空间以及函数的链接性。理解这些概念对于管理内存、避免名称冲突和编写模块化程序非常重要。

