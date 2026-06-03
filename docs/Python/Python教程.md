# Python 教程

## Python 简介

Python 是一种高级通用编程语言，由 Guido van Rossum 于 1991 年发布。它以简洁的语法和强大的功能著称，广泛应用于 Web 开发、数据分析、人工智能、科学计算等领域。

### Python 的特点

- **简单易学**: Python 语法简洁，可读性强，适合初学者入门
- **跨平台**: 支持 Windows、macOS、Linux 等多种操作系统
- **面向对象**: 支持面向对象编程，代码结构清晰
- **丰富的库**: 拥有庞大的标准库和第三方库生态
- **动态类型**: 无需声明变量类型，开发效率高

## Python 环境搭建

### 安装 Python

1. 访问 [Python 官网](https://www.python.org/) 下载对应版本
2. 运行安装程序，勾选 "Add Python to PATH"
3. 验证安装：打开命令行输入 `python --version`

### 开发工具

- **IDLE**: Python 自带的简易 IDE
- **PyCharm**: JetBrains 出品的专业 Python IDE
- **VS Code**: 轻量级编辑器，配合 Python 插件使用

## 基础语法

### 第一个 Python 程序

```python
print("Hello, World!")
```

### 变量和数据类型

```python
# 整数
age = 25
# 浮点数
height = 1.75
# 字符串
name = "Python"
# 布尔值
is_valid = True
```

### 条件语句

```python
if score >= 90:
    print("优秀")
elif score >= 60:
    print("及格")
else:
    print("不及格")
```

### 循环语句

```python
# for 循环
for i in range(1, 10):
    print(i)

# while 循环
count = 0
while count < 5:
    print(count)
    count += 1
```

## 函数

### 定义函数

```python
def greet(name):
    """问候函数"""
    return f"Hello, {name}!"

result = greet("World")
print(result)
```

### 匿名函数

```python
add = lambda x, y: x + y
print(add(3, 5))  # 输出: 8
```

## 数据结构

### 列表

```python
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits[1])  # 输出: banana
```

### 字典

```python
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
print(person["name"])  # 输出: John
```

### 元组

```python
colors = ("red", "green", "blue")
print(colors[0])  # 输出: red
```

## 面向对象

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        print(f"My name is {self.name}, I'm {self.age} years old.")

p = Person("Alice", 28)
p.introduce()
```

## 模块和包

```python
# 导入模块
import math
print(math.sqrt(16))  # 输出: 4.0

# 导入特定函数
from datetime import date
today = date.today()
print(today)
```

## 文件操作

```python
# 读取文件
with open("example.txt", "r") as f:
    content = f.read()
    print(content)

# 写入文件
with open("output.txt", "w") as f:
    f.write("Hello, Python!")
```

## 异常处理

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("不能除以零")
finally:
    print("操作完成")
```

## Python 进阶

- **装饰器**: 修改函数行为的语法糖
- **生成器**: 惰性求值的迭代器
- **上下文管理器**: 资源管理的优雅方式
- **多线程/多进程**: 并发编程
- **异步编程**: async/await 语法

## 常用库推荐

| 库名 | 用途 |
|------|------|
| requests | HTTP 请求 |
| pandas | 数据分析 |
| numpy | 数值计算 |
| matplotlib | 数据可视化 |
| flask | Web 框架 |
| django | 全栈 Web 框架 |
