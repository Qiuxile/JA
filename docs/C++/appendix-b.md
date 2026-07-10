# 附录B C++保留字



## 本章概述

本附录列出C++的所有保留字（关键字），包括C++11新增的关键字，以及替代标记和有特殊含义的标识符。


## B.1 C++关键字

| 关键字 | 说明 | 关键字 | 说明 |
|--------|------|--------|------|
| `alignas` | 对齐说明符(C++11) | `alignof` | 对齐运算符(C++11) |
| `and` | 逻辑与(&&) | `and_eq` | 按位与(&=) |
| `asm` | 汇编语句 | `auto` | 自动类型推断(C++11) |
| `bitand` | 按位与(&) | `bitor` | 按位或(\|) |
| `bool` | 布尔类型 | `break` | 跳出循环 |
| `case` | switch分支 | `catch` | 捕获异常 |
| `char` | 字符类型 | `char16_t` | Unicode字符(C++11) |
| `char32_t` | Unicode字符(C++11) | `class` | 类声明 |
| `compl` | 按位取反(~) | `concept` | 概念(C++20) |
| `const` | 常量限定 | `constexpr` | 常量表达式(C++11) |
| `const_cast` | 常量转换 | `continue` | 继续循环 |
| `decltype` | 类型推断(C++11) | `default` | 默认 |
| `delete` | 释放内存 | `do` | do-while循环 |
| `double` | 双精度浮点 | `dynamic_cast` | 动态转换 |
| `else` | 条件分支 | `enum` | 枚举 |
| `explicit` | 显式构造 | `export` | 导出模板 |
| `extern` | 外部声明 | `false` | 布尔假 |
| `float` | 单精度浮点 | `for` | 循环 |
| `friend` | 友元 | `goto` | 跳转 |
| `if` | 条件 | `inline` | 内联 |
| `int` | 整型 | `long` | 长整型 |
| `mutable` | 可变成员 | `namespace` | 命名空间 |
| `new` | 分配内存 | `noexcept` | 无异常(C++11) |
| `nullptr` | 空指针(C++11) | `operator` | 运算符重载 |
| `private` | 私有访问 | `protected` | 保护访问 |
| `public` | 公有访问 | `register` | 寄存器存储(弃用) |
| `reinterpret_cast` | 重新解释转换 | `return` | 返回 |
| `short` | 短整型 | `signed` | 有符号 |
| `sizeof` | 大小 | `static` | 静态 |
| `static_assert` | 静态断言(C++11) | `static_cast` | 静态转换 |
| `struct` | 结构体 | `switch` | 多分支 |
| `template` | 模板 | `this` | this指针 |
| `throw` | 抛出异常 | `true` | 布尔真 |
| `try` | 尝试异常 | `typedef` | 类型别名 |
| `typeid` | 类型信息 | `typename` | 类型名 |
| `union` | 共用体 | `unsigned` | 无符号 |
| `using` | 使用 | `virtual` | 虚函数 |
| `void` | 空类型 | `volatile` | 易变 |
| `wchar_t` | 宽字符 | `while` | 循环 |
| `xor` | 按位异或(^) | `xor_eq` | 按位异或(^=) |

---

## B.2 替代标记

| 替代标记 | 运算符 | 说明 |
|----------|--------|------|
| `and` | `&&` | 逻辑与 |
| `and_eq` | `&=` | 按位与赋值 |
| `bitand` | `&` | 按位与 |
| `bitor` | `\|` | 按位或 |
| `compl` | `~` | 按位取反 |
| `not` | `!` | 逻辑非 |
| `not_eq` | `!=` | 不等于 |
| `or` | `\|\|` | 逻辑或 |
| `or_eq` | `\|=` | 按位或赋值 |
| `xor` | `^` | 按位异或 |
| `xor_eq` | `^=` | 按位异或赋值 |

---

## B.3 有特殊含义的标识符

| 标识符 | 用途 |
|--------|------|
| `_Pragma` | 编译器指令 |
| `__func__` | 当前函数名(C++11) |
| `__LINE__` | 当前行号 |
| `__FILE__` | 当前文件名 |
| `__DATE__` | 编译日期 |
| `__TIME__` | 编译时间 |
| `__cplusplus` | C++版本号 |

---

## B.4 保留名称规则

以下名称被保留给C++标准库：
- 以下划线开头的标识符
- 以下划线后跟大写字母开头的标识符
- 在全局命名空间中的以下划线开头的标识符

