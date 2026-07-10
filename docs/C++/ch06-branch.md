# 第6章 分支语句和逻辑运算符



## 本章内容

- if语句
- if-else-if阶梯
- 条件运算符（三元运算符）
- switch语句
- break和continue在switch中的使用
- 逻辑运算符详解
- 文件I/O基础

---

## 6.1 if语句

### 6.1.1 基本结构

```cpp
if (条件) {
    // 条件为true时执行
}
```

### 6.1.2 基本示例

```cpp
#include <iostream>
using namespace std;

int main()
{
    int age;
    cout << "Enter your age: ";
    cin >> age;
    
    if (age >= 18) {
        cout << "You are an adult." << endl;
    }
    
    if (age < 13) {
        cout << "You are a child." << endl;
    }
    
    return 0;
}
```

### 6.1.3 if语句的缩进

```cpp
// 正确的缩进
if (age >= 18)
{
    cout << "Adult" << endl;
}

// 错误的缩进（不影响编译，但影响可读性）
if (age >= 18)
cout << "Adult" << endl;
```

---

## 6.2 if-else语句

### 6.2.1 基本结构

```cpp
if (条件) {
    // 条件为true时执行
} else {
    // 条件为false时执行
}
```

### 6.2.2 基本示例

```cpp
#include <iostream>
using namespace std;

int main()
{
    int score;
    cout << "Enter your score: ";
    cin >> score;
    
    if (score >= 60) {
        cout << "Pass" << endl;
    } else {
        cout << "Fail" << endl;
    }
    
    return 0;
}
```

---

## 6.3 if-else-if阶梯

### 6.3.1 基本结构

```cpp
if (条件1) {
    // 条件1为true
} else if (条件2) {
    // 条件1为false，条件2为true
} else if (条件3) {
    // 条件1和2为false，条件3为true
} else {
    // 所有条件都为false
}
```

### 6.3.2 基本示例

```cpp
#include <iostream>
using namespace std;

int main()
{
    int score;
    cout << "Enter score (0-100): ";
    cin >> score;
    
    if (score >= 90) {
        cout << "Grade: A" << endl;
    } else if (score >= 80) {
        cout << "Grade: B" << endl;
    } else if (score >= 70) {
        cout << "Grade: C" << endl;
    } else if (score >= 60) {
        cout << "Grade: D" << endl;
    } else {
        cout << "Grade: F" << endl;
    }
    
    return 0;
}
```

### 6.3.3 注意事项

```cpp
// 条件顺序很重要
if (score >= 60) {
    cout << "D or better" << endl;
} else if (score >= 90) {  // 永远不会执行
    cout << "A" << endl;
}

// 正确的顺序
if (score >= 90) {
    cout << "A" << endl;
} else if (score >= 60) {
    cout << "D or better" << endl;
}
```

---

## 6.4 条件运算符（三元运算符）

### 6.4.1 基本语法

```cpp
条件 ? 表达式1 : 表达式2;
```

### 6.4.2 基本示例

```cpp
#include <iostream>
using namespace std;

int main()
{
    int a = 10, b = 20;
    
    // 传统方式
    int max;
    if (a > b) {
        max = a;
    } else {
        max = b;
    }
    
    // 条件运算符
    int max2 = (a > b) ? a : b;
    
    cout << "Max: " << max2 << endl;
    
    // 条件运算符可以嵌套（不推荐）
    int x = 15;
    string result = (x > 10) ? "大于10" : (x > 5) ? "大于5" : "其他";
    cout << result << endl;
    
    return 0;
}
```

---

## 6.5 switch语句

### 6.5.1 基本结构

```cpp
switch (表达式) {
    case 常量1:
        // 语句
        break;
    case 常量2:
        // 语句
        break;
    default:
        // 默认语句
}
```

### 6.5.2 基本示例

```cpp
#include <iostream>
using namespace std;

int main()
{
    int day;
    cout << "Enter day (1-7): ";
    cin >> day;
    
    switch (day) {
        case 1:
            cout << "Monday" << endl;
            break;
        case 2:
            cout << "Tuesday" << endl;
            break;
        case 3:
            cout << "Wednesday" << endl;
            break;
        case 4:
            cout << "Thursday" << endl;
            break;
        case 5:
            cout << "Friday" << endl;
            break;
        case 6:
            cout << "Saturday" << endl;
            break;
        case 7:
            cout << "Sunday" << endl;
            break;
        default:
            cout << "Invalid day" << endl;
    }
    
    return 0;
}
```

### 6.5.3 switch的注意事项

```cpp
// case必须是常量表达式
int x = 5;
switch (x) {
    case 5:      // 正确：字面量
        break;
    case y:      // 错误：变量
        break;
}

// 忘记break会导致穿透
switch (choice) {
    case 1:
        cout << "One" << endl;
        // 没有break，会继续执行下一个case
    case 2:
        cout << "Two" << endl;
        break;
}
```

---

## 6.6 break和continue在switch中的使用

### 6.6.1 break的作用

```cpp
switch (choice) {
    case 1:
        cout << "One" << endl;
        break;  // 跳出switch语句
    case 2:
        cout << "Two" << endl;
        break;
    default:
        cout << "Other" << endl;
        break;
}
```

### 6.6.2 穿透（fall-through）

```cpp
switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        cout << "31 days" << endl;
        break;
    case 4: case 6: case 9: case 11:
        cout << "30 days" << endl;
        break;
    case 2:
        cout << "28 or 29 days" << endl;
        break;
}
```

### 6.6.3 continue在switch中的行为

```cpp
// continue在switch中没有实际作用
// switch不是循环，continue会导致编译错误

// 正确做法：使用if-else或重新组织代码
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;  // 跳过偶数
    }
    cout << i << " ";
}
```

