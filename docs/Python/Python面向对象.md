# Python 面向对象

## 类的定义

### 基本语法

```python
class ClassName:
    """类的文档字符串"""
    
    def __init__(self, parameters):
        # 构造方法
        self.attribute = value
    
    def method_name(self, parameters):
        # 方法
        pass
```

### 示例

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"My name is {self.name}, I'm {self.age} years old."

# 创建对象
p = Person("John", 30)
print(p.introduce())  # "My name is John, I'm 30 years old."
```

## 属性

### 实例属性

```python
class Car:
    def __init__(self, brand, model):
        self.brand = brand  # 实例属性
        self.model = model

car1 = Car("Toyota", "Camry")
car2 = Car("Honda", "Accord")

print(car1.brand)  # "Toyota"
print(car2.model)  # "Accord"
```

### 类属性

```python
class Car:
    wheels = 4  # 类属性，所有实例共享
    
    def __init__(self, brand):
        self.brand = brand

car1 = Car("Toyota")
car2 = Car("Honda")

print(car1.wheels)  # 4
print(car2.wheels)  # 4
print(Car.wheels)   # 4
```

## 方法

### 实例方法

```python
class Circle:
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14159 * self.radius ** 2
    
    def circumference(self):
        return 2 * 3.14159 * self.radius

c = Circle(5)
print(c.area())          # 78.53975
print(c.circumference()) # 31.4159
```

### 类方法

```python
class Person:
    population = 0
    
    def __init__(self, name):
        self.name = name
        Person.population += 1
    
    @classmethod
    def get_population(cls):
        return cls.population

p1 = Person("John")
p2 = Person("Alice")
print(Person.get_population())  # 2
```

### 静态方法

```python
class MathUtils:
    @staticmethod
    def add(a, b):
        return a + b
    
    @staticmethod
    def multiply(a, b):
        return a * b

print(MathUtils.add(3, 5))      # 8
print(MathUtils.multiply(4, 6)) # 24
```

## 继承

### 基本继承

```python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

dog = Dog("Buddy")
cat = Cat("Whiskers")

print(dog.speak())  # "Buddy says Woof!"
print(cat.speak())  # "Whiskers says Meow!"
```

### 方法重写

```python
class Vehicle:
    def drive(self):
        return "Vehicle is driving"

class Car(Vehicle):
    def drive(self):
        return "Car is driving on the road"

class Boat(Vehicle):
    def drive(self):
        return "Boat is sailing on water"

v = Vehicle()
c = Car()
b = Boat()

print(v.drive())  # "Vehicle is driving"
print(c.drive())  # "Car is driving on the road"
print(b.drive())  # "Boat is sailing on water"
```

### super() 函数

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Student(Person):
    def __init__(self, name, age, grade):
        super().__init__(name, age)
        self.grade = grade

s = Student("Alice", 20, "A")
print(s.name)   # "Alice"
print(s.age)    # 20
print(s.grade)  # "A"
```

## 封装

### 私有属性

```python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # 私有属性
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return True
        return False
    
    def get_balance(self):
        return self.__balance

account = BankAccount(1000)
account.deposit(500)
account.withdraw(300)
print(account.get_balance())  # 1200
# print(account.__balance)  # 错误！私有属性不可直接访问
```

## 多态

```python
def make_speak(animal):
    print(animal.speak())

dog = Dog("Buddy")
cat = Cat("Whiskers")

make_speak(dog)  # "Buddy says Woof!"
make_speak(cat)  # "Whiskers says Meow!"
```
