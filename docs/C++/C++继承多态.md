# C++ 继承与多态

## 继承

### 基本语法

```cpp
class BaseClass {
    // 基类成员
};

class DerivedClass : accessSpecifier BaseClass {
    // 派生类成员
};
```

### 访问控制

| 访问说明符 | 基类中 | 派生类中 | 类外部 |
|-----------|--------|----------|--------|
| public | public | public | 可访问 |
| protected | protected | protected | 不可访问 |
| private | private | 不可直接访问 | 不可访问 |

### 继承方式

```cpp
// public 继承
class Derived : public Base {};

// protected 继承
class Derived : protected Base {};

// private 继承
class Derived : private Base {};
```

### 示例

```cpp
#include <iostream>
#include <string>
using namespace std;

class Animal {
protected:
    string name;
    
public:
    Animal(string n) : name(n) {}
    
    void eat() {
        cout << name << " is eating." << endl;
    }
};

class Dog : public Animal {
public:
    Dog(string n) : Animal(n) {}
    
    void bark() {
        cout << name << " says Woof!" << endl;
    }
};

int main() {
    Dog dog("Buddy");
    dog.eat();   // 继承自 Animal
    dog.bark();  // Dog 自己的方法
    return 0;
}
```

## 多态

### 虚函数

```cpp
class Shape {
public:
    virtual double area() {
        return 0;
    }
    
    virtual ~Shape() {}  // 虚析构函数
};

class Circle : public Shape {
private:
    double radius;
    
public:
    Circle(double r) : radius(r) {}
    
    double area() override {
        return 3.14159 * radius * radius;
    }
};

class Rectangle : public Shape {
private:
    double width, height;
    
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    
    double area() override {
        return width * height;
    }
};
```

### 纯虚函数与抽象类

```cpp
// 抽象类
class Shape {
public:
    // 纯虚函数
    virtual double area() = 0;
    virtual double perimeter() = 0;
    
    virtual ~Shape() {}
};

class Square : public Shape {
private:
    double side;
    
public:
    Square(double s) : side(s) {}
    
    double area() override {
        return side * side;
    }
    
    double perimeter() override {
        return 4 * side;
    }
};
```

### 多态使用

```cpp
void printArea(Shape* shape) {
    cout << "Area: " << shape->area() << endl;
}

int main() {
    Circle c(5);
    Rectangle r(4, 6);
    
    printArea(&c);   // 调用 Circle::area()
    printArea(&r);   // 调用 Rectangle::area()
    
    return 0;
}
```

## 虚析构函数

```cpp
class Base {
public:
    virtual ~Base() {
        cout << "Base destructor" << endl;
    }
};

class Derived : public Base {
public:
    ~Derived() {
        cout << "Derived destructor" << endl;
    }
};

int main() {
    Base* ptr = new Derived();
    delete ptr;  // 正确调用两个析构函数
    return 0;
}
```

## 多重继承

```cpp
class A {
public:
    void methodA() { cout << "A" << endl; }
};

class B {
public:
    void methodB() { cout << "B" << endl; }
};

class C : public A, public B {
public:
    void methodC() { cout << "C" << endl; }
};

int main() {
    C c;
    c.methodA();  // 来自 A
    c.methodB();  // 来自 B
    c.methodC();  // 来自 C
    return 0;
}
```
