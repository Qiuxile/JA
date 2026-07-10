# 第12章 类和动态内存分配



## 12.1 动态内存和类

### 12.1.1 复习示例和静态类成员

```cpp
class StringBad {
private:
    char* str;
    int len;
    static int num_strings;  // 静态成员

public:
    StringBad(const char* s);
    StringBad();
    ~StringBad();
    friend ostream& operator<<(ostream& os, const StringBad& st);
};

int StringBad::num_strings = 0;  // 初始化静态成员

StringBad::StringBad(const char* s) {
    len = strlen(s);
    str = new char[len + 1];
    strcpy(str, s);
    num_strings++;
}

StringBad::~StringBad() {
    num_strings--;
    delete[] str;  // 释放动态内存
}
```

### 12.1.2 特殊成员函数

C++自动提供以下成员函数：
| 函数 | 用途 |
|------|------|
| 默认构造函数 | 无参数时创建对象 |
| 默认析构函数 | 释放资源 |
| 拷贝构造函数 | 复制对象 |
| 赋值运算符 | 赋值给现有对象 |
| 取地址运算符 | 返回对象地址 |

### 12.1.3 回到StringBad：复制构造函数的哪里出了问题

```cpp
// 浅拷贝问题
StringBad s1("Hello");
StringBad s2 = s1;  // 浅拷贝：s2.str指向同一内存

// 深拷贝解决方案
StringBad::StringBad(const StringBad& other) {
    len = other.len;
    str = new char[len + 1];  // 分配新内存
    strcpy(str, other.str);   // 复制内容
}
```

### 12.1.4 Stringbad的其他问题：赋值运算符

```cpp
// 赋值运算符重载
StringBad& StringBad::operator=(const StringBad& other) {
    if (this != &other) {  // 检查自赋值
        delete[] str;       // 释放原有内存
        len = other.len;
        str = new char[len + 1];
        strcpy(str, other.str);
    }
    return *this;
}
```

---

## 12.2 改进后的新String类

```cpp
class String {
private:
    char* str;
    int len;
    static int num_strings;
    static const int CINLIM = 80;

public:
    String(const char* s);
    String();
    String(const String& other);
    ~String();
    
    String& operator=(const String& other);
    String& operator=(const char* s);
    
    friend ostream& operator<<(ostream& os, const String& st);
    friend istream& operator>>(istream& is, String& st);
    
    char& operator[](int i);
    const char& operator[](int i) const;
    
    static int howMany();
};
```

### 12.2.1 修订后的默认构造函数

```cpp
String::String() {
    len = 0;
    str = new char[1];
    str[0] = '\0';
}
```

### 12.2.2 比较成员函数

```cpp
bool operator>(const String& s1, const String& s2) {
    return strcmp(s1.str, s2.str) > 0;
}

bool operator<(const String& s1, const String& s2) {
    return strcmp(s1.str, s2.str) < 0;
}

bool operator==(const String& s1, const String& s2) {
    return strcmp(s1.str, s2.str) == 0;
}
```

### 12.2.3 使用中括号表示法访问字符

```cpp
char& String::operator[](int i) {
    return str[i];
}

const char& String::operator[](int i) const {
    return str[i];
}

// 使用
String s("Hello");
cout << s[0] << endl;  // 输出：H
s[0] = 'h';            // 修改字符
```

### 12.2.4 静态类成员函数

```cpp
int String::howMany() {
    return num_strings;
}

// 使用
cout << "Current strings: " << String::howMany() << endl;
```

### 12.2.5 进一步重载赋值运算符

```cpp
// 从C字符串赋值
String& String::operator=(const char* s) {
    delete[] str;
    len = strlen(s);
    str = new char[len + 1];
    strcpy(str, s);
    return *this;
}
```

---

## 12.3 在构造函数中使用new时应注意的事项

### 12.3.1 应该和不应该

**应该：**
- 对象中使用new，析构函数中使用delete
- 使用new[]，使用delete[]
- 复制构造函数和赋值运算符中深拷贝

**不应该：**
- 对不同内存使用delete
- 重复释放同一内存
- 不匹配new和delete

### 12.3.2 包含类成员的类的逐成员复制

```cpp
class Employee {
private:
    String name;  // String类成员
    int id;

public:
    Employee(const String& n, int i) : name(n), id(i) {}
    
    // 默认逐成员复制
    // name使用String的拷贝构造函数
    // id直接复制
};
```

---

## 12.4 有关返回对象的说明

### 12.4.1 返回指向const对象的引用

```cpp
const String& max(const String& s1, const String& s2) {
    if (s1 > s2) return s1;
    return s2;
}
```

### 12.4.2 返回指向非const对象的引用

