# Python 数据类型

## 列表 (List)

### 创建列表

```python
# 创建空列表
empty_list = []
empty_list = list()

# 创建有初始值的列表
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
```

### 访问列表元素

```python
fruits = ["apple", "banana", "cherry"]

# 正向索引
print(fruits[0])   # "apple"
print(fruits[1])   # "banana"

# 负向索引
print(fruits[-1])  # "cherry"
print(fruits[-2])  # "banana"

# 切片
print(fruits[1:3])   # ["banana", "cherry"]
print(fruits[:2])    # ["apple", "banana"]
print(fruits[1:])    # ["banana", "cherry"]
```

### 列表操作

```python
fruits = ["apple", "banana", "cherry"]

# 添加元素
fruits.append("orange")        # 在末尾添加
fruits.insert(1, "grape")      # 在指定位置插入

# 修改元素
fruits[0] = "red apple"

# 删除元素
fruits.remove("banana")        # 删除指定值
del fruits[0]                  # 删除指定索引
popped = fruits.pop()          # 删除并返回末尾元素

# 列表长度
length = len(fruits)

# 列表排序
numbers = [3, 1, 4, 1, 5, 9]
numbers.sort()                 # 升序
numbers.sort(reverse=True)     # 降序
```

## 元组 (Tuple)

### 创建元组

```python
# 创建元组
colors = ("red", "green", "blue")
single = (1,)  # 单个元素必须加逗号

# 也可以不加括号
fruits = "apple", "banana", "cherry"
```

### 元组特点

元组是不可变的（immutable）：

```python
colors = ("red", "green", "blue")
# colors[0] = "yellow"  # 错误！元组不能修改
```

## 字典 (Dictionary)

### 创建字典

```python
# 创建字典
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# 空字典
empty_dict = {}
empty_dict = dict()
```

### 访问字典元素

```python
person = {"name": "John", "age": 30, "city": "New York"}

# 通过键访问
print(person["name"])   # "John"
print(person.get("age")) # 30

# 获取所有键
keys = person.keys()

# 获取所有值
values = person.values()

# 获取所有键值对
items = person.items()
```

### 字典操作

```python
person = {"name": "John", "age": 30}

# 添加/修改元素
person["city"] = "New York"
person["age"] = 31

# 删除元素
del person["city"]
person.pop("age")

# 检查键是否存在
if "name" in person:
    print("存在")
```

## 集合 (Set)

### 创建集合

```python
# 创建集合
fruits = {"apple", "banana", "cherry"}
empty_set = set()

# 从列表创建
numbers = set([1, 2, 3, 4, 5])
```

### 集合操作

```python
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

# 并集
union = a | b  # {1, 2, 3, 4, 5, 6}

# 交集
intersection = a & b  # {3, 4}

# 差集
difference = a - b  # {1, 2}

# 添加元素
fruits.add("orange")

# 删除元素
fruits.remove("banana")
```

## 类型转换

```python
# 转换为整数
int("123")    # 123
int(3.14)     # 3

# 转换为浮点数
float("3.14") # 3.14
float(10)     # 10.0

# 转换为字符串
str(123)      # "123"
str(3.14)     # "3.14"

# 转换为列表
list("hello") # ['h', 'e', 'l', 'l', 'o']

# 转换为元组
tuple([1, 2, 3]) # (1, 2, 3)

# 转换为集合
set([1, 2, 2, 3]) # {1, 2, 3}
```

---

**上一章**: [Python 基础语法](./Python基础语法)

**下一章**: [Python 函数](./Python函数)