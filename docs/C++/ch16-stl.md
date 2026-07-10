# 第16章 string类和标准模板库


## 16.1 string类

### 16.1.1 构造字符串

```cpp
#include <string>
using namespace std;

// 构造方式
string s1;                    // 空字符串
string s2 = "Hello";          // C字符串初始化
string s3("World");           // 直接初始化
string s4 = s2;               // 拷贝初始化
string s5(5, 'A');            // 5个'A'
string s6(s2, 1, 3);          // 从s2的位置1开始取3个字符
```

### 16.1.2 string类输入

```cpp
string str;

// 使用cin（读取一个单词）
cin >> str;

// 使用getline（读取整行）
getline(cin, str);

// 使用getline指定分隔符
getline(cin, str, ';');
```

### 16.1.3 使用字符串

```cpp
string str = "Hello World";

str.size();          // 长度：11
str.empty();         // 是否为空
str[0];              // 访问第一个字符
str.at(0);           // 安全访问

str.append("!");     // 追加
str.insert(5, ",");  // 插入
str.erase(5, 1);     // 删除
str.replace(0, 5, "Hi");  // 替换

str.find("World");   // 查找
str.rfind("l");      // 反向查找
```

### 16.1.4 string还提供了哪些功能

| 方法 | 功能 |
|------|------|
| `substr(pos, len)` | 获取子串 |
| `compare(str)` | 比较 |
| `c_str()` | 获取C字符串 |
| `data()` | 获取数据指针 |
| `reserve(n)` | 预留空间 |
| `clear()` | 清空 |
| `swap(str)` | 交换 |

### 16.1.5 字符串种类

```cpp
string basic_string<char>;      // 普通字符串
wstring basic_string<wchar_t>;  // 宽字符串
u16string basic_string<char16_t>;  // UTF-16字符串
u32string basic_string<char32_t>;  // UTF-32字符串
```

---

## 16.2 智能指针模板类

### 16.2.1 使用智能指针

```cpp
#include <memory>

// auto_ptr（C++98，已弃用）
auto_ptr<double> p1(new double(3.14));
auto_ptr<double> p2 = p1;  // p1变为null

// unique_ptr（C++11）
unique_ptr<double> p3(new double(2.71));
// unique_ptr<double> p4 = p3;  // 错误：不能复制
unique_ptr<double> p5 = move(p3);  // 可以移动

// shared_ptr（C++11）
shared_ptr<double> p6(new double(1.41));
shared_ptr<double> p7 = p6;  // 可以复制，引用计数增加
```

### 16.2.2 有关智能指针的注意事项

```cpp
// 不要混合使用智能指针和普通指针
unique_ptr<int> p1(new int(10));
int* p2 = p1.get();  // 获取原始指针
delete p2;  // 错误：p1仍然拥有内存

// 不要手动删除智能指针管理的内存
unique_ptr<int> p3(new int(20));
// delete p3;  // 错误
```

### 16.2.3 unique_ptr为何优于auto_ptr

| 特性 | auto_ptr | unique_ptr |
|------|----------|------------|
| 复制 | 隐式转移所有权 | 禁止复制 |
| 移动 | 隐式 | 显式move |
| 数组支持 | 否 | 是（unique_ptr[]）|
| 状态 | 可能为空 | 始终有效 |

### 16.2.4 选择智能指针

| 场景 | 推荐 |
|------|------|
| 独占所有权 | `unique_ptr` |
| 共享所有权 | `shared_ptr` |
| 循环引用 | `weak_ptr` |
| 动态数组 | `unique_ptr[]` |

---

## 16.3 标准模板库（STL）

### 16.3.1 模板类vector

```cpp
#include <vector>

vector<int> nums;           // 空vector
vector<int> nums(10);       // 10个元素
vector<int> nums(10, 5);    // 10个元素，值为5
vector<int> nums = {1, 2, 3};  // 初始化列表
```

### 16.3.2 可对矢量执行的操作

```cpp
vector<int> nums = {1, 2, 3, 4, 5};

nums.size();           // 大小
nums.empty();          // 是否为空
nums.push_back(6);     // 末尾添加
nums.pop_back();       // 末尾删除
nums.insert(nums.begin(), 0);  // 插入
nums.erase(nums.begin());      // 删除
nums.clear();          // 清空

nums[0];               // 访问
nums.at(0);            // 安全访问
nums.front();          // 第一个元素
nums.back();           // 最后一个元素

nums.begin();          // 开始迭代器
nums.end();            // 结束迭代器
```