---

## 6.7 逻辑运算符详解

### 6.7.1 逻辑与（&&）

```cpp
// 两个条件都为true时才为true
bool result = (a > 0) && (b > 0);

// 短路求值
if (ptr != nullptr && *ptr > 0) {
    // ptr不为空时才会解引用
}
```

### 6.7.2 逻辑或（||）

```cpp
// 至少一个条件为true时就为true
bool result = (a > 0) || (b > 0);

// 短路求值
if (i >= 0 || array[i] > 0) {
    // i为负数时不会访问数组
}
```

### 6.7.3 逻辑非（!）

```cpp
// 取反
bool result = !(a > b);  // 等价于 a <= b

if (!found) {
    cout << "Not found" << endl;
}
```

### 6.7.4 逻辑运算符优先级

```cpp
// &&优先级高于||
// !优先级最高

bool result = !a && b || c;
// 等价于：((!a) && b) || c
```

### 6.7.5 使用逻辑运算符的技巧

```cpp
// 范围检查
if (x >= 0 && x <= 100) {
    cout << "Valid range" << endl;
}

// 默认值
int value = (ptr != nullptr) ? *ptr : 0;

// 条件组合
if (isValid && (isAdmin || isOwner)) {
    grantAccess();
}
```

---

## 6.8 文件I/O

### 6.8.1 包含头文件

```cpp
#include <fstream>  // 文件输入输出
#include <iostream>
using namespace std;
```

### 6.8.2 写入文件

```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ofstream outFile;  // 输出文件流
    
    outFile.open("output.txt");  // 打开文件
    
    if (outFile.is_open()) {
        outFile << "Hello, File!" << endl;
        outFile << "Number: " << 42 << endl;
        outFile.close();  // 关闭文件
        cout << "File written successfully" << endl;
    } else {
        cout << "Unable to open file" << endl;
    }
    
    return 0;
}
```

### 6.8.3 读取文件

```cpp
#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main()
{
    ifstream inFile;  // 输入文件流
    
    inFile.open("input.txt");  // 打开文件
    
    if (inFile.is_open()) {
        string line;
        while (getline(inFile, line)) {
            cout << line << endl;
        }
        inFile.close();  // 关闭文件
    } else {
        cout << "Unable to open file" << endl;
    }
    
    return 0;
}
```

### 6.8.4 文件I/O示例

```cpp
#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main()
{
    // 写入文件
    ofstream outFile("students.txt");
    outFile << "Alice 20 3.8" << endl;
    outFile << "Bob 22 3.5" << endl;
    outFile << "Charlie 21 3.9" << endl;
    outFile.close();
    
    // 读取文件
    ifstream inFile("students.txt");
    string name;
    int age;
    double gpa;
    
    while (inFile >> name >> age >> gpa) {
        cout << name << " " << age << " " << gpa << endl;
    }
    
    inFile.close();
    
    return 0;
}
```

---

## 6.9 字符输入

### 6.9.1 cin.get()

```cpp
#include <iostream>
using namespace std;

int main()
{
    char ch;
    
    cout << "Enter a character: ";
    ch = cin.get();  // 读取一个字符，包括空白
    
    cout << "You entered: " << ch << endl;
    
    return 0;
}
```

### 6.9.2 EOF检测

```cpp
#include <iostream>
using namespace std;

int main()
{
    char ch;
    int count = 0;
    
    cout << "Enter text (Ctrl+Z on Windows, Ctrl+D on Unix to end): ";
    
    while ((ch = cin.get()) != EOF) {
        count++;
        cout << ch;
    }
    
    cout << endl << "Characters entered: " << count << endl;
    
    return 0;
}
```

---

## 6.10 嵌套if和switch

### 6.10.1 嵌套if

```cpp
#include <iostream>
using namespace std;

int main()
{
    int age;
    bool hasTicket;
    
    cout << "Enter age: ";
    cin >> age;
    cout << "Do you have a ticket? (1=yes, 0=no): ";
    cin >> hasTicket;
    
    if (age >= 18) {
        if (hasTicket) {
            cout << "Welcome!" << endl;
        } else {
            cout << "Please buy a ticket." << endl;
        }
    } else {
        cout << "Sorry, you must be 18 or older." << endl;
    }
    
    return 0;
}
```

### 6.10.2 switch嵌套

```cpp
#include <iostream>
using namespace std;

int main()
{
    int choice;
    cout << "1. Math" << endl;
    cout << "2. Science" << endl;
    cout << "3. History" << endl;
    cout << "Enter choice: ";
    cin >> choice;
    
    switch (choice) {
        case 1:
            cout << "Math selected" << endl;
            int mathChoice;
            cout << "1. Algebra" << endl;
            cout << "2. Geometry" << endl;
            cout << "Enter math topic: ";
            cin >> mathChoice;
            
            switch (mathChoice) {
                case 1:
                    cout << "Algebra selected" << endl;
                    break;
                case 2:
                    cout << "Geometry selected" << endl;
                    break;
                default:
                    cout << "Invalid choice" << endl;
            }
            break;
        case 2:
            cout << "Science selected" << endl;
            break;
        case 3:
            cout << "History selected" << endl;
            break;
        default:
            cout << "Invalid choice" << endl;
    }
    
    return 0;
}
```

---

## 6.11 总结

- if语句用于条件执行
- if-else-if阶梯用于多条件判断
- 条件运算符是if-else的简写形式
- switch语句用于基于整数值的分支
- break防止switch穿透
- 逻辑运算符组合多个条件
- 文件I/O使用ifstream和ofstream
- 字符输入可以使用cin.get()
- 嵌套结构可以处理复杂逻辑

