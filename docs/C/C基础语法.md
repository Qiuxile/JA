# C 语言基础语法

## 注释

```c
// 单行注释

/* 多行注释
可以包含多个行 */
```

## 变量与数据类型

### 基本数据类型

```c
// 整数类型
char c = 'A';        // 字符类型，1字节
short s = 1000;      // 短整型，2字节
int i = 100;         // 整型，4字节
long l = 100000L;    // 长整型，4或8字节
long long ll = 100000LL; // 长长整型，8字节

// 无符号整数
unsigned int ui = 100;

// 浮点类型
float f = 3.14f;     // 单精度浮点，4字节
double d = 3.14159;  // 双精度浮点，8字节
```

### 变量声明

```c
// 在函数外部声明（全局变量）
int global_var;

int main() {
    // 在函数内部声明（局部变量）
    int local_var = 10;
    
    // 同时声明多个变量
    int a = 1, b = 2, c = 3;
    
    return 0;
}
```

## 运算符

### 算术运算符

```c
int a = 10, b = 3;

a + b   // 加法
a - b   // 减法
a * b   // 乘法
a / b   // 除法（整数除法）
a % b   // 取模
```

### 赋值运算符

```c
int x = 10;
x += 5;  // x = x + 5
x -= 3;  // x = x - 3
x *= 2;  // x = x * 2
x /= 2;  // x = x / 2
x %= 3;  // x = x % 3
```

### 比较运算符

```c
x == y  // 等于
x != y  // 不等于
x > y   // 大于
x < y   // 小于
x >= y  // 大于等于
x <= y  // 小于等于
```

### 逻辑运算符

```c
a && b  // 逻辑与
a || b  // 逻辑或
!a      // 逻辑非
```

## 控制流程

### if-else 语句

```c
int score = 85;

if (score >= 90) {
    printf("优秀\n");
} else if (score >= 60) {
    printf("及格\n");
} else {
    printf("不及格\n");
}
```

### switch 语句

```c
int day = 3;

switch (day) {
    case 1:
        printf("周一\n");
        break;
    case 2:
        printf("周二\n");
        break;
    case 3:
        printf("周三\n");
        break;
    default:
        printf("其他\n");
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

### 跳转语句

```c
// break - 跳出循环
for (int i = 0; i < 10; i++) {
    if (i == 5) break;
    printf("%d ", i);
}

// continue - 跳过本次循环
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    printf("%d ", i);
}
```

## 输入输出

```c
#include <stdio.h>

int main() {
    // 输出
    printf("Hello, World!\n");
    printf("Value: %d\n", 42);
    printf("Pi: %.2f\n", 3.14159);
    printf("Name: %s\n", "John");
    
    // 输入
    int age;
    char name[20];
    
    printf("Enter your age: ");
    scanf("%d", &age);
    
    printf("Enter your name: ");
    scanf("%s", name);
    
    printf("Name: %s, Age: %d\n", name, age);
    
    return 0;
}
```

---

**上一章**: [C 教程](./C教程)

**下一章**: [C 语言指针](./C指针)