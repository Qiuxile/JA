# 第14章 C++中的代码重用



## 14.1 包含对象成员的类

### 14.1.1 valarray类简介

```cpp
#include <valarray>

// valarray用于数值数组
valarray<int> scores(10);  // 10个元素，初始化为0
valarray<double> values = {1.1, 2.2, 3.3};

// 操作
scores.size();     // 大小
scores.sum();      // 求和
scores.max();      // 最大值
scores.min();      // 最小值
```

### 14.1.2 Student类的设计

```cpp
class Student {
private:
    string name;
    valarray<double> scores;

public:
    Student(const string& n, const double* sc, int num);
    Student(const string& n);
    Student();
    ~Student();
    
    double average() const;
    const string& getName() const;
    const valarray<double>& getScores() const;
    
    friend ostream& operator<<(ostream& os, const Student& s);
};
```

### 14.1.3 Student类示例

```cpp
Student::Student(const string& n, const double* sc, int num)
    : name(n), scores(sc, num) {}

Student::Student(const string& n) : name(n), scores() {}

double Student::average() const {
    return scores.sum() / scores.size();
}

ostream& operator<<(ostream& os, const Student& s) {
    os << "Name: " << s.name << endl;
    os << "Scores: ";
    for (int i = 0; i < s.scores.size(); i++) {
        os << s.scores[i] << " ";
    }
    return os;
}
```

---

## 14.2 私有继承

### 14.2.1 Student类示例（新版本）

```cpp
// 使用私有继承
class Student : private string, private valarray<double> {
public:
    Student(const string& n, const double* sc, int num);
    Student(const string& n);
    
    double average() const;
    const string& getName() const;
    
    friend ostream& operator<<(ostream& os, const Student& s);
};

// 实现
Student::Student(const string& n, const double* sc, int num)
    : string(n), valarray<double>(sc, num) {}

double Student::average() const {
    return valarray<double>::sum() / valarray<double>::size();
}
```

### 14.2.2 使用包含还是私有继承

| 特性 | 包含 | 私有继承 |
|------|------|----------|
| 代码重用 | 是 | 是 |
| is-a关系 | 否 | 是（私有）|
| 访问基类成员 | 通过对象 | 需要显式 |
| 可读性 | 更好 | 较差 |

### 14.2.3 保护继承

```cpp
class Student : protected string, protected valarray<double> {
    // 基类成员在Student中是protected
};

// 派生类可以访问这些成员
class GraduateStudent : public Student {
public:
    void func() {
        // 可以访问string和valarray的protected成员
    }
};
```

### 14.2.4 使用using重新定义访问权限

```cpp
class Student : private string, private valarray<double> {
public:
    using string::operator=;  // 使赋值运算符公有
    using valarray<double>::size;  // 使size()公有
    using valarray<double>::operator[];
};
```

---

## 14.3 多重继承

```cpp
class Worker { /* ... */ };
class SingingWorker : public Worker, public Singer { /* ... */ };
```

### 14.3.1 有多少Worker

```cpp
class Worker {
protected:
    string name;
};

class Singer : public Worker {
protected:
    int voiceRange;
};

class Dancer : public Worker {
protected:
    int danceStyle;
};

class SingingDancer : public Singer, public Dancer {
    // 包含两个Worker子对象
};
```

### 14.3.2 哪个方法

```cpp
// 菱形继承问题
class Animal { public: int age; };
class Dog : public Animal { /* ... */ };
class Bird : public Animal { /* ... */ };
class FlyingDog : public Dog, public Bird {
    // 有两个age副本
};

// 虚基类解决
class Dog : virtual public Animal { /* ... */ };
class Bird : virtual public Animal { /* ... */ };
class FlyingDog : public Dog, public Bird {
    // 只有一个age副本
};
```

### 14.3.3 MI小结

- 多重继承可能带来菱形继承问题
- 虚基类解决菱形继承
- 使用using声明简化访问

---

## 14.4 类模板

### 14.4.1 定义类模板