```cpp
String& String::operator=(const String& other) {
    // ...
    return *this;
}
```

### 12.4.3 返回对象

```cpp
String operator+(const String& s1, const String& s2) {
    String temp;
    temp.len = s1.len + s2.len;
    temp.str = new char[temp.len + 1];
    strcpy(temp.str, s1.str);
    strcat(temp.str, s2.str);
    return temp;  // 返回临时对象
}
```

### 12.4.4 返回const对象

```cpp
const String operator+(const String& s1, const String& s2) {
    return String(s1.str + s2.str);
}
```

---

## 12.5 使用指向对象的指针

```cpp
String* ps = new String("Hello");
cout << *ps << endl;
delete ps;

// 动态对象数组
String* arr = new String[3];
// ...
delete[] arr;
```

### 12.5.1 再谈new和delete

```cpp
// 单个对象
String* p = new String("Hello");
delete p;

// 对象数组
String* arr = new String[3];
delete[] arr;
```

### 12.5.2 指针和对象小结

| 操作 | 语法 |
|------|------|
| 声明指针 | `Type* ptr;` |
| 动态分配 | `ptr = new Type;` |
| 释放 | `delete ptr;` |
| 访问成员 | `ptr->member` |

### 12.5.3 再谈定位new运算符

```cpp
char buffer[100];
String* p = new (buffer) String("Hello");  // 在buffer中创建
```

---

## 12.6 复习各种技术

### 12.6.1 重载<<运算符

```cpp
ostream& operator<<(ostream& os, const String& st) {
    os << st.str;
    return os;
}
```

### 12.6.2 转换函数

```cpp
operator const char*() const {
    return str;
}
```

### 12.6.3 其构造函数使用new的类

必须实现：
1. 拷贝构造函数（深拷贝）
2. 赋值运算符（深拷贝）
3. 析构函数（释放内存）

---

## 12.7 队列模拟

### 12.7.1 队列类

```cpp
class Queue {
private:
    struct Node {
        Customer data;
        Node* next;
    };
    Node* front;
    Node* rear;
    int items;

public:
    Queue();
    ~Queue();
    bool isEmpty() const;
    bool isFull() const;
    bool enqueue(const Customer& c);
    bool dequeue(Customer& c);
};

Queue::Queue() : front(nullptr), rear(nullptr), items(0) {}

Queue::~Queue() {
    Node* current = front;
    while (current != nullptr) {
        Node* temp = current;
        current = current->next;
        delete temp;
    }
}

bool Queue::enqueue(const Customer& c) {
    if (isFull()) return false;
    Node* newNode = new Node{c, nullptr};
    if (items == 0) {
        front = rear = newNode;
    } else {
        rear->next = newNode;
        rear = newNode;
    }
    items++;
    return true;
}
```

### 12.7.2 Customer类

```cpp
class Customer {
private:
    long arrive;
    int processtime;

public:
    Customer() : arrive(0), processtime(0) {}
    void set(long when);
    long when() const { return arrive; }
    int ptime() const { return processtime; }
};

void Customer::set(long when) {
    arrive = when;
    processtime = rand() % 3 + 1;
}
```

### 12.7.3 ATM模拟

```cpp
void simulate(int hours, double avgTime) {
    Queue line;
    long cycleLimit = hours * 60;
    long arrive = rand() % 3 + 1;
    int waitTime = 0;
    int maxWait = 0;
    long served = 0;
    
    for (long cycle = 0; cycle < cycleLimit; cycle++) {
        if (arrive <= cycle) {
            Customer temp;
            temp.set(cycle);
            line.enqueue(temp);
            arrive = cycle + rand() % 3 + 1;
        }
        
        if (waitTime <= 0 && !line.isEmpty()) {
            Customer next;
            line.dequeue(next);
            waitTime = next.ptime();
            served++;
        }
        
        if (waitTime > 0) waitTime--;
        maxWait = max(maxWait, waitTime);
    }
    
    cout << "Served: " << served << endl;
    cout << "Max wait: " << maxWait << endl;
}
```

---

## 12.8 总结

- 动态内存管理需要特殊的成员函数
- 拷贝构造函数和赋值运算符实现深拷贝
- 析构函数释放动态分配的内存
- 静态成员属于类而不是对象
- 返回对象时注意生命周期

---

## 12.9 复习题

1. 为什么需要自定义拷贝构造函数？
2. 深拷贝和浅拷贝有什么区别？
3. 赋值运算符需要检查什么？
4. 静态成员变量如何初始化？

---

## 12.10 编程练习

1. 完善String类，实现所有必要的成员函数
2. 实现一个动态数组类
3. 实现一个链表类，支持插入、删除、查找

