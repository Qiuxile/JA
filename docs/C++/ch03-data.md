# 第3章 处理数据



## 本章内容

- 变量的作用和命名规则
- 整型类型及其选择
- 浮点数类型和精度
- 算术运算符
- 类型转换（自动和强制）
- sizeof运算符
- 常量的定义方式

---

## 3.1 变量名

### 3.1.1 命名规则

- 名称只能使用字母字符、数字和下划线
- 名称的第一个字符不能是数字
- 名称区分大小写
- 不能使用C++关键字
- 以下划线开头的名称被保留

```cpp
int myVar;      // 正确
int _count;     // 正确（但不推荐）
int 2ndVar;     // 错误：数字开头
int my-var;     // 错误：包含连字符
```

### 3.1.2 命名风格

```cpp
int my_variable;   // 蛇形命名法（snake_case）
int myVariable;    // 驼峰命名法（camelCase）
int MyVariable;    // 帕斯卡命名法（PascalCase）
```

---

## 3.2 整型

### 3.2.1 基本整型

| 类型 | 最小大小 | 典型大小 |
|------|----------|----------|
| `short` | 16位 | 2字节 |
| `int` | 16位 | 4字节 |
| `long` | 32位 | 4字节 |
| `long long` | 64位 | 8字节 |

```cpp
short year = 2024;
int population = 1400000000;
long long distance = 93000000LL;
```

### 3.2.2 C++11的long long

```cpp
#include <iostream>
using namespace std;

int main()
{
    long long largeNumber = 9223372036854775807LL;
    cout << "Max long long: " << largeNumber << endl;
    return 0;
}
```

### 3.2.3 整型字面量

```cpp
int decimal = 123;      // 十进制
int octal = 0123;       // 八进制（前缀0）
int hexadecimal = 0x1A; // 十六进制（前缀0x）
int binary = 0b1010;    // 二进制（C++11，前缀0b）
```

### 3.2.4 C++中的常量表示法

```cpp
// 整型常量
int a = 42;           // 十进制
int b = 042;          // 八进制
int c = 0x2A;         // 十六进制

// 后缀
long d = 100L;        // long类型
unsigned e = 100U;    // 无符号类型
long long f = 100LL;  // long long类型
```

---

## 3.3 浮点数

### 3.3.1 基本浮点类型

| 类型 | 位数 | 有效数字 | 范围 |
|------|------|----------|------|
| `float` | 32 | 6-7 | ±3.4×10^38 |
| `double` | 64 | 15-16 | ±1.7×10^308 |
| `long double` | 80/128 | 18-19 | 更大 |

```cpp
float price = 19.99f;
double pi = 3.14159265358979;
long double precision = 1.1234567890123456789L;
```

### 3.3.2 浮点数表示法

```cpp
double a = 2.5;        // 标准表示
double b = 2.5e3;      // 科学计数法：2.5 × 10^3
double c = 2.5e-3;     // 科学计数法：2.5 × 10^-3
double d = 2.5E3;      // E也可以
```

### 3.3.3 浮点数精度问题

```cpp
#include <iostream>
using namespace std;

int main()
{
    float a = 1.0f / 3.0f;
    double b = 1.0 / 3.0;
    
    cout << "float: " << a << endl;
    cout << "double: " << b << endl;
    
    return 0;
}
```

---

## 3.4 C++算术运算符

| 运算符 | 含义 | 示例 |
|--------|------|------|
| `+` | 加法 | `a + b` |
| `-` | 减法 | `a - b` |
| `*` | 乘法 | `a * b` |
| `/` | 除法 | `a / b` |
| `%` | 取模（求余） | `a % b` |

### 3.4.1 整数除法与浮点数除法

```cpp
#include <iostream>
using namespace std;

int main()
{
    // 整数除法
    cout << "7 / 4 = " << 7 / 4 << endl;        // 结果：1
    cout << "7.0 / 4 = " << 7.0 / 4 << endl;    // 结果：1.75
    cout << "(double)7 / 4 = " << (double)7 / 4 << endl;  // 结果：1.75
    
    // 取模运算
    cout << "7 % 4 = " << 7 % 4 << endl;         // 结果：3
    
    return 0;
}
```

### 3.4.2 运算符优先级