```cpp
template <typename T>
class Stack {
private:
    static const int MAX = 10;
    T items[MAX];
    int top;

public:
    Stack();
    bool isEmpty() const;
    bool isFull() const;
    bool push(const T& item);
    bool pop(T& item);
};

template <typename T>
Stack<T>::Stack() : top(-1) {}

template <typename T>
bool Stack<T>::isEmpty() const {
    return top == -1;
}

template <typename T>
bool Stack<T>::push(const T& item) {
    if (isFull()) return false;
    items[++top] = item;
    return true;
}

template <typename T>
bool Stack<T>::pop(T& item) {
    if (isEmpty()) return false;
    item = items[top--];
    return true;
}
```

### 14.4.2 使用模板类

```cpp
Stack<int> intStack;
Stack<string> stringStack;

intStack.push(10);
intStack.push(20);

stringStack.push("Hello");
stringStack.push("World");
```

### 14.4.3 深入探讨模板类

```cpp
// 模板类可以包含静态成员
template <typename T>
class Counter {
private:
    static int count;
public:
    Counter() { count++; }
    ~Counter() { count--; }
    static int getCount() { return count; }
};

template <typename T>
int Counter<T>::count = 0;
```

### 14.4.4 数组模板示例和非类型参数

```cpp
template <typename T, int n>
class Array {
private:
    T items[n];

public:
    T& operator[](int i) { return items[i]; }
    const T& operator[](int i) const { return items[i]; }
    int size() const { return n; }
};

Array<int, 10> intArray;
Array<double, 5> doubleArray;
```

### 14.4.5 模板多功能性

```cpp
// 模板可以用于各种类型
template <typename T>
class Point {
public:
    T x, y;
    Point(T x, T y) : x(x), y(y) {}
};

Point<int> p1(3, 4);
Point<double> p2(3.14, 2.71);
Point<string> p3("Hello", "World");
```

### 14.4.6 模板的具体化

```cpp
// 显式具体化
template <>
class Point<char*> {
public:
    char* x;
    char* y;
    Point(char* x, char* y);
};

// 部分具体化
template <typename T>
class Point<T*> {
public:
    T* x;
    T* y;
};
```

### 14.4.7 成员模板

```cpp
template <typename T>
class Outer {
private:
    T value;

public:
    template <typename U>
    void func(U u) {
        cout << value << " " << u << endl;
    }
};

Outer<int> outer;
outer.func("Hello");  // 成员模板
```

### 14.4.8 将模板用作参数

```cpp
template <template <typename T> class Container>
class MyClass {
private:
    Container<int> intContainer;
    Container<string> stringContainer;
};

MyClass<Stack> obj;  // Stack作为模板参数
```

### 14.4.9 模板类和友元

```cpp
template <typename T>
class Point {
    friend ostream& operator<<(ostream& os, const Point<T>& p);
    // ...
};

// 非模板友元
template <typename T>
ostream& operator<<(ostream& os, const Point<T>& p) {
    os << "(" << p.x << ", " << p.y << ")";
    return os;
}

// 绑定的模板友元
template <typename T>
class Point {
    friend void func<T>(Point<T>& p);
};

// 非绑定的模板友元
template <typename T>
class Point {
    template <typename U>
    friend void func(Point<U>& p);
};
```

### 14.4.10 模板别名（C++11）

```cpp
template <typename T>
using Array = std::vector<T>;

Array<int> nums = {1, 2, 3};
Array<string> strs = {"Hello", "World"};
```

---

## 14.5 总结

- 包含和私有继承都可以实现代码重用
- 多重继承需要处理菱形继承问题
- 类模板提供通用代码生成
- 模板可以有非类型参数和特化

---

## 14.6 复习题

1. 包含和私有继承有什么区别？
2. 什么是菱形继承？
3. 如何定义类模板？
4. 模板特化是什么？

---

## 14.7 编程练习

1. 实现一个通用的栈模板类
2. 使用包含实现一个队列类
3. 实现一个模板化的链表

