# 第10章 对象和类


## 本章概述

本章将介绍C++面向对象编程的基础，包括抽象和类的概念、类的实现、构造函数、析构函数、this指针、const成员函数和静态成员。

## 10.1 抽象和类

### 10.1.1 抽象数据类型

抽象数据类型（ADT）隐藏实现细节，只暴露接口：

```cpp
class BankAccount {
private:
    double balance;  // 隐藏实现
    
public:
    void deposit(double amount);
    void withdraw(double amount);
    double getBalance() const;
};
```

### 10.1.2 类的声明

```cpp
class MyClass {
private:
    int privateVar;  // 私有成员
    
protected:
    int protectedVar;  // 受保护成员
    
public:
    int publicVar;  // 公有成员
    void publicMethod();  // 公有方法
};
```

## 10.2 类的实现

### 10.2.1 成员函数定义

```cpp
class Circle {
private:
    double radius;
    
public:
    // 类内定义
    double getArea() {
        return 3.14159 * radius * radius;
    }
    
    // 类外定义
    void setRadius(double r);
};

void Circle::setRadius(double r) {
    radius = r;
}
```

## 10.3 构造函数

### 10.3.1 默认构造函数

```cpp
class Person {
private:
    std::string name;
    int age;
    
public:
    Person() : name("Unknown"), age(0) {}
};
```

### 10.3.2 带参数的构造函数

```cpp
class Person {
private:
    std::string name;
    int age;
    
public:
    Person(const std::string& n, int a) : name(n), age(a) {}
};
```

### 10.3.3 构造函数重载

```cpp
class Rectangle {
private:
    double width, height;
    
public:
    Rectangle() : width(0), height(0) {}
    Rectangle(double w, double h) : width(w), height(h) {}
    Rectangle(double side) : width(side), height(side) {}
};
```

## 10.4 析构函数

析构函数在对象销毁时自动调用：

```cpp
class Resource {
private:
    int* data;
    
public:
    Resource() {
        data = new int[100];
    }
    
    ~Resource() {
        delete[] data;
    }
};
```

## 10.5 this指针

this指针指向调用成员函数的对象：

```cpp
class Person {
private:
    std::string name;
    
public:
    Person(const std::string& name) {
        this->name = name;
    }
    
    Person& setName(const std::string& name) {
        this->name = name;
        return *this;  // 支持链式调用
    }
};
```

## 10.6 const成员函数

const成员函数不能修改对象：

```cpp
class Circle {
private:
    double radius;
    
public:
    double getArea() const {  // const成员函数
        return 3.14159 * radius * radius;
    }
    
    void setRadius(double r) {  // 非const成员函数
        radius = r;
    }
};
```

## 10.7 静态成员

静态成员属于类而不是对象：

```cpp
class Counter {
private:
    static int count;  // 静态数据成员
    
public:
    Counter() { count++; }
    ~Counter() { count--; }
    
    static int getCount() {  // 静态成员函数
        return count;
    }
};

int Counter::count = 0;  // 初始化
```

## 10.8 综合示例

```cpp
#include <iostream>
#include <string>

class Student {
private:
    std::string name;
    int age;
    double gpa;
    static int studentCount;
    
public:
    Student() : name("Unknown"), age(0), gpa(0.0) {
        studentCount++;
    }
    
    Student(const std::string& n, int a, double g) : name(n), age(a), gpa(g) {
        studentCount++;
    }
    
    ~Student() {
        studentCount--;
    }
    
    void display() const {
        std::cout << "Name: " << name << ", Age: " << age << ", GPA: " << gpa << std::endl;
    }
    
    static int getStudentCount() {
        return studentCount;
    }
};

int Student::studentCount = 0;

int main() {
    Student s1("Alice", 20, 3.8);
    Student s2("Bob", 22, 3.5);
    
    s1.display();
    s2.display();
    
    std::cout << "Total students: " << Student::getStudentCount() << std::endl;
    
    return 0;
}
```

## 10.9 小结

本章介绍了C++面向对象编程的基础，包括抽象和类、类的实现、构造函数、析构函数、this指针、const成员函数和静态成员。

