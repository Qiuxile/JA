# Python 函数

## 函数定义

### 基本语法

```python
def function_name(parameters):
    """函数文档字符串"""
    # 函数体
    return value
```

### 示例

```python
def greet(name):
    """向用户打招呼"""
    return f"Hello, {name}!"

message = greet("World")
print(message)  # "Hello, World!"
```

## 参数传递

### 位置参数

```python
def add(a, b):
    return a + b

result = add(3, 5)  # 3 和 5 是位置参数
```

### 默认参数

```python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))      # "Hello, Alice!"
print(greet("Bob", "Hi"))  # "Hi, Bob!"
```

### 关键字参数

```python
def person_info(name, age, city):
    return f"{name} is {age} years old, lives in {city}"

print(person_info(name="John", age=30, city="New York"))
print(person_info(city="London", name="Alice", age=25))
```

### 可变参数

```python
# *args 接收可变数量的位置参数
def sum_all(*args):
    total = 0
    for num in args:
        total += num
    return total

print(sum_all(1, 2, 3))      # 6
print(sum_all(1, 2, 3, 4, 5)) # 15

# **kwargs 接收可变数量的关键字参数
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="John", age=30, city="New York")
```

## 返回值

```python
def divide(a, b):
    if b == 0:
        return None, "Cannot divide by zero"
    return a / b, "Success"

result, message = divide(10, 2)
print(result, message)  # 5.0, "Success"
```

## 匿名函数

使用 `lambda` 创建匿名函数：

```python
add = lambda x, y: x + y
print(add(3, 5))  # 8

# 作为参数传递
numbers = [(1, 3), (4, 1), (2, 5)]
numbers.sort(key=lambda x: x[1])
print(numbers)  # [(4, 1), (1, 3), (2, 5)]
```

## 递归函数

```python
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # 120
```

## 作用域

### 局部变量和全局变量

```python
global_var = "I'm global"

def my_function():
    local_var = "I'm local"
    print(global_var)  # 可以访问全局变量
    print(local_var)   # 可以访问局部变量

my_function()
# print(local_var)  # 错误！局部变量在函数外部不可访问
```

### global 关键字

```python
count = 0

def increment():
    global count
    count += 1

increment()
print(count)  # 1
```

## 内置函数

Python 提供了很多内置函数：

```python
# 数学相关
abs(-5)       # 5
max(1, 2, 3)  # 3
min(1, 2, 3)  # 1
round(3.14159, 2)  # 3.14

# 序列相关
len([1, 2, 3])  # 3
sum([1, 2, 3])  # 6
sorted([3, 1, 2])  # [1, 2, 3]

# 类型转换
int("123")    # 123
str(123)      # "123"
list("hello") # ['h', 'e', 'l', 'l', 'o']

# 其他
print("Hello")
type(42)      # <class 'int'>
```
