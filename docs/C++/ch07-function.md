# 第7章 函数——C++的编程模块



## 本章概述

本章将介绍C++函数的基本知识，包括函数定义、声明和调用，参数传递方式，数组作为函数参数，递归函数，以及函数指针。函数是C++程序的基本构建块，掌握函数的使用对于编写模块化、可维护的代码至关重要。

## 7.1 函数基础

函数是一段完成特定任务的代码块。在C++中，函数分为两类：有返回值的函数和无返回值的函数（void函数）。

### 7.1.1 定义函数

无返回值的函数使用`void`关键字：

```cpp
void functionName(parameterList) {
    statements;
    return; // 可选
}
```

有返回值的函数需要指定返回类型：

```cpp
typeName functionName(parameterList) {
    statements;
    return value; // 必须返回与类型匹配的值
}
```

### 7.1.2 函数原型和函数调用

函数原型是函数的声明，告诉编译器函数的返回类型、参数类型和数量。原型以分号结尾：

```cpp
double cube(double x); // 函数原型
void cheers(int n);    // 函数原型
```

函数调用使用函数名和参数列表：

```cpp
double result = cube(2.0); // 函数调用
cheers(5);                 // 函数调用
```

## 7.2 参数传递

C++支持三种参数传递方式：值传递、地址传递和引用传递。

### 7.2.1 值传递

值传递将参数的副本传递给函数，函数内部对参数的修改不会影响原始值：

```cpp
void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    // 交换的是副本，不影响原始值
}
```

### 7.2.2 地址传递

通过指针传递数组或变量的地址，函数可以修改原始数据：

```cpp
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
    // 通过指针修改原始值
}
```

### 7.2.3 引用传递

引用传递使用引用变量，直接操作原始数据：

```cpp
void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
    // 直接修改原始值
}
```

## 7.3 数组参数

数组作为函数参数时，实际传递的是数组的地址。

### 7.3.1 数组作为函数参数

```cpp
int sumArray(int arr[], int size) {
    int total = 0;
    for (int i = 0; i < size; i++) {
        total += arr[i];
    }
    return total;
}
```

### 7.3.2 二维数组参数

二维数组作为参数时，必须指定列数：

```cpp
void printMatrix(int matrix[][4], int rows) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < 4; j++) {
            std::cout << matrix[i][j] << " ";
        }
        std::cout << std::endl;
    }
}
```

## 7.4 函数和数组

### 7.4.1 使用数组区间

可以通过传递起始指针和结束指针来处理数组的一部分：

```cpp
int sumRange(const int* begin, const int* end) {
    int total = 0;
    for (const int* p = begin; p < end; p++) {
        total += *p;
    }
    return total;
}
```

## 7.5 递归

递归是函数调用自身的编程技术。递归函数必须有终止条件。

### 7.5.1 递归示例

计算阶乘：

```cpp
int factorial(int n) {
    if (n <= 1) return 1;  // 终止条件
    return n * factorial(n - 1);  // 递归调用
}
```

### 7.5.2 递归与循环

递归可以简化某些问题，但可能导致栈溢出。对于简单问题，循环通常更高效。

## 7.6 函数指针

函数指针是指向函数的指针变量，可以用于动态调用函数。

### 7.6.1 声明函数指针

```cpp
int (*funcPtr)(int, int);  // 指向返回int、接受两个int参数的函数
```

### 7.6.2 使用函数指针

```cpp
int add(int a, int b) { return a + b; }
int multiply(int a, int b) { return a * b; }

int main() {
    int (*operation)(int, int);
    operation = add;
    std::cout << operation(2, 3) << std::endl;  // 输出5
    
    operation = multiply;
    std::cout << operation(2, 3) << std::endl;  // 输出6
    return 0;
}
```

### 7.6.3 函数指针作为参数

```cpp
void applyOperation(int a, int b, int (*op)(int, int)) {
    std::cout << "Result: " << op(a, b) << std::endl;
}
```

## 7.7 综合示例

以下程序演示了函数的各种用法：

```cpp
#include <iostream>

// 函数声明
void displayMessage();
int add(int a, int b);
void swap(int& a, int& b);
int factorial(int n);

int main() {
    // 调用无返回值函数
    displayMessage();
    
    // 调用有返回值函数
    int sum = add(5, 3);
    std::cout << "Sum: " << sum << std::endl;
    
    // 引用传递
    int x = 10, y = 20;
    swap(x, y);
    std::cout << "After swap: x=" << x << ", y=" << y << std::endl;
    
    // 递归函数
    std::cout << "Factorial of 5: " << factorial(5) << std::endl;
    
    return 0;
}

// 函数定义
void displayMessage() {
    std::cout << "Hello, this is a function example!" << std::endl;
}

int add(int a, int b) {
    return a + b;
}

void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
```

## 7.8 小结

本章介绍了C++函数的基础知识，包括函数定义、声明、调用，参数传递方式，数组参数，递归和函数指针。掌握这些概念是编写模块化、可维护C++程序的基础。

