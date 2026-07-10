# 第13章 类继承



## 13.1 一个简单的基类

```cpp
// 基类
class RatedPlayer {
private:
    unsigned int rating;

public:
    RatedPlayer(unsigned int r = 0) : rating(r) {}
    unsigned int getRating() const { return rating; }
};

// 派生类
class TableTennisPlayer {
private:
    string firstName;
    string lastName;
    bool hasTable;

public:
    TableTennisPlayer(const string& f = "none", const string& l = "none", bool ht = false);
    void Name() const;
    bool HasTable() const { return hasTable; }
    void ResetTable(bool v) { hasTable = v; }
};

class RatedPlayer : public TableTennisPlayer {
private:
    unsigned int rating;

public:
    RatedPlayer(unsigned int r = 0, const string& f = "none", const string& l = "none", bool ht = false);
    unsigned int getRating() const { return rating; }
    void ResetRating(unsigned int r) { rating = r; }
};
```

### 13.1.1 派生一个类

派生类语法：
```cpp
class 派生类 : 访问控制 基类 {
    // 新增成员
};
```

访问控制：
| 关键字 | 基类成员在派生类中的访问权限 |
|--------|------------------------------|
| `public` | 保持原有访问权限 |
| `protected` | 变为protected |
| `private` | 变为private |

### 13.1.2 构造函数：访问权限的考虑

```cpp
// 派生类构造函数
RatedPlayer::RatedPlayer(unsigned int r, const string& f, const string& l, bool ht)
    : TableTennisPlayer(f, l, ht), rating(r) {
    // 先调用基类构造函数，再初始化派生类成员
}
```

构造顺序：
1. 基类构造函数
2. 派生类数据成员构造
3. 派生类构造函数体

### 13.1.3 使用派生类

```cpp
TableTennisPlayer player1("张三", "李", false);
RatedPlayer rp1(1500, "王五", "赵", true);

player1.Name();  // 基类方法
rp1.Name();      // 继承的方法
rp1.getRating(); // 派生类方法
```

### 13.1.4 派生类和基类之间的特殊关系

- 派生类可以使用基类的public和protected成员
- 派生类不能直接访问基类的private成员
- 派生类可以重写基类的方法

---

## 13.2 继承：is-a关系

```cpp
// 派生类是基类的一种
class Fruit { /* ... */ };
class Apple : public Fruit { /* ... */ };
class Banana : public Fruit { /* ... */ };

// Apple is-a Fruit
// Banana is-a Fruit
```

is-a关系意味着：
- 派生类对象也是基类对象
- 可以将派生类对象赋给基类引用
- 可以将基类指针指向派生类对象

---

## 13.3 多态公有继承

```cpp
class Brass {
protected:
    string fullName;
    long acctNum;
    double balance;

public:
    virtual void ViewAcct() const;
    virtual void Withdraw(double amt);
    // ...
};

class BrassPlus : public Brass {
private:
    double maxLoan;
    double rate;
    double owesBank;

public:
    void ViewAcct() const override;  // 重写基类方法
    void Withdraw(double amt) override;
    // ...
};

// 多态调用
void showAcct(const Brass& account) {
    account.ViewAcct();  // 根据实际对象类型调用相应方法
}
```

虚函数特点：
- 使用`virtual`关键字声明
- 通过基类指针或引用调用时实现动态联编
- 派生类重写虚函数时自动成为虚函数

---

## 13.4 静态联编和动态联编

| 类型 | 说明 | 时机 |
|------|------|------|
| 静态联编 | 编译时确定函数调用 | 普通函数调用 |
| 动态联编 | 运行时确定函数调用 | 虚函数调用 |

### 13.4.1 指针和引用类型的兼容性

```cpp
Brass player("张三", 12345, 1000.0);
BrassPlus bp("李四", 67890, 2000.0);

// 基类引用可以指向派生类对象
Brass& ref = bp;
ref.ViewAcct();  // 调用BrassPlus::ViewAcct()

// 基类指针可以指向派生类对象
Brass* ptr = &bp;
ptr->ViewAcct();  // 调用BrassPlus::ViewAcct()
```

### 13.4.2 虚成员函数和动态联编

```cpp
class Base {
public:
    virtual void display() { cout << "Base" << endl; }
};

class Derived : public Base {
public:
    void display() override { cout << "Derived" << endl; }
};

Base* ptr = new Derived();
ptr->display();  // 输出：Derived（动态联编）

delete ptr;
```

### 13.4.3 有关虚函数注意事项

- 析构函数应该是虚函数
- 构造函数不能是虚函数
- 友元函数不能是虚函数
- 重写虚函数时签名必须相同

---

## 13.5 访问控制：protected

