# Python 基础语法

## 注释

Python 中的注释分为单行注释和多行注释：

```python
# 这是单行注释

"""
这是多行注释
可以包含多个行
"""

'''
这也是多行注释
使用单引号
'''
```

## 变量

### 变量命名规则

- 变量名只能包含字母、数字和下划线
- 变量名不能以数字开头
- 变量名不能是 Python 关键字
- 变量名区分大小写

```python
# 合法的变量名
name = "Alice"
age = 25
user_name = "john_doe"

# 不合法的变量名
# 1name = "Bob"  # 不能以数字开头
# class = "Math"  # 不能使用关键字
```

## 数据类型

### 基本数据类型

```python
# 整数
a = 10
b = -5
c = 0

# 浮点数
pi = 3.14
price = 99.99

# 布尔值
is_valid = True
is_admin = False

# 字符串
greeting = "Hello, World!"
message = 'Python is fun'
```

### 字符串操作

```python
# 字符串拼接
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name

# 字符串格式化
age = 30
print(f"My name is {full_name}, I'm {age} years old")

# 字符串长度
length = len(greeting)

# 字符串切片
substring = greeting[0:5]  # "Hello"
```

## 运算符

### 算术运算符

```python
a = 10
b = 3

print(a + b)   # 加法
print(a - b)   # 减法
print(a * b)   # 乘法
print(a / b)   # 除法
print(a // b)  # 整除
print(a % b)   # 取模
print(a ** b)  # 幂运算
```

### 比较运算符

```python
x = 5
y = 3

print(x == y)  # 等于
print(x != y)  # 不等于
print(x > y)   # 大于
print(x < y)   # 小于
print(x >= y)  # 大于等于
print(x <= y)  # 小于等于
```

### 逻辑运算符

```python
a = True
b = False

print(a and b)  # 逻辑与
print(a or b)   # 逻辑或
print(not a)    # 逻辑非
```

## 输入输出

```python
# 输出
print("Hello, World!")
print("Value:", 42)

# 输入
name = input("Enter your name: ")
age = int(input("Enter your age: "))
```

## 缩进

Python 使用缩进来表示代码块：

```python
if age >= 18:
    print("成年人")
    print("可以投票")
else:
    print("未成年人")
```

---

**上一章**: [Python 教程](./Python教程)

**下一章**: [Python 数据类型](./Python数据类型)