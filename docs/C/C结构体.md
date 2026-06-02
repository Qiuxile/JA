# C 语言结构体

## 结构体定义

### 基本语法

```c
struct 结构体名 {
    数据类型 成员名1;
    数据类型 成员名2;
    // ...
};
```

### 示例

```c
struct Person {
    char name[20];
    int age;
    float height;
};
```

## 结构体变量

### 声明与初始化

```c
// 声明变量
struct Person p1;

// 初始化
struct Person p2 = {"John", 30, 1.75};

// 指定成员初始化（C99标准）
struct Person p3 = {
    .name = "Alice",
    .age = 25,
    .height = 1.68
};
```

### 访问成员

```c
struct Person p = {"John", 30, 1.75};

// 使用点号访问
printf("Name: %s\n", p.name);
printf("Age: %d\n", p.age);
printf("Height: %.2f\n", p.height);

// 修改成员
p.age = 31;
```

## 结构体指针

### 使用指针访问成员

```c
struct Person p = {"John", 30, 1.75};
struct Person *ptr = &p;

// 使用箭头运算符
printf("Name: %s\n", ptr->name);
printf("Age: %d\n", ptr->age);

// 等价写法
printf("Name: %s\n", (*ptr).name);
```

### 动态分配结构体

```c
#include <stdlib.h>
#include <string.h>

struct Person *create_person(const char *name, int age, float height) {
    struct Person *p = (struct Person*)malloc(sizeof(struct Person));
    strcpy(p->name, name);
    p->age = age;
    p->height = height;
    return p;
}

int main() {
    struct Person *p = create_person("John", 30, 1.75);
    printf("%s is %d years old\n", p->name, p->age);
    free(p);
    return 0;
}
```

## 结构体数组

```c
struct Person people[3] = {
    {"John", 30, 1.75},
    {"Alice", 25, 1.68},
    {"Bob", 35, 1.80}
};

for (int i = 0; i < 3; i++) {
    printf("%s: %d\n", people[i].name, people[i].age);
}
```

## 结构体嵌套

```c
struct Date {
    int year;
    int month;
    int day;
};

struct Person {
    char name[20];
    int age;
    struct Date birthday;
};

struct Person p = {
    "John",
    30,
    {1994, 5, 15}
};

printf("Birthday: %d-%d-%d\n", 
       p.birthday.year, 
       p.birthday.month, 
       p.birthday.day);
```

## 结构体作为函数参数

### 值传递

```c
void print_person(struct Person p) {
    printf("Name: %s, Age: %d\n", p.name, p.age);
}

int main() {
    struct Person p = {"John", 30, 1.75};
    print_person(p);
    return 0;
}
```

### 指针传递

```c
void update_age(struct Person *p, int new_age) {
    p->age = new_age;
}

int main() {
    struct Person p = {"John", 30, 1.75};
    update_age(&p, 31);
    printf("Age: %d\n", p.age);  // 31
    return 0;
}
```

## 位域

结构体可以使用位域来节省内存：

```c
struct Flags {
    unsigned int flag1 : 1;  // 1位
    unsigned int flag2 : 1;  // 1位
    unsigned int flag3 : 2;  // 2位
    unsigned int flag4 : 4;  // 4位
};

struct Flags f;
f.flag1 = 1;
f.flag2 = 0;
f.flag3 = 3;
```

---

**上一章**: [C 指针](./C指针)

**下一章**: [C 文件操作](./C文件操作)