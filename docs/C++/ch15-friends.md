# 第15章 友元、异常和其他



## 15.1 友元

### 15.1.1 友元类

```cpp
class TV {
    friend class Remote;  // Remote可以访问TV的私有成员
private:
    bool onOff;
    int channel;
    int volume;

public:
    TV() : onOff(false), channel(1), volume(5) {}
};

class Remote {
public:
    void setChannel(TV& tv, int ch) {
        tv.channel = ch;  // 可以访问私有成员
    }
};
```

### 15.1.2 友元成员函数

```cpp
class TV;

class Remote {
public:
    void setChannel(TV& tv, int ch);
};

class TV {
    friend void Remote::setChannel(TV& tv, int ch);
private:
    int channel;

public:
    TV() : channel(1) {}
};

void Remote::setChannel(TV& tv, int ch) {
    tv.channel = ch;
}
```

### 15.1.3 其他友元关系

```cpp
// 双向友元
class ClassB;

class ClassA {
    friend void funcA(ClassA& a, ClassB& b);
};

class ClassB {
    friend void funcA(ClassA& a, ClassB& b);
};

void funcA(ClassA& a, ClassB& b) {
    // 可以访问a和b的私有成员
}
```

### 15.1.4 共同的友元

```cpp
class ClassA {
    friend void commonFunc(ClassA& a, ClassB& b);
};

class ClassB {
    friend void commonFunc(ClassA& a, ClassB& b);
};

void commonFunc(ClassA& a, ClassB& b) {
    // 可以访问两个类的私有成员
}
```

---

## 15.2 嵌套类

### 15.2.1 嵌套类和访问权限

```cpp
class Queue {
private:
    class Node {
    public:
        int data;
        Node* next;
        Node(int d) : data(d), next(nullptr) {}
    };
    
    Node* front;
    Node* rear;

public:
    Queue();
    void enqueue(int data);
    int dequeue();
};

Queue::Queue() : front(nullptr), rear(nullptr) {}

void Queue::enqueue(int data) {
    Node* newNode = new Node(data);
    if (rear) rear->next = newNode;
    rear = newNode;
    if (!front) front = newNode;
}
```

### 15.2.2 模板中的嵌套

```cpp
template <typename T>
class Stack {
private:
    class Node {
    public:
        T data;
        Node* next;
        Node(const T& d, Node* n = nullptr) : data(d), next(n) {}
    };
    
    Node* top;

public:
    Stack();
    ~Stack();
    void push(const T& item);
    T pop();
};
```

---

## 15.3 异常

### 15.3.1 调用abort()

```cpp
#include <cstdlib>

void func() {
    // 发生错误
    abort();  // 终止程序
}
```

### 15.3.2 返回错误码

```cpp
enum Error { NO_ERROR, FILE_NOT_FOUND, INVALID_DATA };

Error readFile(const char* filename) {
    FILE* file = fopen(filename, "r");
    if (!file) return FILE_NOT_FOUND;
    // ...
    fclose(file);
    return NO_ERROR;
}

int main() {
    Error err = readFile("data.txt");
    if (err != NO_ERROR) {
        cerr << "Error: " << err << endl;
    }
    return 0;
}
```

### 15.3.3 异常机制

```cpp
// 抛出异常
double divide(double a, double b) {
    if (b == 0) {
        throw runtime_error("Division by zero");
    }
    return a / b;
}

// 捕获异常
int main() {
    try {
        double result = divide(10, 0);
        cout << result << endl;
    } catch (const runtime_error& e) {
        cerr << "Error: " << e.what() << endl;
    }
    return 0;
}
```

### 15.3.4 将对象用作异常类型

```cpp
class BadValue {
private:
    int value;
    string message;

public:
    BadValue(int v, const string& m) : value(v), message(m) {}
    int getValue() const { return value; }
    string getMessage() const { return message; }
};

void process(int value) {
    if (value < 0) {
        throw BadValue(value, "Negative value not allowed");
    }
    // ...
}

int main() {
    try {
        process(-5);
    } catch (const BadValue& e) {
        cerr << e.getMessage() << ": " << e.getValue() << endl;
    }
    return 0;
}
```

### 15.3.5 异常规范和C++11

```cpp
// C++98异常规范（已弃用）
void func() throw(runtime_error) {
    throw runtime_error("Error");
}

// C++11
void func() noexcept {  // 不会抛出异常
    // ...
}

void func2() {  // 可能抛出异常
    throw runtime_error("Error");
}
```

### 15.3.6 栈解退

```cpp
void func1() {
    int* arr = new int[100];
    throw runtime_error("Error in func1");
    delete[] arr;  // 永远不会执行
}

void func2() {
    try {
        func1();
    } catch (const runtime_error& e) {
        cerr << e.what() << endl;
    }
}

int main() {
    func2();
    return 0;
}
```

