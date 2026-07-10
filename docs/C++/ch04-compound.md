# 第4章 复合类型



## 本章内容

- 数组的声明和使用
- C风格字符串和string类
- 结构体的定义和使用
- 共用体（union）
- 枚举类型
- 指针基础
- 动态数组
- 指针和数组的关系

---
## 4.1 数组

数组是存储多个相同类型数据的容器。

### 4.1.1 数组声明

```cpp
int scores[10];           // 声明包含10个int的数组
double prices[5] = {1.99, 2.99, 3.99, 4.99, 5.99};  // 初始化
int nums[5] = {1, 2, 3};  // 部分初始化，其余为0
int arr[5] = {0};         // 全部初始化为0
int arr2[] = {1, 2, 3};   // 编译器自动确定大小
```

### 4.1.2 数组访问

```cpp
#include <iostream>
using namespace std;

int main()
{
    int scores[5] = {90, 85, 78, 92, 88};
    
    // 使用下标访问（从0开始）
    cout << "First: " << scores[0] << endl;   // 90
    cout << "Last: " << scores[4] << endl;    // 88
    
    // 修改元素
    scores[2] = 80;
    
    // 使用循环遍历
    for (int i = 0; i < 5; i++) {
        cout << "scores[" << i << "] = " << scores[i] << endl;
    }
    
    return 0;
}
```

### 4.1.3 数组的注意事项

- 数组下标从0开始
- 越界访问会导致未定义行为
- 数组名是数组首元素的地址

```cpp
int arr[5] = {10, 20, 30, 40, 50};
cout << "Array name address: " << arr << endl;
cout << "First element address: " << &arr[0] << endl;
// 两者相同
```

---

## 4.2 字符串

### 4.2.1 C风格字符串

C风格字符串是以空字符`\0`结尾的字符数组。

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char str1[] = "Hello";            // 自动添加\0
    char str2[] = {'H', 'i', '\0'};   // 手动添加\0
    char str3[10] = "World";          // 预分配空间
    
    cout << str1 << endl;  // 输出Hello
    cout << str2 << endl;  // 输出Hi
    
    // 字符串长度
    cout << "Length: " << strlen(str1) << endl;  // 5
    
    return 0;
}
```

### 4.2.2 常用字符串函数

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char str1[20] = "Hello";
    char str2[20] = "World";
    
    // 字符串长度
    cout << "Length: " << strlen(str1) << endl;
    
    // 字符串复制
    strcpy(str1, str2);  // str1现在是"World"
    
    // 字符串拼接
    strcat(str1, "!");   // str1现在是"World!"
    
    // 字符串比较
    int result = strcmp("abc", "abd");  // <0
    
    return 0;
}
```

### 4.2.3 string类（推荐）

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
    string s1 = "Hello";
    string s2 = "World";
    string s3;  // 空字符串
    
    // 字符串操作
    s3 = s1 + " " + s2;  // 拼接
    cout << s3 << endl;   // Hello World
    
    cout << "Length: " << s1.length() << endl;  // 5
    
    // 字符串访问
    cout << "First char: " << s1[0] << endl;    // H
    cout << "Last char: " << s1.back() << endl; // o
    
    // 字符串比较
    if (s1 < s2) {
        cout << s1 << " comes before " << s2 << endl;
    }
    
    return 0;
}
```

---

## 4.3 结构

结构是用户自定义的数据类型。

### 4.3.1 结构声明和初始化

```cpp
struct Student {
    string name;
    int age;
    double gpa;
};

// 初始化
Student s1 = {"Alice", 20, 3.8};
Student s2;
s2.name = "Bob";
s2.age = 22;
s2.gpa = 3.5;
```

### 4.3.2 结构数组

```cpp
#include <iostream>
#include <string>
using namespace std;

struct Student {
    string name;
    int age;
    double gpa;
};

int main()
{
    Student students[3] = {
        {"Alice", 20, 3.8},
        {"Bob", 22, 3.5},
        {"Charlie", 21, 3.9}
    };
    
    for (int i = 0; i < 3; i++) {
        cout << students[i].name << ": " << students[i].gpa << endl;
    }
    
    return 0;
}
```

### 4.3.3 结构体成员访问

```cpp
struct Point {
    double x;
    double y;
};

Point p = {3.0, 4.0};

// 使用点运算符访问成员
cout << "x: " << p.x << endl;
cout << "y: " << p.y << endl;

// 结构体赋值
Point q = p;  // 深拷贝
```

### 4.3.4 结构体数组和指针

```cpp
struct Point {
    double x;
    double y;
};

Point points[3] = {{1, 2}, {3, 4}, {5, 6}};
Point* ptr = points;  // 指向数组首元素

