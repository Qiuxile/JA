# 附录G 标准模板库方法和函数


## 本章概述

本附录列出STL（标准模板库）中容器的方法和算法函数，包括C++11新增的功能。

---

## G.1 C++11新增的容器

| 容器 | 说明 |
|------|------|
| `forward_list` | 单向链表 |
| `unordered_set` | 无序集合 |
| `unordered_multiset` | 无序多重集合 |
| `unordered_map` | 无序映射 |
| `unordered_multimap` | 无序多重映射 |
| `array` | 固定大小数组 |

C++11对容器的改进：
- `emplace`系列方法（就地构造）
- `shrink_to_fit()`方法
- `data()`方法
- 移动语义支持

---

## G.2 所有容器共有的成员

| 方法 | 说明 |
|------|------|
| `begin()` | 返回指向第一个元素的迭代器 |
| `end()` | 返回指向末尾的迭代器 |
| `rbegin()` | 返回反向迭代器 |
| `rend()` | 返回反向末尾迭代器 |
| `cbegin()` | 返回const迭代器（C++11）|
| `cend()` | 返回const末尾迭代器（C++11）|
| `size()` | 返回元素个数 |
| `max_size()` | 返回最大可能大小 |
| `empty()` | 检查是否为空 |
| `swap()` | 交换两个容器 |
| `clear()` | 清空容器 |

---

## G.3 序列容器

### vector

| 方法 | 说明 |
|------|------|
| `at()` | 带边界检查的访问 |
| `operator[]` | 访问元素 |
| `front()` / `back()` | 第一个/最后一个元素 |
| `data()` | 返回底层数组指针 |
| `push_back()` / `pop_back()` | 末尾添加/删除 |
| `insert()` / `erase()` | 插入/删除 |
| `emplace()` / `emplace_back()` | 就地构造（C++11）|
| `resize()` / `reserve()` | 调整大小/预留空间 |
| `shrink_to_fit()` | 减少容量（C++11）|

### list

| 方法 | 说明 |
|------|------|
| `push_front()` / `pop_front()` | 开头添加/删除 |
| `push_back()` / `pop_back()` | 末尾添加/删除 |
| `insert()` / `erase()` | 插入/删除 |
| `splice()` | 拼接 |
| `remove()` / `remove_if()` | 删除指定值/满足条件的 |
| `unique()` | 删除重复 |
| `sort()` / `merge()` | 排序/合并 |
| `reverse()` | 反转 |

### deque

| 方法 | 说明 |
|------|------|
| `push_front()` / `pop_front()` | 开头添加/删除 |
| `push_back()` / `pop_back()` | 末尾添加/删除 |
| `insert()` / `erase()` | 插入/删除 |
| `at()` / `operator[]` | 访问元素 |

---

## G.4 关联容器

### set/multiset

| 方法 | 说明 |
|------|------|
| `insert()` / `erase()` | 插入/删除 |
| `find()` / `count()` | 查找/计数 |
| `lower_bound()` / `upper_bound()` | 下界/上界 |
| `equal_range()` | 相等范围 |

### map/multimap

| 方法 | 说明 |
|------|------|
| `insert()` / `erase()` | 插入/删除 |
| `find()` / `count()` | 查找/计数 |
| `operator[]` / `at()` | 访问 |
| `lower_bound()` / `upper_bound()` | 下界/上界 |

### 无序关联容器（C++11）

| 方法 | 说明 |
|------|------|
| `insert()` / `erase()` | 插入/删除 |
| `find()` / `count()` | 查找/计数 |
| `bucket_count()` | 桶数量 |
| `load_factor()` | 负载因子 |
| `rehash()` | 重新哈希 |

---

## G.5 STL算法

### 非修改式序列操作

| 函数 | 说明 |
|------|------|
| `for_each()` | 对每个元素执行操作 |
| `find()` / `find_if()` | 查找/条件查找 |
| `count()` / `count_if()` | 计数/条件计数 |
| `mismatch()` | 查找不同 |
| `equal()` | 相等比较 |
| `search()` | 查找子序列 |

### 修改式序列操作

| 函数 | 说明 |
|------|------|
| `copy()` / `copy_if()` | 复制/条件复制 |
| `move()` / `move_backward()` | 移动/反向移动 |
| `swap()` / `swap_ranges()` | 交换 |
| `transform()` | 转换 |
| `replace()` / `replace_if()` | 替换/条件替换 |
| `fill()` / `fill_n()` | 填充 |
| `generate()` / `generate_n()` | 生成 |
| `remove()` / `remove_if()` | 删除/条件删除 |
| `unique()` / `unique_copy()` | 去重 |
| `reverse()` / `rotate()` | 反转/旋转 |
| `shuffle()` | 打乱（C++11）|

### 排序和相关操作

| 函数 | 说明 |
|------|------|
| `sort()` / `stable_sort()` | 排序/稳定排序 |
| `partial_sort()` | 部分排序 |
| `nth_element()` | 第n个元素 |
| `lower_bound()` / `upper_bound()` | 下界/上界 |
| `binary_search()` | 二分查找 |
| `merge()` / `inplace_merge()` | 合并 |
| `set_union()` / `set_intersection()` | 集合并/交 |
| `set_difference()` | 集合差 |
| `make_heap()` / `sort_heap()` | 堆操作 |
| `next_permutation()` | 下一个排列 |

### 数值运算

| 函数 | 说明 |
|------|------|
| `accumulate()` | 累积 |
| `inner_product()` | 内积 |
| `partial_sum()` | 部分和 |
| `adjacent_difference()` | 相邻差 |
| `iota()` | 填充序列（C++11）|