```cpp
class Base {
protected:
    int protectedMember;  // 派生类可以访问
public:
    int publicMember;
private:
    int privateMember;    // 只有基类可以访问
};

class Derived : public Base {
public:
    void func() {
        protectedMember = 10;  // 可以访问
        publicMember = 20;     // 可以访问
        // privateMember = 30;  // 错误：不能访问
    }
};
```

protected与private的区别：
| 访问控制 | 基类 | 派生类 | 类外 |
|----------|------|--------|------|
| `public` | 是 | 是 | 是 |
| `protected` | 是 | 是 | 否 |
| `private` | 是 | 否 | 否 |

---

## 13.6 抽象基类

```cpp
// 抽象基类
class AcctABC {
protected:
    string fullName;
    long acctNum;
    double balance;

public:
    AcctABC(const string& s = "none", long num = 0, double bal = 0.0);
    virtual ~AcctABC() {}
    
    // 纯虚函数
    virtual void ViewAcct() const = 0;
    virtual void Withdraw(double amt) = 0;
    
    // 非虚函数
    double getBalance() const { return balance; }
};
```

抽象基类特点：
- 包含纯虚函数（`= 0`）
- 不能创建对象
- 为派生类提供接口规范

### 13.6.1 应用ABC概念

```cpp
class Brass : public AcctABC {
public:
    void ViewAcct() const override;
    void Withdraw(double amt) override;
};

class BrassPlus : public AcctABC {
public:
    void ViewAcct() const override;
    void Withdraw(double amt) override;
};

// 使用多态
void showAccount(const AcctABC& account) {
    account.ViewAcct();  // 根据实际类型调用
}
```

### 13.6.2 ABC理念

- ABC定义接口规范
- 派生类实现具体功能
- 通过基类指针/引用实现多态

---

## 13.7 继承和动态内存分配

### 13.7.1 第一种情况：派生类不使用new

```cpp
class Base {
protected:
    char* name;
public:
    Base(const char* n);
    Base(const Base& other);
    virtual ~Base() { delete[] name; }
    Base& operator=(const Base& other);
};

class Derived : public Base {
private:
    double value;
public:
    Derived(const char* n, double v) : Base(n), value(v) {}
    // 使用基类的析构函数和赋值运算符
};
```

### 13.7.2 第二种情况：派生类使用new

```cpp
class Derived : public Base {
private:
    char* buffer;
public:
    Derived(const char* n, const char* buf) : Base(n) {
        buffer = new char[strlen(buf) + 1];
        strcpy(buffer, buf);
    }
    
    ~Derived() {
        delete[] buffer;  // 释放派生类资源
    }
    
    Derived& operator=(const Derived& other) {
        if (this != &other) {
            Base::operator=(other);  // 调用基类赋值
            delete[] buffer;
            buffer = new char[strlen(other.buffer) + 1];
            strcpy(buffer, other.buffer);
        }
        return *this;
    }
};
```

### 13.7.3 使用动态内存分配和友元的继承示例

```cpp
class Base {
    friend ostream& operator<<(ostream& os, const Base& b);
protected:
    char* data;
public:
    Base(const char* s);
    virtual ~Base() { delete[] data; }
};

ostream& operator<<(ostream& os, const Base& b) {
    os << b.data;
    return os;
}
```

---

## 13.8 类设计回顾

### 13.8.1 编译器生成的成员函数

| 函数 | 触发条件 |
|------|----------|
| 默认构造函数 | 未提供任何构造函数 |
| 拷贝构造函数 | 传递对象或返回对象 |
| 赋值运算符 | 使用=`赋值 |
| 取地址运算符 | 使用&获取地址 |
| 析构函数 | 对象销毁时 |

### 13.8.2 其他的类方法

- 构造函数：初始化对象
- 析构函数：清理资源
- 拷贝构造函数：复制对象
- 赋值运算符：赋值给现有对象
- 虚函数：实现多态
- 友元函数：访问私有成员

### 13.8.3 公有继承的考虑因素

- is-a关系
- 保持接口一致性
- 虚函数实现多态
- 保护成员允许派生类访问

### 13.8.4 类函数小结

| 类型 | 用途 |
|------|------|
| 构造函数 | 创建对象 |
| 拷贝构造函数 | 复制对象 |
| 赋值运算符 | 赋值 |
| 析构函数 | 清理 |
| 虚函数 | 多态 |
| 友元 | 访问私有 |

---

## 13.9 总结

- 继承实现代码重用
- 虚函数实现多态
- 抽象基类定义接口
- 正确处理动态内存分配

---

## 13.10 复习题

1. 什么是is-a关系？
2. 虚函数如何实现多态？
3. 抽象基类的特点是什么？
4. 派生类如何处理动态内存？

---

## 13.11 编程练习

1. 设计一个图形类层次（Circle, Rectangle, Triangle）
2. 实现一个银行账户类层次（Savings, Checking）
3. 使用抽象基类实现形状面积计算

