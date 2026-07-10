# 附录I 转换为ISO标准C++


## 本章概述

本附录提供将旧式C++代码转换为ISO标准C++的指导，包括使用const替代#define、使用C++类型转换、使用智能指针等。

---

## I.1 使用const替代#define

```cpp
// 不推荐：使用#define
#define MAX_SIZE 100

// 推荐：使用const
const int MAX_SIZE = 100;

// 优势：类型安全、作用域控制、调试方便
```

---

## I.2 使用inline替代#define函数宏

```cpp
// 不推荐：使用#define
#define SQUARE(x) ((x) * (x))

// 推荐：使用inline
inline int square(int x) {
    return x * x;
}

// 优势：类型安全、调试方便、符号表保留
```

---

## I.3 使用C++类型转换

```cpp
// 不推荐：C风格
int x = (int)3.14;

// 推荐：C++风格
int x = static_cast<int>(3.14);

// C++类型转换运算符：
// static_cast：编译时转换
// dynamic_cast：运行时安全转换
// const_cast：去除const
// reinterpret_cast：重新解释内存
```

---

## I.4 使用C++头文件

```cpp
// 不推荐：C头文件
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// 推荐：C++头文件
#include <cstdio>
#include <cstdlib>
#include <cstring>
```

---

## I.5 使用名称空间

```cpp
// 不推荐：全局using
using namespace std;

// 推荐：使用声明或限定
using std::cout;
using std::endl;

// 或使用限定
std::cout << "Hello" << std::endl;
```

---

## I.6 使用智能指针

```cpp
// 不推荐：手动内存管理
int* ptr = new int(10);
// ... 使用ptr ...
delete ptr;

// 推荐：智能指针
unique_ptr<int> ptr(new int(10));
// 自动释放

// 或使用make_unique（C++14）
auto ptr = make_unique<int>(10);
```

---

## I.7 使用string类

```cpp
// 不推荐：C风格字符串
char str[100] = "Hello";
strcat(str, " World");
int len = strlen(str);

// 推荐：string类
string str = "Hello";
str += " World";
int len = str.size();
```

---

## I.8 使用STL

```cpp
// 不推荐：手动实现
int arr[5] = {5, 3, 1, 4, 2};
// 手动排序...

// 推荐：STL
vector<int> nums = {5, 3, 1, 4, 2};
sort(nums.begin(), nums.end());

// 使用算法
auto it = find(nums.begin(), nums.end(), 3);
int sum = accumulate(nums.begin(), nums.end(), 0);
```

---

## I.9 使用现代C++特性

```cpp
// auto类型推断
auto x = 10;

// 范围for循环
vector<int> nums = {1, 2, 3, 4, 5};
for (int x : nums) {
    cout << x << " ";
}

// Lambda表达式
auto add = [](int a, int b) { return a + b; };

// nullptr空指针
int* ptr = nullptr;
```

---

## 转换检查清单

| 检查项 | 说明 |
|--------|------|
| `#define` → `const` | 常量定义 |
| `#define` → `inline` | 函数宏 |
| C类型转换 → C++类型转换 | `static_cast`等 |
| C头文件 → C++头文件 | `<cstdio>`等 |
| `NULL` → `nullptr` | 空指针 |
| `typedef` → `using` | 类型别名 |
| 手动内存管理 → 智能指针 | `unique_ptr`等 |
| C字符串 → `string` | 字符串操作 |
| 数组 → `vector` | 动态数组 |