```cpp
// 乘除法优先级高于加减法
int result = 3 + 4 * 5;     // 结果：23（不是35）
int result2 = (3 + 4) * 5;  // 结果：35

// 赋值运算符
int x = 10;
x += 5;    // 等价于 x = x + 5
x -= 3;    // 等价于 x = x - 3
x *= 2;    // 等价于 x = x * 2
x /= 4;    // 等价于 x = x / 4
x %= 3;    // 等价于 x = x % 3
```

---

## 3.5 类型转换

### 3.5.1 自动类型转换（隐式转换）

```cpp
int a = 10;
double b = a;      // int自动转换为double
float c = 3.14;    // double自动转换为float（可能丢失精度）
char d = 'A';      // char自动转换为int（ASCII值）
```

### 3.5.2 强制类型转换（显式转换）

```cpp
double x = 3.99;

// 两种强制转换语法
int a = (int)x;          // C风格
int b = static_cast<int>(x);  // C++风格（推荐）

cout << "a = " << a << endl;  // 结果：3
cout << "b = " << b << endl;  // 结果：3
```

### 3.5.3 类型转换的陷阱

```cpp
#include <iostream>
using namespace std;

int main()
{
    // 整数除法截断
    int a = 7 / 4;           // 结果：1，不是1.75
    double b = (double)7 / 4; // 结果：1.75
    
    // 浮点数转整数丢失小数部分
    int c = 3.99;            // 结果：3
    
    cout << "7/4 = " << a << endl;
    cout << "(double)7/4 = " << b << endl;
    cout << "3.99 as int = " << c << endl;
    
    return 0;
}
```

---

## 3.6 sizeof运算符

`sizeof`返回类型或变量占用的字节数。

```cpp
#include <iostream>
using namespace std;

int main()
{
    cout << "Size of char: " << sizeof(char) << " bytes" << endl;
    cout << "Size of int: " << sizeof(int) << " bytes" << endl;
    cout << "Size of short: " << sizeof(short) << " bytes" << endl;
    cout << "Size of long: " << sizeof(long) << " bytes" << endl;
    cout << "Size of long long: " << sizeof(long long) << " bytes" << endl;
    cout << "Size of float: " << sizeof(float) << " bytes" << endl;
    cout << "Size of double: " << sizeof(double) << " bytes" << endl;
    
    // 对变量使用
    int x = 42;
    cout << "Size of x: " << sizeof x << endl;  // 可省略括号
    
    return 0;
}
```

---

## 3.7 C++11的auto声明

`auto`让编译器根据初始值推断变量类型。

```cpp
#include <iostream>
using namespace std;

int main()
{
    auto a = 10;        // 推断为int
    auto b = 3.14;      // 推断为double
    auto c = 'A';       // 推断为char
    auto d = true;      // 推断为bool
    auto e = "Hello";   // 推断为const char*
    
    cout << "a = " << a << endl;
    cout << "b = " << b << endl;
    cout << "c = " << c << endl;
    cout << "d = " << d << endl;
    cout << "e = " << e << endl;
    
    return 0;
}
```

---

## 3.8 常量

### 3.8.1 #define预处理器

```cpp
#define PI 3.14159
#define MAX_SIZE 100

// 注意：没有类型检查，没有作用域限制
```

### 3.8.2 const限定符（推荐）

```cpp
const double PI = 3.14159;
const int MAX_SIZE = 100;
const string NAME = "C++";

// 有类型检查，有作用域限制
```

### 3.8.3 constexpr（C++11）

```cpp
constexpr double PI = 3.14159;    // 编译时常量
constexpr int SQUARE(int x) {     // constexpr函数
    return x * x;
}

int main()
{
    constexpr int size = 10;      // 编译时确定
    int arr[size];                // 可用于数组大小
    
    return 0;
}
```

---

## 3.9 各整型类型的取值范围

```cpp
#include <iostream>
#include <climits>
using namespace std;

int main()
{
    cout << "int最大值: " << INT_MAX << endl;
    cout << "int最小值: " << INT_MIN << endl;
    cout << "unsigned int最大值: " << UINT_MAX << endl;
    cout << "short最大值: " << SHRT_MAX << endl;
    cout << "long最大值: " << LONG_MAX << endl;
    cout << "long long最大值: " << LLONG_MAX << endl;
    
    return 0;
}
```

---

## 3.10 总结

- 整型包括short、int、long、long long，每种都有有符号和无符号版本
- 浮点数包括float、double、long double
- 算术运算符包括+、-、*、/、%
- 整数除法会截断小数部分
- sizeof运算符返回类型或变量的字节数
- const和constexpr用于定义常量
- auto让编译器推断变量类型

