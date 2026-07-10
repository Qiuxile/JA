# 第11章 使用类



## 本章概述

本章将介绍C++类的高级使用技巧，包括运算符重载、友元函数、类型转换、自增/自减运算符重载以及智能指针简介。

## 11.1 运算符重载

### 11.1.1 基本语法

```cpp
class Vector {
private:
    double x, y;
    
public:
    Vector(double x = 0, double y = 0) : x(x), y(y) {}
    
    Vector operator+(const Vector& other) const {
        return Vector(x + other.x, y + other.y);
    }
    
    Vector operator-(const Vector& other) const {
        return Vector(x - other.x, y - other.y);
    }
    
    Vector operator*(double scalar) const {
        return Vector(x * scalar, y * scalar);
    }
};
```

### 11.1.2 友元函数重载

```cpp
class Vector {
private:
    double x, y;
    
public:
    Vector(double x = 0, double y = 0) : x(x), y(y) {}
    
    friend Vector operator*(double scalar, const Vector& v) {
        return Vector(scalar * v.x, scalar * v.y);
    }
    
    friend std::ostream& operator<<(std::ostream& os, const Vector& v) {
        os << "(" << v.x << ", " << v.y << ")";
        return os;
    }
};
```

## 11.2 友元

### 11.2.1 友元函数

```cpp
class Box {
private:
    double width;
    
public:
    Box(double w) : width(w) {}
    
    friend void printWidth(const Box& box);
};

void printWidth(const Box& box) {
    std::cout << "Width: " << box.width << std::endl;
}
```

### 11.2.2 友元类

```cpp
class ClassB;  // 前向声明

class ClassA {
private:
    int secret;
    
public:
    friend ClassB;
};

class ClassB {
public:
    void accessSecret(const ClassA& a) {
        std::cout << "Secret: " << a.secret << std::endl;
    }
};
```

## 11.3 类型转换

### 11.3.1 转换构造函数

```cpp
class Money {
private:
    double amount;
    
public:
    Money(double a) : amount(a) {}
    
    explicit Money(int cents) : amount(cents / 100.0) {}
    
    double getAmount() const { return amount; }
};
```

### 11.3.2 转换函数

```cpp
class Fraction {
private:
    int numerator, denominator;
    
public:
    Fraction(int num, int den) : numerator(num), denominator(den) {}
    
    operator double() const {
        return static_cast<double>(numerator) / denominator;
    }
    
    operator bool() const {
        return denominator != 0;
    }
};
```

## 11.4 自增/自减运算符

### 11.4.1 前缀版本

```cpp
class Counter {
private:
    int value;
    
public:
    Counter(int v = 0) : value(v) {}
    
    Counter& operator++() {
        ++value;
        return *this;
    }
    
    Counter& operator--() {
        --value;
        return *this;
    }
    
    int getValue() const { return value; }
};
```

### 11.4.2 后缀版本

```cpp
class Counter {
private:
    int value;
    
public:
    Counter(int v = 0) : value(v) {}
    
    Counter operator++(int) {
        Counter temp = *this;
        ++value;
        return temp;
    }
    
    Counter operator--(int) {
        Counter temp = *this;
        --value;
        return temp;
    }
    
    int getValue() const { return value; }
};
```

## 11.5 智能指针

### 11.5.1 unique_ptr

```cpp
#include <memory>

int main() {
    std::unique_ptr<int> p1(new int(10));
    std::unique_ptr<int> p2 = std::move(p1);  // 移动所有权
    
    std::cout << *p2 << std::endl;  // 输出10
    return 0;
}
```

### 11.5.2 shared_ptr

```cpp
#include <memory>

int main() {
    std::shared_ptr<int> p1(new int(10));
    std::shared_ptr<int> p2 = p1;  // 共享所有权
    
    std::cout << "Reference count: " << p1.use_count() << std::endl;  // 输出2
    return 0;
}
```

## 11.6 综合示例

```cpp
#include <iostream>
#include <memory>

class Money {
private:
    double amount;
    
public:
    Money(double a = 0) : amount(a) {}
    
    Money operator+(const Money& other) const {
        return Money(amount + other.amount);
    }
    
    Money& operator++() {
        ++amount;
        return *this;
    }
    
    Money operator++(int) {
        Money temp = *this;
        ++amount;
        return temp;
    }
    
    friend std::ostream& operator<<(std::ostream& os, const Money& m) {
        os << "$" << m.amount;
        return os;
    }
    
    explicit operator double() const {
        return amount;
    }
};

int main() {
    Money m1(100.50);
    Money m2(200.25);
    
    Money sum = m1 + m2;
    std::cout << "Sum: " << sum << std::endl;
    
    ++m1;
    std::cout << "After prefix increment: " << m1 << std::endl;
    
    m2++;
    std::cout << "After postfix increment: " << m2 << std::endl;
    
    return 0;
}
```

## 11.7 小结

本章介绍了C++类的高级使用技巧，包括运算符重载、友元函数、类型转换、自增/自减运算符重载以及智能指针简介。

