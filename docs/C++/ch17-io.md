# 第17章 输入、输出和文件


## 本章概述

本章介绍C++的输入输出系统，包括iostream类层次结构、格式化输出、输入方法、文件I/O操作、文件打开模式、二进制文件处理以及内核格式化（字符串流）。掌握这些内容是进行实际C++编程的基础。

## 17.1 C++输入和输出概述

### 流和缓冲区

C++ I/O基于**流**（stream）的概念。流是程序与外部设备之间数据传输的抽象。

```
程序 ←→ 缓冲区 ←→ 流 ←→ 设备
```

缓冲区的作用：减少设备访问次数、批量传输数据、提高I/O效率。

### iostream类层次

| 类 | 功能 |
|------|------|
| `ios_base` | 基类，定义格式常量等 |
| `basic_ios<char>` | 模板特化 |
| `istream` | 输入流 |
| `ostream` | 输出流 |
| `iostream` | 输入输出流 |
| `ifstream` | 文件输入 |
| `ofstream` | 文件输出 |
| `fstream` | 文件输入输出 |
| `istringstream` | 字符串输入 |
| `ostringstream` | 字符串输出 |
| `stringstream` | 字符串输入输出 |

### 重定向

```bash
# 输出重定向
./program > output.txt

# 输入重定向
./program < input.txt

# 同时重定向
./program < input.txt > output.txt
```

---

## 17.2 使用cout进行输出

### 重载的<<运算符

```cpp
cout << 42;           // int
cout << 3.14;         // double
cout << "Hello";      // char*
cout << 'A';          // char
cout << true;         // bool

// 指针输出
int x = 10;
int* p = &x;
cout << p;            // 输出地址
```

### 其他ostream方法

```cpp
// put()输出单个字符
cout.put('A');

// write()输出字符串
const char* str = "Hello";
cout.write(str, 5);

// 链式调用
cout << "Hello" << " " << "World" << endl;
```

### 刷新输出缓冲区

```cpp
cout << "Hello" << endl;   // 换行并刷新
cout << "Hello" << flush;  // 刷新缓冲区
cout << "Hello" << "\n";   // 换行但不刷新

// 自动刷新模式
cout << unitbuf;    // 每次输出后刷新
cout << nounitbuf;  // 正常缓冲
```

### 格式化输出

```cpp
// 进制控制
cout << hex << 255 << endl;      // ff（十六进制）
cout << oct << 255 << endl;      // 377（八进制）
cout << dec << 255 << endl;      // 255（十进制）

// 精度控制
cout.precision(4);
cout << 3.14159 << endl;         // 3.142

// 浮点格式
cout << fixed << 3.14159 << endl;     // 3.141590
cout << scientific << 3.14159e5 << endl;  // 3.14159e+05

// 宽度和填充
cout.width(10);
cout.fill('*');
cout << 42 << endl;  // ********42

// 对齐方式
cout << left << 42 << endl;   // 42********
cout << right << 42 << endl;  // ********42
```

| 控制符 | 功能 |
|--------|------|
| `hex`, `oct`, `dec` | 设置进制 |
| `setprecision(n)` | 设置精度 |
| `setw(n)` | 设置宽度 |
| `setfill(c)` | 设置填充字符 |
| `left`, `right` | 对齐方式 |
| `fixed`, `scientific` | 浮点数格式 |
| `showpoint` | 显示小数点 |
| `showpos` | 显示正号 |

---

## 17.3 使用cin进行输入

### 流状态

```cpp
// 流状态位
ios_base::goodbit;   // 正常
ios_base::badbit;    // 严重错误
ios_base::failbit;   // 操作失败
ios_base::eofbit;    // 到达文件尾

// 检查状态
if (cin.good())  { /* 正常 */ }
if (cin.bad())   { /* 严重错误 */ }
if (cin.fail())  { /* 操作失败 */ }
if (cin.eof())   { /* 文件尾 */ }

// 清除错误状态
cin.clear();

// 忽略输入
cin.ignore(100, '\n');  // 忽略最多100个字符，直到换行
```

### istream类方法

