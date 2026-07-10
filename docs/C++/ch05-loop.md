# 第5章 循环和关系表达式



## 本章内容

- for循环的结构和使用
- while循环
- do-while循环
- 关系运算符
- 逻辑运算符
- 文本输入和循环
- 嵌套循环和二维数组

---

## 5.1 for循环

### 5.1.1 基本结构

```cpp
for (初始化; 条件; 更新) {
    // 循环体
}
```

### 5.1.2 基本示例

```cpp
#include <iostream>
using namespace std;

int main()
{
    // 打印1到10
    for (int i = 1; i <= 10; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    // 计算1到100的和
    int sum = 0;
    for (int i = 1; i <= 100; i++) {
        sum += i;
    }
    cout << "Sum: " << sum << endl;
    
    return 0;
}
```

### 5.1.3 for循环变体

```cpp
// 递减循环
for (int i = 10; i >= 1; i--) {
    cout << i << " ";
}

// 步长为2
for (int i = 0; i < 20; i += 2) {
    cout << i << " ";
}

// 使用复合运算符
for (int i = 1; i <= 100; i *= 2) {
    cout << i << " ";
}
```

### 5.1.4 for循环的执行顺序

```cpp
#include <iostream>
using namespace std;

int main()
{
    for (int i = 0; i < 5; i++) {
        cout << "i = " << i << endl;
    }
    
    // 等价于：
    int j = 0;          // 初始化（只执行一次）
    while (j < 5) {     // 条件检查
        cout << "j = " << j << endl;
        j++;             // 更新
    }
    
    return 0;
}
```

---

## 5.2 while循环

### 5.2.1 基本结构

```cpp
while (条件) {
    // 循环体
}
```

### 5.2.2 基本示例

```cpp
#include <iostream>
using namespace std;

int main()
{
    // 打印1到10
    int i = 1;
    while (i <= 10) {
        cout << i << " ";
        i++;
    }
    cout << endl;
    
    return 0;
}
```

### 5.2.3 while循环注意事项

```cpp
// 确保条件最终为false
int count = 0;
while (count < 5) {
    cout << count << endl;
    count++;  // 必须更新条件变量
}

// 卡住循环的危险示例（死循环）
// while (true) { }  // 无限循环
// while (i <= 10) { }  // 如果i不更新
```

---

## 5.3 do-while循环

### 5.3.1 基本结构

```cpp
do {
    // 循环体
} while (条件);  // 注意分号
```

### 5.3.2 基本示例

```cpp
#include <iostream>
using namespace std;

int main()
{
    int num;
    
    // 至少执行一次
    do {
        cout << "Enter a number (0 to quit): ";
        cin >> num;
        cout << "You entered: " << num << endl;
    } while (num != 0);
    
    return 0;
}
```

### 5.3.3 do-while与while的区别

```cpp
#include <iostream>
using namespace std;

int main()
{
    int x = 10;
    
    // while循环：条件为false时不执行
    while (x < 5) {
        cout << "This won't print" << endl;
    }
    
    // do-while循环：至少执行一次
    do {
        cout << "This will print once" << endl;
    } while (x < 5);
    
    return 0;
}
```

---

## 5.4 关系运算符

| 运算符 | 含义 | 示例 |
|--------|------|------|
| `<` | 小于 | `a < b` |
| `<=` | 小于或等于 | `a <= b` |
| `>` | 大于 | `a > b` |
| `>=` | 大于或等于 | `a >= b` |
| `==` | 等于 | `a == b` |
| `!=` | 不等于 | `a != b` |

### 5.4.1 关系表达式

```cpp
#include <iostream>
using namespace std;

int main()
{
    int x = 10;
    int y = 20;
    
    cout << (x < y) << endl;   // 1（true）
    cout << (x > y) << endl;   // 0（false）
    cout << (x == y) << endl;  // 0（false）
    cout << (x != y) << endl;  // 1（true）
    
    return 0;
}
```

### 5.4.2 关系运算符的优先级

```cpp
// ==和!=的优先级低于关系比较运算符
// 5 > 3 == 6 > 4 等价于 (5 > 3) == (6 > 4)

bool result = 5 > 3 == 6 > 4;  // true
bool result2 = 5 > (3 == 6) > 4;  // 不是你想的那样
```

---

## 5.5 逻辑运算符

| 运算符 | 含义 | 示例 |
|--------|------|------|
| `&&` | 逻辑与（AND） | `a && b` |
| `\|\|` | 逻辑或（OR） | `a \|\| b` |
| `!` | 逻辑非（NOT） | `!a` |

### 5.5.1 逻辑运算符示例

