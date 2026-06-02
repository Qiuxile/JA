# C 语言指针

## 指针基础

### 什么是指针

指针是一个变量，其值为另一个变量的地址。

```c
#include <stdio.h>

int main() {
    int value = 10;
    int *ptr = &value;  // ptr 指向 value 的地址
    
    printf("value 的值: %d\n", value);
    printf("value 的地址: %p\n", &value);
    printf("ptr 的值: %p\n", ptr);
    printf("ptr 指向的值: %d\n", *ptr);
    
    return 0;
}
```

### 指针声明

```c
int *p;        // 指向整数的指针
char *str;     // 指向字符的指针
float *fp;     // 指向浮点数的指针
int **pp;      // 指向指针的指针
```

### 指针操作符

```c
// & 取地址符
int x = 10;
int *p = &x;  // 获取 x 的地址

// * 解引用符
*p = 20;      // 修改 p 指向的变量的值
printf("%d", *p);  // 读取 p 指向的变量的值
```

## 指针与数组

### 数组名就是指针

```c
int arr[5] = {1, 2, 3, 4, 5};
int *p = arr;  // p 指向数组首元素

// 以下两种写法等价
printf("%d", arr[0]);
printf("%d", *p);

// 指针移动
printf("%d", *(p + 1));  // 等价于 arr[1]
printf("%d", *(p + 2));  // 等价于 arr[2]
```

### 数组遍历

```c
int arr[] = {10, 20, 30, 40, 50};
int *p = arr;

for (int i = 0; i < 5; i++) {
    printf("%d ", *(p + i));
}
```

## 指针与函数

### 指针作为函数参数

```c
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 5, y = 10;
    swap(&x, &y);
    printf("x = %d, y = %d\n", x, y);  // x = 10, y = 5
    return 0;
}
```

### 指针作为函数返回值

```c
int* create_array(int size) {
    int *arr = (int*)malloc(size * sizeof(int));
    for (int i = 0; i < size; i++) {
        arr[i] = i + 1;
    }
    return arr;
}

int main() {
    int *arr = create_array(5);
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    free(arr);  // 释放内存
    return 0;
}
```

## 指针数组与数组指针

### 指针数组

```c
char *names[] = {"Alice", "Bob", "Charlie"};

for (int i = 0; i < 3; i++) {
    printf("%s\n", names[i]);
}
```

### 数组指针

```c
int arr[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};

int (*p)[4] = arr;  // 指向包含4个整数的数组的指针

printf("%d\n", *(*(p + 1) + 2));  // 输出 7
```

## 空指针

```c
int *p = NULL;  // 空指针

if (p == NULL) {
    printf("指针为空\n");
}
```

## 野指针

野指针是指向无效内存地址的指针，需要避免：

```c
// 错误示例
int *p;  // 未初始化的指针，值不确定
*p = 10; // 危险！可能导致程序崩溃

// 正确做法
int *p = NULL;  // 初始化为空指针
```

## 指针运算

```c
int arr[] = {1, 2, 3, 4, 5};
int *p = arr;

p++;       // 指向下一个元素
p += 2;    // 向后移动2个元素
p--;       // 指向上一个元素
p -= 1;    // 向前移动1个元素

int diff = p - arr;  // 计算指针差值
```

---

**上一章**: [C 基础语法](./C基础语法)

**下一章**: [C 结构体](./C结构体)