### 16.3.3 对矢量可执行的其他操作

```cpp
vector<int> nums = {5, 3, 1, 4, 2};

sort(nums.begin(), nums.end());  // 排序
reverse(nums.begin(), nums.end());  // 反转

auto it = find(nums.begin(), nums.end(), 3);  // 查找
if (it != nums.end()) {
    cout << "Found at index: " << it - nums.begin() << endl;
}

int count = std::count(nums.begin(), nums.end(), 3);  // 计数
```

### 16.3.4 基于范围的for循环（C++11）

```cpp
vector<int> nums = {1, 2, 3, 4, 5};

// 只读
for (const auto& x : nums) {
    cout << x << " ";
}

// 可修改
for (auto& x : nums) {
    x *= 2;
}
```

---

## 16.4 泛型编程

### 16.4.1 为何使用迭代器

```cpp
// 迭代器提供统一的遍历接口
vector<int> vec = {1, 2, 3};
list<int> lst = {4, 5, 6};

// 使用迭代器
for (vector<int>::iterator it = vec.begin(); it != vec.end(); ++it) {
    cout << *it << " ";
}

for (list<int>::iterator it = lst.begin(); it != lst.end(); ++it) {
    cout << *it << " ";
}
```

### 16.4.2 迭代器类型

| 类型 | 功能 |
|------|------|
| `input_iterator` | 只读，单遍扫描 |
| `output_iterator` | 只写，单遍扫描 |
| `forward_iterator` | 读写，多遍扫描 |
| `bidirectional_iterator` | 读写，双向移动 |
| `random_access_iterator` | 读写，随机访问 |

### 16.4.3 迭代器层次结构

```
input_iterator → forward_iterator → bidirectional_iterator → random_access_iterator
```

### 16.4.4 概念、改进和模型

```cpp
// 概念：迭代器要求
// 模型：实现概念的类型
// 改进：模板参数

template <typename InputIterator, typename T>
InputIterator find(InputIterator first, InputIterator last, const T& value) {
    while (first != last) {
        if (*first == value) return first;
        ++first;
    }
    return last;
}
```

### 16.4.5 容器种类

| 容器 | 特点 |
|------|------|
| 序列容器 | `vector`, `list`, `deque`, `array`, `forward_list` |
| 关联容器 | `set`, `map`, `multiset`, `multimap` |
| 无序关联容器 | `unordered_set`, `unordered_map`, `unordered_multiset`, `unordered_multimap` |
| 容器适配器 | `stack`, `queue`, `priority_queue` |

### 16.4.6 关联容器

```cpp
#include <set>
#include <map>

// set：有序集合
set<int> nums = {3, 1, 4, 1, 5};
nums.insert(2);
nums.erase(4);
bool found = nums.count(3);  // 查找

// map：有序键值对
map<string, int> ages;
ages["Alice"] = 25;
ages["Bob"] = 30;
int aliceAge = ages["Alice"];

// multiset/multimap：允许重复
multiset<int> multiNums = {1, 1, 2, 2, 3};
multimap<string, int> multiAges;
```

### 16.4.7 无序关联容器（C++11）

```cpp
#include <unordered_set>
#include <unordered_map>

// 无序集合（哈希表）
unordered_set<int> nums = {1, 2, 3, 4, 5};
nums.insert(6);

// 无序映射
unordered_map<string, int> ages;
ages["Alice"] = 25;
```

---

## 16.5 函数对象

### 16.5.1 函数符概念

```cpp
// 函数对象（仿函数）
class Adder {
private:
    int value;

public:
    Adder(int v) : value(v) {}
    int operator()(int x) const {
        return x + value;
    }
};

Adder add5(5);
cout << add5(10) << endl;  // 15
```

### 16.5.2 预定义的函数符

```cpp
#include <functional>

// 算术函数符
plus<int> add;
minus<int> sub;
multiplies<int> mul;
divides<int> div;
modulus<int> mod;
negate<int> neg;

cout << add(3, 5) << endl;    // 8
cout << negate(5) << endl;    // -5

// 关系函数符
greater<int> gt;
less<int> lt;
equal_to<int> eq;

cout << gt(5, 3) << endl;     // true
```

