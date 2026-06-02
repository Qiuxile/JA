# C 语言教程

## C 语言简介

C 语言是一种通用的过程式编程语言，由 Dennis Ritchie 于 1972 年在贝尔实验室开发。它是现代编程语言的基础，许多语言如 C++、Java、Python 都受到了 C 的影响。

### C 语言的特点

- **高效性**: 接近机器语言，执行效率高
- **可移植性**: 代码可以在不同平台编译运行
- **灵活性**: 允许直接操作内存
- **结构化**: 支持函数和模块化编程
- **底层访问**: 可以直接访问硬件和内存

## C 语言环境搭建

### 编译器安装

**Windows**:
1. 下载 [MinGW](http://www.mingw.org/) 或 [TDM-GCC](https://jmeubank.github.io/tdm-gcc/)
2. 配置环境变量
3. 验证：`gcc --version`

**Linux**:
```bash
sudo apt-get install gcc
```

**macOS**:
```bash
xcode-select --install
```

### 开发工具

- **VS Code**: 轻量级编辑器，配合 C/C++ 插件
- **Code::Blocks**: 开源 IDE
- **Eclipse CDT**: 专业 IDE

## 基础语法

### 第一个 C 程序

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

编译运行：
```bash
gcc hello.c -o hello
./hello
```

### 数据类型

```c
// 基本数据类型
int age = 25;           // 整数
float pi = 3.14f;       // 单精度浮点
double price = 99.99;   // 双精度浮点
char letter = 'A';      // 字符
char name[] = "Hello";  // 字符串
```

### 变量声明

```c
// 全局变量
int global_var;

int main() {
    // 局部变量
    int local_var = 10;
    return 0;
}
```

### 运算符

```c
int a = 10, b = 3;
int sum = a + b;      // 加法
int diff = a - b;     // 减法
int prod = a * b;     // 乘法
int quot = a / b;     // 除法
int rem = a % b;      // 取模
```

## 控制流程

### 条件语句

```c
if (score >= 60) {
    printf("及格\n");
} else if (score >= 80) {
    printf("良好\n");
} else {
    printf("不及格\n");
}
```

### 循环语句

```c
// for 循环
for (int i = 0; i < 10; i++) {
    printf("%d ", i);
}

// while 循环
int count = 0;
while (count < 5) {
    printf("%d ", count);
    count++;
}

// do-while 循环
do {
    printf("%d ", count);
    count--;
} while (count > 0);
```

## 函数

### 函数定义

```c
#include <stdio.h>

// 函数声明
int add(int a, int b);

int main() {
    int result = add(3, 5);
    printf("结果: %d\n", result);
    return 0;
}

// 函数定义
int add(int a, int b) {
    return a + b;
}
```

### 递归函数

```c
int factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
```

## 数组

### 一维数组

```c
int numbers[5] = {1, 2, 3, 4, 5};

// 访问数组元素
printf("%d", numbers[0]);  // 输出第一个元素

// 遍历数组
for (int i = 0; i < 5; i++) {
    printf("%d ", numbers[i]);
}
```

### 二维数组

```c
int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

printf("%d", matrix[1][2]);  // 输出: 6
```

## 指针

### 指针基础

```c
int value = 10;
int *ptr = &value;  // ptr 指向 value 的地址

printf("值: %d\n", value);    // 输出: 10
printf("地址: %p\n", &value); // 输出地址
printf("指针值: %d\n", *ptr); // 输出指针指向的值
```

### 指针与数组

```c
int arr[] = {1, 2, 3, 4, 5};
int *p = arr;  // 指针指向数组首元素

for (int i = 0; i < 5; i++) {
    printf("%d ", *(p + i));
}
```

## 结构体

```c
#include <stdio.h>
#include <string.h>

struct Person {
    char name[20];
    int age;
    float height;
};

int main() {
    struct Person p1;
    strcpy(p1.name, "John");
    p1.age = 30;
    p1.height = 1.75;
    
    printf("姓名: %s\n", p1.name);
    printf("年龄: %d\n", p1.age);
    printf("身高: %.2f\n", p1.height);
    
    return 0;
}
```

## 文件操作

```c
#include <stdio.h>

int main() {
    // 写入文件
    FILE *fp = fopen("example.txt", "w");
    if (fp != NULL) {
        fprintf(fp, "Hello, C Language!");
        fclose(fp);
    }
    
    // 读取文件
    fp = fopen("example.txt", "r");
    if (fp != NULL) {
        char buffer[100];
        fgets(buffer, sizeof(buffer), fp);
        printf("%s\n", buffer);
        fclose(fp);
    }
    
    return 0;
}
```

## C 语言标准库

| 头文件 | 功能 |
|--------|------|
| stdio.h | 输入输出 |
| stdlib.h | 通用工具函数 |
| string.h | 字符串处理 |
| math.h | 数学函数 |
| time.h | 时间处理 |

---

**下一章**: [C 语言指针详解](./C指针)