栈解退时：
1. 调用栈中的自动对象被销毁
2. 析构函数被调用
3. 局部对象的内存被释放

### 15.3.7 其他异常特性

```cpp
// catch(...)捕获所有异常
try {
    // 可能抛出异常的代码
} catch (...) {
    cerr << "Unknown exception" << endl;
}

// 重新抛出异常
try {
    try {
        throw runtime_error("Error");
    } catch (const runtime_error& e) {
        cerr << "Caught: " << e.what() << endl;
        throw;  // 重新抛出
    }
} catch (const runtime_error& e) {
    cerr << "Re-caught: " << e.what() << endl;
}
```

### 15.3.8 exception类

```cpp
#include <exception>
#include <stdexcept>

// 标准异常类层次
// exception
// ├── logic_error
// │   ├── invalid_argument
// │   ├── domain_error
// │   ├── length_error
// │   └── out_of_range
// └── runtime_error
//     ├── range_error
//     ├── overflow_error
//     └── underflow_error

try {
    throw out_of_range("Index out of bounds");
} catch (const out_of_range& e) {
    cerr << e.what() << endl;
} catch (const logic_error& e) {
    cerr << "Logic error: " << e.what() << endl;
} catch (const exception& e) {
    cerr << "Exception: " << e.what() << endl;
}
```

### 15.3.9 异常、类和继承

```cpp
class BaseException : public exception {
public:
    virtual const char* what() const noexcept override {
        return "Base exception";
    }
};

class DerivedException : public BaseException {
public:
    const char* what() const noexcept override {
        return "Derived exception";
    }
};

int main() {
    try {
        throw DerivedException();
    } catch (const DerivedException& e) {
        cerr << e.what() << endl;  // Derived exception
    } catch (const BaseException& e) {
        cerr << e.what() << endl;  // Base exception
    } catch (const exception& e) {
        cerr << e.what() << endl;  // Exception
    }
    return 0;
}
```

### 15.3.10 异常何时会迷失方向

异常迷失方向的情况：
- 异常未被捕获
- 异常在析构函数中抛出
- 异常在构造函数中抛出

解决方案：
- 使用`noexcept`声明不会抛出异常的函数
- 在析构函数中捕获所有异常

### 15.3.11 有关异常的注意事项

- 异常不应该用于正常的控制流
- 异常会带来性能开销
- 保持异常类型的一致性
- 文档化可能抛出的异常

---

## 15.4 RTTI（运行时类型识别）

### 15.4.1 RTTI的用途

```cpp
class Base {
public:
    virtual void display() {}
};

class Derived : public Base {
public:
    void display() override { cout << "Derived" << endl; }
};

void identify(Base* ptr) {
    if (typeid(*ptr) == typeid(Derived)) {
        cout << "Is Derived" << endl;
    }
    
    Derived* dp = dynamic_cast<Derived*>(ptr);
    if (dp) {
        dp->display();
    }
}
```

### 15.4.2 RTTI的工作原理

```cpp
#include <typeinfo>

class Base {
public:
    virtual void display() {}
};

class Derived : public Base {
public:
    void display() override {}
};

int main() {
    Base* ptr = new Derived();
    
    // typeid获取类型信息
    cout << typeid(*ptr).name() << endl;  // Derived
    
    // dynamic_cast安全地转换类型
    Derived* dp = dynamic_cast<Derived*>(ptr);
    if (dp) {
        cout << "Cast successful" << endl;
    }
    
    delete ptr;
    return 0;
}
```

RTTI运算符：
| 运算符 | 用途 |
|--------|------|
| `typeid` | 获取类型信息 |
| `dynamic_cast` | 安全的向下转型 |

---

## 15.5 类型转换运算符

```cpp
class Number {
private:
    double value;

public:
    Number(double v) : value(v) {}
    
    // 转换函数
    operator int() const { return static_cast<int>(value); }
    operator double() const { return value; }
    explicit operator bool() const { return value != 0; }
};

Number n(3.14);
int i = n;         // 使用隐式转换
double d = n;      // 使用隐式转换
bool b = (bool)n;  // 显式转换（explicit）
```

---

## 15.6 总结

- 友元允许访问类的私有成员
- 嵌套类在类内部定义
- 异常处理运行时错误
- RTTI提供运行时类型信息
- 类型转换运算符实现自定义转换

---

## 15.7 复习题

1. 友元类和友元成员函数有什么区别？
2. 异常处理的基本语法是什么？
3. RTTI提供了哪些功能？
4. 如何定义类型转换函数？

---

## 15.8 编程练习

1. 实现一个异常类层次
2. 使用RTTI实现多态类型检查
3. 设计一个使用友元的类

