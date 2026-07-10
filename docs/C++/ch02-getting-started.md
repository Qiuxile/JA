# 第2章 开始学习C++



## 本章内容

- main函数的结构和作用
- iostream库和std名称空间
- 使用cout进行基本输出
- 声明和初始化变量
- C++基本数据类型简介
- 函数基础
- 头文件和预处理指令

---

## 2.1 进入C++

### 2.1.1 main函数

每个C++程序都必须包含一个名为`main()`的函数，它是程序的入口点。

```cpp
int main()
{
    // 函数体
    return 0;
}
```

main函数的返回值说明：
- `return 0`：程序正常结束
- `return 1`：程序异常结束
- 不同编译器可能有不同的返回值约定

### 2.1.2 类函数语法

函数由函数头和函数体组成：

```cpp
int main()  // 函数头
{           // 函数体开始
    // 语句
    return 0;
}           // 函数体结束
```

---

## 2.2 C++语句

C++程序由语句组成，每条语句以分号结尾。

```cpp
int carrots;            // 声明语句
carrots = 25;           // 赋值语句
cout << "Carrots: ";    // 输出语句
cout << carrots << endl;
```

---

## 2.3 cout简介

`cout`是C++的标准输出流对象，用于向屏幕输出信息。

### 2.3.1 插入运算符

`<<`是插入运算符，将数据插入到输出流中。

```cpp
#include <iostream>
using namespace std;

int main()
{
    cout << "Hello, World!" << endl;
    cout << "Number: " << 42 << endl;
    return 0;
}
```

### 2.3.2 endl操作符

`endl`表示结束当前行，并刷新输出缓冲区。

```cpp
cout << "Line 1" << endl;  // 输出并换行
cout << "Line 2\n";        // 使用\n换行（不刷新缓冲区）
```

### 2.3.3 换行符

C++中表示换行的三种方式：

```cpp
cout << endl;    // endl操作符
cout << "\n";    // 转义字符
cout << '\n';    // 字符字面量
```

---

## 2.4 C++函数

函数是完成特定任务的代码模块。

### 2.4.1 有返回值的函数

```cpp
double cube(double x)
{
    return x * x * x;
}

int main()
{
    double result = cube(3.0);
    cout << "3 cubed is " << result << endl;
    return 0;
}
```

### 2.4.2 编写使用多个函数的程序

```cpp
#include <iostream>
using namespace std;

void simple()   // 无返回值函数
{
    cout << "This is a simple function." << endl;
}

int main()
{
    simple();
    simple();
    return 0;
}
```

---

## 2.5 头文件和名称空间

### 2.5.1 #include指令

`#include`指令将头文件的内容添加到程序中。

```cpp
#include <iostream>    // 系统头文件，用尖括号
#include "myheader.h"  // 自定义头文件，用双引号
```

常用头文件：

| 头文件 | 用途 |
|--------|------|
| `<iostream>` | 基本输入输出 |
| `<fstream>` | 文件输入输出 |
| `<string>` | string类 |
| `<cmath>` | 数学函数 |

### 2.5.2 名称空间

名称空间帮助避免命名冲突。

```cpp
#include <iostream>

int main()
{
    std::cout << "Hello" << std::endl;  // 使用完整名称
    return 0;
}
```

### 2.5.3 using声明和using编译指令

```cpp
// using声明 - 只引入特定名称
using std::cout;
using std::endl;

// using编译指令 - 引入整个名称空间
using namespace std;
```

---

## 2.6 声明和初始化变量

变量是存储数据的命名内存位置。

### 2.6.1 变量声明

```cpp
int age;           // 声明整型变量
double salary;     // 声明双精度浮点数
char grade;        // 声明字符变量
```

### 2.6.2 变量初始化

```cpp
int age = 25;          // 初始化
int age(25);           // 构造函数语法（C++11）
int age{25};           // 统一初始化（C++11）
int age = {25};        // 带等号的统一初始化
```

### 2.6.3 C++11初始化方式

```cpp
int units = 7;         // 传统初始化
int units{7};          // C++11列表初始化
int units = {7};       // 带等号的列表初始化
int units{};           // 零初始化
```

---

## 2.7 数据类型简介

### 2.7.1 基本类型

| 类型 | 关键字 | 大小（典型） |
|------|--------|-------------|
| 整型 | `int` | 4字节 |
| 短整型 | `short` | 2字节 |
| 长整型 | `long` | 4字节 |
| 双精度浮点型 | `double` | 8字节 |
| 字符型 | `char` | 1字节 |
| 布尔型 | `bool` | 1字节 |

### 2.7.2 类型大小

```cpp
#include <iostream>
using namespace std;

int main()
{
    cout << "int: " << sizeof(int) << " bytes" << endl;
    cout << "short: " << sizeof(short) << " bytes" << endl;
    cout << "long: " << sizeof(long) << " bytes" << endl;
    cout << "double: " << sizeof(double) << " bytes" << endl;
    return 0;
}
```

---

## 2.8 简单C++程序示例

```cpp
#include <iostream>
using namespace std;

int main()
{
    // 声明变量
    int carrots = 25;
    double price = 1.99;
    char grade = 'A';
    
    // 输出变量
    cout << "Carrots: " << carrots << endl;
    cout << "Price: $" << price << endl;
    cout << "Grade: " << grade << endl;
    
    return 0;
}
```

---

## 2.9 cout拼接

可以连续使用`<<`运算符拼接多个输出项。

```cpp
#include <iostream>
using namespace std;

int main()
{
    int age = 25;
    string name = "Alice";
    
    cout << "Name: " << name << ", Age: " << age << endl;
    
    // 多行输出
    cout << "Name: " << name 
         << ", Age: " << age 
         << endl;
    
    return 0;
}
```

---

## 2.10 C++预处理和iostream

### 2.10.1 预处理指令

以`#`开头的指令在编译前处理。

```cpp
#include <iostream>    // 包含头文件
#define PI 3.14159     // 宏定义
#ifdef DEBUG           // 条件编译
    // 调试代码
#endif
```

### 2.10.2 iostream库

iostream库包含：
- `cin`：标准输入流
- `cout`：标准输出流
- `cerr`：标准错误流
- `clog`：标准日志流

```cpp
#include <iostream>
using namespace std;

int main()
{
    int x;
    cout << "Enter a number: ";
    cin >> x;  // 从键盘输入
    
    cout << "You entered: " << x << endl;
    cerr << "This is an error message" << endl;
    return 0;
}
```

---

## 2.11 总结

- 每个C++程序都从`main()`函数开始执行
- `cout`对象用于输出，`cin`对象用于输入
- `#include`指令包含头文件
- `using namespace std`使用标准名称空间
- 变量在使用前必须声明
- C++提供多种基本数据类型
- 分号是语句的结束标志

