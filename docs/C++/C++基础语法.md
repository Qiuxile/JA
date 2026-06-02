# C++ 基础语法

## 注释

```cpp
// 单行注释

/* 多行注释
可以包含多个行 */
```

## 变量与数据类型

### 基本数据类型

```cpp
// 整数类型
char c = 'A';        // 字符类型
short s = 1000;      // 短整型  
int i = 100;         // 整型
long l = 100000L;    // 长整型
long long ll = 100000LL; // 长长整型

// 无符号整数
unsigned int ui = 100;

// 浮点类型
float f = 3.14f;     // 单精度浮点
double d = 3.14159;  // 双精度浮点
long double ld = 3.14159L;  // 长双精度

// 布尔类型
bool flag = true;
```

### 变量声明

```cpp
// 全局变量
int global_var = 100;

int main() {
    // 局部变量
    int local_var = 10;
    
    // 同时声明多个变量
    int a = 1, b = 2, c = 3;
    
    // C++11 类型推断
    auto x = 42;      // x 是 int
    auto y = 3.14;    // y 是 double
    
    return 0;
}
```

## 运算符

### 算术运算符

```cpp
int a = 10, b = 3;

a + b   // 加法
a - b   // 减法
a * b   // 乘法
a / b   // 除法
a % b   // 取模
```

### 比较运算符

```cpp
x == y  // 等于
x != y  // 不等于
x > y   // 大于
x < y   // 小于
x >= y  // 大于等于
x <= y  // 小于等于
```

### 逻辑运算符

```cpp
a && b  // 逻辑与
a || b  // 逻辑或
!a      // 逻辑非
```

### 位运算符

```cpp
a & b   // 按位与
a | b   // 按位或
a ^ b   // 按位异或
~a      // 按位取反
a << 1  // 左移
a >> 1  // 右移
```

## 控制流程

### if-else 语句

```cpp
int score = 85;

if (score >= 90) {
    cout << "优秀" << endl;
} else if (score >= 60) {
    cout << "及格" << endl;
} else {
    cout << "不及格" << endl;
}
```

### switch 语句

```cpp
int day = 3;

switch (day) {
    case 1:
        cout << "周一" << endl;
        break;
    case 2:
        cout << "周二" << endl;
        break;
    default:
        cout << "其他" << endl;
}
```

### 循环语句

```cpp
// for 循环
for (int i = 0; i < 10; i++) {
    cout << i << " ";
}

// while 循环
int count = 0;
while (count < 5) {
    cout << count << " ";
    count++;
}

// do-while 循环
do {
    cout << count << " ";
    count--;
} while (count > 0);
```

## 输入输出

```cpp
#include <iostream>
using namespace std;

int main() {
    // 输出
    cout << "Hello, World!" << endl;
    cout << "Value: " << 42 << endl;
    cout << "Pi: " << 3.14159 << endl;
    
    // 输入
    int age;
    string name;
    
    cout << "Enter your age: ";
    cin >> age;
    
    cout << "Enter your name: ";
    cin >> name;
    
    cout << "Name: " << name << ", Age: " << age << endl;
    
    return 0;
}
```

## 数组

```cpp
// 一维数组
int arr[5] = {1, 2, 3, 4, 5};
int arr2[] = {10, 20, 30};

// 二维数组
int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// 遍历数组
for (int i = 0; i < 5; i++) {
    cout << arr[i] << " ";
}
```

---

**上一章**: [C++ 教程](./C++教程)

**下一章**: [C++ 类与对象](./C++类与对象)