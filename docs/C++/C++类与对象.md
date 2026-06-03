# C++ 类与对象

## 类的定义

### 基本语法

```cpp
class ClassName {
public:
    // 公共成员
    void method();
private:
    // 私有成员
    int attribute;
protected:
    // 保护成员
    double value;
};
```

### 示例

```cpp
#include <iostream>
#include <string>
using namespace std;

class Person {
private:
    string name;
    int age;
    
public:
    // 构造函数
    Person(string n, int a) {
        name = n;
        age = a;
    }
    
    // 成员函数
    void introduce() {
        cout << "My name is " << name << ", I'm " << age << " years old." << endl;
    }
    
    // 获取年龄
    int getAge() {
        return age;
    }
    
    // 设置年龄
    void setAge(int newAge) {
        if (newAge > 0) {
            age = newAge;
        }
    }
};

int main() {
    Person p("John", 30);
    p.introduce();
    p.setAge(31);
    cout << "New age: " << p.getAge() << endl;
    return 0;
}
```

## 构造函数与析构函数

### 构造函数

```cpp
class Car {
private:
    string brand;
    string model;
    int year;
    
public:
    // 默认构造函数
    Car() {
        brand = "Unknown";
        model = "Unknown";
        year = 0;
    }
    
    // 参数化构造函数
    Car(string b, string m, int y) : brand(b), model(m), year(y) {}
    
    // 拷贝构造函数
    Car(const Car& other) {
        brand = other.brand;
        model = other.model;
        year = other.year;
    }
};
```

### 析构函数

```cpp
class Resource {
public:
    Resource() {
        cout << "Resource created" << endl;
    }
    
    ~Resource() {
        cout << "Resource destroyed" << endl;
    }
};
```

## 访问控制

```cpp
class Example {
public:
    // 公共成员：可以被外部访问
    int publicVar;
    void publicMethod() {}
    
private:
    // 私有成员：只能被类内部访问
    int privateVar;
    void privateMethod() {}
    
protected:
    // 保护成员：可以被类内部和派生类访问
    int protectedVar;
    void protectedMethod() {}
};
```

## 静态成员

```cpp
class Counter {
private:
    static int count;  // 静态成员变量
    
public:
    Counter() {
        count++;
    }
    
    static int getCount() {  // 静态成员函数
        return count;
    }
};

// 静态成员变量需要在类外初始化
int Counter::count = 0;

int main() {
    Counter c1, c2, c3;
    cout << "Count: " << Counter::getCount() << endl;  // 输出: 3
    return 0;
}
```

## 友元

### 友元函数

```cpp
class Box {
private:
    double width;
    
public:
    Box(double w) : width(w) {}
    
    // 声明友元函数
    friend double getWidth(Box box);
};

// 友元函数定义
double getWidth(Box box) {
    return box.width;  // 可以访问私有成员
}
```

### 友元类

```cpp
class Box {
private:
    double width;
    
    // 声明友元类
    friend class BoxFactory;
};

class BoxFactory {
public:
    Box createBox(double w) {
        Box box(w);
        return box;
    }
};
```