// 使用指针访问
cout << ptr->x << ", " << ptr->y << endl;  // 1, 2
cout << (ptr + 1)->x << endl;               // 3
```

---

## 4.4 共用体（union）

共用体的所有成员共享同一内存空间。

```cpp
union Data {
    int i;
    float f;
    char str[20];
};

int main()
{
    Data data;
    data.i = 42;
    cout << "i: " << data.i << endl;    // 42
    
    data.f = 3.14;  // 覆盖了i的值
    cout << "f: " << data.f << endl;    // 3.14
    
    // 共用体大小 = 最大成员的大小
    cout << "Size: " << sizeof(Data) << endl;  // 20
    
    return 0;
}
```

共用体的用途：
- 节省内存（同一时间只使用一个成员）
- 底层编程和硬件访问
- 实现多态数据存储

---

## 4.5 枚举

枚举用于创建命名的整数常量集合。

### 4.5.1 基本枚举

```cpp
enum Color { RED, GREEN, BLUE };  // 默认从0开始
enum Weekday { MON = 1, TUE, WED, THU, FRI, SAT, SUN };

int main()
{
    Color c = RED;
    Weekday d = WED;
    
    cout << "RED = " << c << endl;  // 0
    cout << "WED = " << d << endl;  // 3
    
    return 0;
}
```

### 4.5.2 枚举的使用

```cpp
enum Direction { NORTH, SOUTH, EAST, WEST };

void move(Direction dir) {
    switch (dir) {
        case NORTH: cout << "Moving north" << endl; break;
        case SOUTH: cout << "Moving south" << endl; break;
        case EAST: cout << "Moving east" << endl; break;
        case WEST: cout << "Moving west" << endl; break;
    }
}

int main()
{
    move(NORTH);
    move(EAST);
    return 0;
}
```

---

## 4.6 指针

指针是存储内存地址的变量。

### 4.6.1 指针声明

```cpp
int* ptr;      // 指向int的指针
double* dptr;  // 指向double的指针
char* cptr;    // 指向char的指针
```

### 4.6.2 指针初始化

```cpp
int x = 42;
int* ptr = &x;  // &取地址运算符

cout << "x的值: " << x << endl;       // 42
cout << "x的地址: " << &x << endl;    // 地址
cout << "ptr的值: " << ptr << endl;    // 与&x相同
cout << "ptr指向的值: " << *ptr << endl;  // 42（解引用）
```

### 4.6.3 指针操作

```cpp
int x = 10;
int y = 20;
int* ptr = &x;

// 修改指针指向
ptr = &y;
*ptr = 30;  // y现在是30

// 指针算术
int arr[5] = {10, 20, 30, 40, 50};
int* p = arr;

cout << *p << endl;      // 10
cout << *(p + 1) << endl; // 20
cout << *(p + 2) << endl; // 30
```

### 4.6.4 指针和数组

```cpp
int arr[5] = {10, 20, 30, 40, 50};
int* ptr = arr;

// 以下三种方式等价
cout << arr[1] << endl;
cout << *(ptr + 1) << endl;
cout << ptr[1] << endl;

// 指针比较
int* start = &arr[0];
int* end = &arr[4];
if (start < end) {
    cout << "start在end之前" << endl;
}
```

---

## 4.7 动态内存

### 4.7.1 new和delete

```cpp
// 动态分配单个变量
int* ptr = new int;
*ptr = 42;
delete ptr;

// 动态分配数组
int* arr = new int[10];
for (int i = 0; i < 10; i++) {
    arr[i] = i * 10;
}
delete[] arr;
```

### 4.7.2 动态内存的注意事项

```cpp
// 避免内存泄漏
int* createArray(int size) {
    int* arr = new int[size];
    // 必须在使用后delete
    return arr;
}

int main()
{
    int* myArr = createArray(100);
    // 使用数组...
    delete[] myArr;  // 释放内存
    myArr = nullptr; // 避免悬空指针
    
    return 0;
}
```

---

## 4.8 指针和const

```cpp
int x = 10;
int y = 20;

// 指向const的指针（不能修改指向的值）
const int* ptr1 = &x;
// *ptr1 = 30;  // 错误
ptr1 = &y;      // 正确

// const指针（不能修改指向）
int* const ptr2 = &x;
*ptr2 = 30;     // 正确
// ptr2 = &y;   // 错误

// 指向const的const指针
const int* const ptr3 = &x;
// 既不能修改值，也不能修改指向
```

---

## 4.9 总结

- 数组是存储多个相同类型数据的连续内存空间
- C风格字符串以`\0`结尾，string类更安全易用
- 结构体是用户自定义的数据类型
- 共用体的所有成员共享内存
- 枚举创建命名的整数常量集合
- 指针存储内存地址，使用`*`解引用
- 动态内存使用new/delete管理
- const指针和指向const的指针有不同的用途