### 16.5.3 自适应函数符和函数适配器

```cpp
#include <functional>
#include <algorithm>
#include <vector>

vector<int> nums = {1, 2, 3, 4, 5};

// bind绑定参数
auto add5 = bind(plus<int>(), _1, 5);
cout << add5(10) << endl;  // 15

// 使用函数符进行排序
sort(nums.begin(), nums.end(), greater<int>());
```

---

## 16.6 算法

### 16.6.1 算法组

| 算法组 | 示例 |
|--------|------|
| 非修改式 | `find`, `count`, `equal` |
| 修改式 | `copy`, `replace`, `transform` |
| 排序 | `sort`, `stable_sort`, `partial_sort` |
| 数值 | `accumulate`, `inner_product` |

### 16.6.2 算法的通用特征

```cpp
#include <algorithm>
#include <vector>

vector<int> nums = {5, 3, 1, 4, 2};

// 非修改式
auto it = find(nums.begin(), nums.end(), 3);
int count = count_if(nums.begin(), nums.end(), 
    [](int x) { return x > 2; });

// 修改式
replace(nums.begin(), nums.end(), 3, 30);
transform(nums.begin(), nums.end(), nums.begin(),
    [](int x) { return x * 2; });

// 排序
sort(nums.begin(), nums.end());
sort(nums.begin(), nums.end(), greater<int>());
```

### 16.6.3 STL和string类

```cpp
#include <string>
#include <algorithm>

string str = "Hello World";

// 使用STL算法
transform(str.begin(), str.end(), str.begin(), ::toupper);
sort(str.begin(), str.end());
```

### 16.6.4 函数和容器方法

```cpp
vector<int> nums = {1, 2, 3, 4, 5};

// 使用成员函数
nums.erase(remove(nums.begin(), nums.end(), 3), nums.end());

// 使用STL算法
auto it = remove_if(nums.begin(), nums.end(),
    [](int x) { return x % 2 == 0; });
nums.erase(it, nums.end());
```

### 16.6.5 使用STL

```cpp
#include <vector>
#include <algorithm>
#include <numeric>

int main() {
    vector<int> nums = {5, 3, 1, 4, 2};
    
    // 排序
    sort(nums.begin(), nums.end());
    
    // 求和
    int sum = accumulate(nums.begin(), nums.end(), 0);
    
    // 查找
    auto it = find(nums.begin(), nums.end(), 3);
    
    // 反转
    reverse(nums.begin(), nums.end());
    
    return 0;
}
```

---

## 16.7 其他库

### 16.7.1 vector、valarray和array

| 类型 | 特点 |
|------|------|
| `vector` | 通用容器，支持迭代器 |
| `valarray` | 数值数组，支持数学运算 |
| `array` | 固定大小数组（C++11）|

```cpp
#include <array>
#include <valarray>

array<int, 5> arr = {1, 2, 3, 4, 5};
valarray<double> vals = {1.1, 2.2, 3.3};

// valarray的数学运算
valarray<double> result = vals * 2.0;
double sum = vals.sum();
```

### 16.7.2 模板initializer_list（C++11）

```cpp
#include <initializer_list>

void func(std::initializer_list<int> list) {
    for (auto x : list) {
        cout << x << " ";
    }
}

func({1, 2, 3, 4, 5});
```

### 16.7.3 使用initializer_list

```cpp
class MyClass {
private:
    vector<int> data;

public:
    MyClass(initializer_list<int> list) : data(list) {}
    
    void print() {
        for (auto x : data) {
            cout << x << " ";
        }
    }
};

MyClass obj = {1, 2, 3, 4, 5};
obj.print();
```

---

## 16.8 总结

- `string`类提供字符串操作
- 智能指针管理动态内存
- STL提供容器、迭代器和算法
- 泛型编程使用模板编写通用代码
- 函数对象和Lambda表达式用于回调

---

## 16.9 复习题

1. `unique_ptr`和`shared_ptr`有什么区别？
2. STL容器有哪些种类？
3. 迭代器的作用是什么？
4. 如何使用STL算法？

---

## 16.10 编程练习

1. 使用vector和算法实现学生成绩管理
2. 使用map实现单词频率统计
3. 实现一个自定义的函数对象