```cpp
// get()读取单个字符（包括空白）
char ch;
cin.get(ch);

// getline()读取整行
char line[100];
cin.getline(line, 100);

// peek()查看下一个字符
char next = cin.peek();

// putback()放回字符
cin.putback(ch);

// read()读取二进制数据
char buffer[100];
cin.read(buffer, 100);

// gcount()获取上次读取的字符数
int count = cin.gcount();
```

---

## 17.4 文件输入和输出

### 简单的文件I/O

```cpp
#include <fstream>

// 写入文件
ofstream outFile("output.txt");
outFile << "Hello, World!" << endl;
outFile << 42 << " " << 3.14 << endl;
outFile.close();

// 读取文件
ifstream inFile("input.txt");
string line;
while (getline(inFile, line)) {
    cout << line << endl;
}
inFile.close();
```

### 检查文件是否打开

```cpp
ifstream inFile;
inFile.open("data.txt");

if (!inFile.is_open()) {
    cerr << "Cannot open file" << endl;
    return 1;
}

// 或使用bool转换
if (!inFile) {
    cerr << "Cannot open file" << endl;
    return 1;
}
```

### 文件模式

| 模式 | 说明 |
|------|------|
| `ios_base::in` | 读取（ifstream默认） |
| `ios_base::out` | 写入（ofstream默认） |
| `ios_base::app` | 追加模式 |
| `ios_base::ate` | 打开后定位到文件尾 |
| `ios_base::trunc` | 截断文件 |
| `ios_base::binary` | 二进制模式 |

```cpp
// 追加模式
ofstream outFile("log.txt", ios_base::app);
outFile << "New log entry" << endl;

// 读写模式
fstream file("data.txt", ios_base::in | ios_base::out);

// 二进制模式
ofstream binFile("data.bin", ios_base::binary);
int data = 42;
binFile.write(reinterpret_cast<char*>(&data), sizeof(data));
```

### 随机存取

```cpp
fstream file("data.txt", ios_base::in | ios_base::out);

// 定位
file.seekg(0, ios_base::beg);   // 文件开头
file.seekg(10, ios_base::cur);  // 当前位置+10
file.seekg(-5, ios_base::end);  // 文件尾-5

// 获取当前位置
streampos pos = file.tellg();

// 写入定位
file.seekp(0, ios_base::beg);
file.write("Hello", 5);
```

---

## 17.5 二进制文件

```cpp
#include <fstream>

// 写入二进制文件
struct Record {
    int id;
    char name[20];
    double score;
};

Record r = {1, "Alice", 95.5};
ofstream outFile("data.bin", ios_base::binary);
outFile.write(reinterpret_cast<char*>(&r), sizeof(r));
outFile.close();

// 读取二进制文件
Record r2;
ifstream inFile("data.bin", ios_base::binary);
inFile.read(reinterpret_cast<char*>(&r2), sizeof(r2));
inFile.close();
```

---

## 17.6 内核格式化

```cpp
#include <sstream>

// 字符串输出流——用于构造字符串
ostringstream oss;
oss << "Name: " << "Alice" << " Age: " << 25;
string result = oss.str();

// 字符串输入流——用于解析字符串
istringstream iss("10 20 30");
int a, b, c;
iss >> a >> b >> c;

// 类型转换
string str = "3.14";
istringstream converter(str);
double pi;
converter >> pi;  // 3.14

// 整数转字符串
ostringstream converter2;
converter2 << 42;
string numStr = converter2.str();  // "42"
```

---

## 17.7 总结

- C++ I/O基于流和缓冲区模型
- `cout`和`cin`用于标准输入输出，`cerr`用于错误输出
- 格式化控制符可控制输出的进制、精度、宽度和对齐
- 文件I/O使用`ifstream`、`ofstream`和`fstream`
- 二进制I/O使用`read()`和`write()`方法
- 随机存取使用`seekg()`和`seekp()`方法
- 内核格式化使用`sstream`进行字符串构建和解析

---

## 17.8 复习题

1. 流和缓冲区的关系是什么？
2. 如何检查文件是否成功打开？
3. 文本模式和二进制模式有什么区别？
4. 如何实现随机存取？

---

## 17.9 编程练习

1. 编写程序读取文本文件并统计行数、单词数、字符数
2. 编写程序将用户输入写入文件，然后读取并显示
3. 编写程序使用二进制模式存储和读取学生记录