```cpp
#include <iostream>
using namespace std;

int main()
{
    int age = 25;
    bool hasLicense = true;
    
    // 逻辑与：两个条件都为true
    if (age >= 18 && hasLicense) {
        cout << "可以开车" << endl;
    }
    
    // 逻辑或：至少一个条件为true
    if (age < 13 || age > 65) {
        cout << "折扣票价" << endl;
    }
    
    // 逻辑非：取反
    if (!hasLicense) {
        cout << "无驾照" << endl;
    }
    
    return 0;
}
```

### 5.5.2 短路求值

```cpp
int x = 0;
int y = 5;

// &&短路：如果第一个为false，不计算第二个
if (x != 0 && y / x > 1) {
    cout << "不会执行到这里" << endl;  // x为0，不会除零错误
}

// ||短路：如果第一个为true，不计算第二个
if (x == 0 || y / x > 1) {
    cout << "会执行到这里" << endl;
}
```

---

## 5.6 文本输入

### 5.6.1 cin和>>

`cin`使用空白（空格、制表符、换行符）作为分隔符。

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
    char name[50];
    int age;
    
    cout << "Enter your name: ";
    cin >> name;  // 只读取一个单词
    
    cout << "Enter your age: ";
    cin >> age;
    
    cout << "Hello, " << name << "! Age: " << age << endl;
    
    return 0;
}
```

### 5.6.2 使用getline读取整行

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
    string fullName;
    
    cout << "Enter your full name: ";
    getline(cin, fullName);  // 读取整行
    
    cout << "Hello, " << fullName << "!" << endl;
    
    return 0;
}
```

### 5.6.3 混合使用cin和getline

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
    int age;
    string name;
    
    cout << "Enter age: ";
    cin >> age;
    
    cin.ignore();  // 忽略换行符
    
    cout << "Enter name: ";
    getline(cin, name);
    
    cout << age << ", " << name << endl;
    
    return 0;
}
```

---

## 5.7 嵌套循环

### 5.7.1 基本嵌套循环

```cpp
#include <iostream>
using namespace std;

int main()
{
    // 打印乘法表
    for (int i = 1; i <= 9; i++) {
        for (int j = 1; j <= i; j++) {
            cout << j << " x " << i << " = " << i * j << "\t";
        }
        cout << endl;
    }
    
    return 0;
}
```

### 5.7.2 嵌套循环示例

```cpp
#include <iostream>
using namespace std;

int main()
{
    const int ROWS = 5;
    const int COLS = 5;
    
    // 打印星号三角形
    for (int i = 0; i < ROWS; i++) {
        for (int j = 0; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
    
    return 0;
}
```

---

## 5.8 二维数组

### 5.8.1 二维数组声明

```cpp
int matrix[3][4];  // 3行4列的二维数组
int arr[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
```

### 5.8.2 二维数组访问

```cpp
#include <iostream>
using namespace std;

int main()
{
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    // 访问元素
    cout << matrix[0][0] << endl;  // 1
    cout << matrix[1][2] << endl;  // 6
    cout << matrix[2][1] << endl;  // 8
    
    // 使用循环遍历
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
    
    return 0;
}
```

### 5.8.3 二维数组和指针

```cpp
int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};

// 数组名是指向第一行的指针
int (*ptr)[3] = matrix;

// 访问元素
cout << ptr[0][0] << endl;  // 1
cout << ptr[1][2] << endl;  // 6
```

---

## 5.9 循环控制语句

### 5.9.1 break语句

```cpp
#include <iostream>
using namespace std;

int main()
{
    for (int i = 0; i < 10; i++) {
        if (i == 5) {
            break;  // 跳出循环
        }
        cout << i << " ";
    }
    cout << endl;  // 输出：0 1 2 3 4
    
    return 0;
}
```

### 5.9.2 continue语句

```cpp
#include <iostream>
using namespace std;

int main()
{
    for (int i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            continue;  // 跳过本次循环
        }
        cout << i << " ";  // 只打印奇数
    }
    cout << endl;  // 输出：1 3 5 7 9
    
    return 0;
}
```

### 5.9.3 循环标签（goto）

```cpp
#include <iostream>
using namespace std;

int main()
{
    for (int i = 0; i < 10; i++) {
        for (int j = 0; j < 10; j++) {
            if (i * j > 20) {
                goto done;  // 跳转到标签
            }
            cout << i << " x " << j << " = " << i * j << endl;
        }
    }
    
done:
    cout << "Done!" << endl;
    
    return 0;
}
```

---

## 5.10 总结

- for循环适合已知循环次数的情况
- while循环适合不确定循环次数的情况
- do-while循环至少执行一次循环体
- 关系运算符用于比较值
- 逻辑运算符用于组合条件
- cin使用空白分隔输入，getline读取整行
- 嵌套循环用于处理二维数组
- break和continue控制循环流程

