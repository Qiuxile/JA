# C++ STL

## 容器

### 向量 (vector)

```cpp
#include <vector>
#include <iostream>
using namespace std;

int main() {
    vector<int> vec;
    
    // 添加元素
    vec.push_back(10);
    vec.push_back(20);
    vec.push_back(30);
    
    // 访问元素
    cout << vec[0] << endl;    // 10
    cout << vec.at(1) << endl; // 20
    
    // 遍历
    for (int i = 0; i < vec.size(); i++) {
        cout << vec[i] << " ";
    }
    
    // 使用迭代器遍历
    for (auto it = vec.begin(); it != vec.end(); it++) {
        cout << *it << " ";
    }
    
    // 删除元素
    vec.pop_back();
    
    return 0;
}
```

### 列表 (list)

```cpp
#include <list>

int main() {
    list<int> lst = {1, 2, 3, 4, 5};
    
    // 在头部添加
    lst.push_front(0);
    
    // 在尾部添加
    lst.push_back(6);
    
    // 在指定位置插入
    auto it = lst.begin();
    advance(it, 3);
    lst.insert(it, 10);
    
    // 删除元素
    lst.remove(3);
    
    // 排序
    lst.sort();
    
    return 0;
}
```

### 映射 (map)

```cpp
#include <map>
#include <string>

int main() {
    map<string, int> myMap;
    
    // 添加键值对
    myMap["apple"] = 10;
    myMap["banana"] = 5;
    myMap["cherry"] = 8;
    
    // 访问
    cout << myMap["apple"] << endl;  // 10
    
    // 检查键是否存在
    if (myMap.find("orange") != myMap.end()) {
        cout << "Found" << endl;
    }
    
    // 遍历
    for (auto pair : myMap) {
        cout << pair.first << ": " << pair.second << endl;
    }
    
    return 0;
}
```

### 集合 (set)

```cpp
#include <set>

int main() {
    set<int> mySet = {3, 1, 4, 1, 5, 9};
    
    // 添加元素（自动去重）
    mySet.insert(2);
    
    // 检查元素是否存在
    if (mySet.count(3)) {
        cout << "3 exists" << endl;
    }
    
    // 删除元素
    mySet.erase(1);
    
    // 遍历（自动排序）
    for (int num : mySet) {
        cout << num << " ";
    }
    
    return 0;
}
```

## 算法

```cpp
#include <algorithm>
#include <vector>

int main() {
    vector<int> vec = {3, 1, 4, 1, 5, 9, 2, 6};
    
    // 排序
    sort(vec.begin(), vec.end());
    
    // 查找
    auto it = find(vec.begin(), vec.end(), 5);
    if (it != vec.end()) {
        cout << "Found at index: " << it - vec.begin() << endl;
    }
    
    // 反转
    reverse(vec.begin(), vec.end());
    
    // 求和
    int sum = accumulate(vec.begin(), vec.end(), 0);
    
    // 计数
    int count = count(vec.begin(), vec.end(), 1);
    
    // 最大值
    int max_val = *max_element(vec.begin(), vec.end());
    
    return 0;
}
```

## 迭代器

```cpp
#include <vector>

int main() {
    vector<int> vec = {1, 2, 3, 4, 5};
    
    // 正向迭代器
    vector<int>::iterator it;
    for (it = vec.begin(); it != vec.end(); ++it) {
        cout << *it << " ";
    }
    
    // 反向迭代器
    for (auto it = vec.rbegin(); it != vec.rend(); ++it) {
        cout << *it << " ";
    }
    
    return 0;
}
```

## 智能指针

### unique_ptr

```cpp
#include <memory>

int main() {
    unique_ptr<int> ptr(new int(42));
    cout << *ptr << endl;  // 42
    
    // 自动释放内存
    return 0;
}
```

### shared_ptr

```cpp
#include <memory>

int main() {
    shared_ptr<int> ptr1 = make_shared<int>(10);
    shared_ptr<int> ptr2 = ptr1;  // 共享所有权
    
    cout << ptr1.use_count() << endl;  // 2
    
    return 0;
}
```

### weak_ptr

```cpp
#include <memory>

int main() {
    shared_ptr<int> shared = make_shared<int>(42);
    weak_ptr<int> weak = shared;
    
    // 检查是否过期
    if (auto ptr = weak.lock()) {
        cout << *ptr << endl;
    }
    
    return 0;
}
```

