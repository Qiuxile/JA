# C 语言文件操作

## 文件操作基础

### 文件指针

```c
#include <stdio.h>

FILE *fp;  // 文件指针
```

### 打开文件

```c
// 打开文件
fp = fopen("example.txt", "mode");

// 模式说明
// "r" - 只读
// "w" - 只写，创建新文件（覆盖原有）
// "a" - 追加
// "r+" - 读写
// "w+" - 读写，创建新文件
// "a+" - 读写，追加
```

### 关闭文件

```c
fclose(fp);
```

## 文件读写

### 字符读写

```c
// 写入字符
fputc('A', fp);

// 读取字符
int ch = fgetc(fp);
```

### 字符串读写

```c
// 写入字符串
fputs("Hello, World!", fp);

// 读取字符串
char buffer[100];
fgets(buffer, sizeof(buffer), fp);
```

### 格式化读写

```c
// 格式化写入
fprintf(fp, "Name: %s, Age: %d\n", "John", 30);

// 格式化读取
char name[20];
int age;
fscanf(fp, "Name: %s, Age: %d", name, &age);
```

## 二进制文件操作

### 写入二进制数据

```c
struct Person {
    char name[20];
    int age;
    float height;
};

struct Person p = {"John", 30, 1.75};

// 以二进制模式打开
FILE *fp = fopen("person.dat", "wb");

// 写入结构体
fwrite(&p, sizeof(struct Person), 1, fp);

fclose(fp);
```

### 读取二进制数据

```c
struct Person p;

FILE *fp = fopen("person.dat", "rb");

// 读取结构体
fread(&p, sizeof(struct Person), 1, fp);

printf("Name: %s, Age: %d, Height: %.2f\n", 
       p.name, p.age, p.height);

fclose(fp);
```

## 文件位置

### 获取当前位置

```c
long pos = ftell(fp);
printf("当前位置: %ld\n", pos);
```

### 设置文件位置

```c
// 移动到文件开头
fseek(fp, 0, SEEK_SET);

// 移动到文件末尾
fseek(fp, 0, SEEK_END);

// 向后移动10字节
fseek(fp, 10, SEEK_CUR);
```

## 文件复制示例

```c
#include <stdio.h>

int main() {
    FILE *source = fopen("source.txt", "r");
    FILE *dest = fopen("dest.txt", "w");
    
    if (source == NULL || dest == NULL) {
        printf("无法打开文件\n");
        return 1;
    }
    
    char ch;
    while ((ch = fgetc(source)) != EOF) {
        fputc(ch, dest);
    }
    
    fclose(source);
    fclose(dest);
    
    printf("文件复制完成\n");
    return 0;
}
```

## 检查文件是否存在

```c
FILE *fp = fopen("example.txt", "r");
if (fp == NULL) {
    printf("文件不存在\n");
} else {
    printf("文件存在\n");
    fclose(fp);
}
```

## 文件操作常用函数

| 函数 | 功能 |
|------|------|
| fopen() | 打开文件 |
| fclose() | 关闭文件 |
| fgetc() | 读取字符 |
| fputc() | 写入字符 |
| fgets() | 读取字符串 |
| fputs() | 写入字符串 |
| fprintf() | 格式化写入 |
| fscanf() | 格式化读取 |
| fread() | 二进制读取 |
| fwrite() | 二进制写入 |
| fseek() | 设置文件位置 |
| ftell() | 获取文件位置 |
| rewind() | 回到文件开头 |
| feof() | 检查是否到达文件末尾 |

---

**上一章**: [C 结构体](./C结构体)