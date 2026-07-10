# 附录F 模板类string



## 本章概述

本附录详细列出模板类`string`（即`basic_string<char>`）的方法和函数，包括构造、存取、搜索、修改和输入输出操作。


## F.1 类型定义

```cpp
// string模板的特化
typedef basic_string<char> string;
typedef basic_string<wchar_t> wstring;
typedef basic_string<char16_t> u16string;  // C++11
typedef basic_string<char32_t> u32string;  // C++11

// 迭代器类型
typedef string::iterator iterator;
typedef string::const_iterator const_iterator;
typedef string::reverse_iterator reverse_iterator;
typedef string::const_reverse_iterator const_reverse_iterator;

// 其他类型
typedef string::size_type size_type;
typedef string::value_type value_type;
typedef string::reference reference;
typedef string::const_reference const_reference;
```

---

## F.2 构造函数

```cpp
string str;                          // 默认构造函数
string str = "Hello";                // 从C字符串构造
string str2(str);                    // 拷贝构造
string str3(str, 0, 3);              // 从子串构造（"Hel"）
string str4(5, 'A');                 // 5个'A'（"AAAAA"）
string str5(str.begin(), str.end()); // 从迭代器区间构造
string str6 = {'H', 'e', 'l', 'l', 'o'};  // 初始化列表（C++11）
string str7 = std::move(str);        // 移动构造（C++11）
```

---

## F.3 字符串存取

```cpp
string str = "Hello";

char c1 = str[0];      // 'H'（无边界检查）
char c2 = str.at(0);   // 'H'（有边界检查，越界抛out_of_range）

str[0] = 'h';          // 修改字符
str.at(0) = 'h';       // 修改字符

const char* cstr = str.c_str();  // 获取C风格字符串
const char* data = str.data();   // 获取数据指针

size_t len = str.length();  // 长度
size_t cap = str.capacity(); // 容量
```

---

## F.4 字符串搜索

```cpp
string str = "Hello, World! Hello, World!";

// find：查找子串第一次出现
size_t pos = str.find("World");       // 7
size_t pos2 = str.find("Hello", 5);   // 14（从位置5开始）

// rfind：查找子串最后一次出现
size_t pos3 = str.rfind("World");     // 21

// find_first_of：查找字符集中任意字符第一次出现
size_t pos4 = str.find_first_of("aeiou");  // 1（'e'）

// find_last_of：查找字符集中任意字符最后一次出现
size_t pos5 = str.find_last_of("aeiou");   // 18（'o'）

// find_first_not_of：查找第一个不在字符集中的字符
size_t pos6 = str.find_first_not_of("Helo");  // 5（','）
```

---

## F.5 字符串修改

### 追加和拼接

```cpp
string str = "Hello";
str.append(" World");      // "Hello World"
str += "!";                // "Hello World!"
string str2 = str + " End"; // "Hello World! End"
```

### 插入和删除

```cpp
string str = "Hello World";
str.insert(5, ",");         // "Hello, World"
str.erase(5, 2);            // "HelloWorld"
str.clear();                 // ""
```

### 替换

```cpp
string str = "Hello, World!";
str.replace(7, 5, "C++");   // "Hello, C++!"
```

### 赋值

```cpp
string str;
str = "Hello";              // 从C字符串赋值
str.assign("World");        // 使用assign方法
str.assign(5, 'X');         // "XXXXX"
```

### 其他修改方法

```cpp
string str = "Hello, World!";
char buffer[20];
str.copy(buffer, 5, 0);    // 复制5个字符到buffer

string str2 = "Foo";
str.swap(str2);             // 交换两个字符串
```

---

## F.6 比较方法

```cpp
string str1 = "Apple";
string str2 = "Banana";

int result = str1.compare(str2);  // 负数：str1 < str2

// 使用运算符
if (str1 < str2) { /* ... */ }
if (str1 == str2) { /* ... */ }
if (str1 != str2) { /* ... */ }
```

---

## F.7 输出和输入

```cpp
// 输出
string str = "Hello, World!";
cout << str << endl;

// 输入
string input;
cin >> input;              // 读取一个单词
getline(cin, input);       // 读取整行
getline(cin, input, ';');  // 读取到指定分隔符
```

