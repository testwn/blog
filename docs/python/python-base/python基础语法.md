---
title: python基础语法
date: 2023-1-8 00:00:01
---

# python基础语法-变量以及变量类型的常用操作

## 变量

### 变量的定义以及目的

定义：变量就是可变的量，是存放数据值的容器。

目的：是为了让计算机能够像人一样去将一个事物的状态记忆下来，以后可以取出来进行使用。

### 变量的命名规则

1、变量名只能包含字母，数字和下划线；

2、变量名不能包含空格，但能使用下划线来分割其中的单词；

3、变量名不能以数字开头；

4、变量名区分大小写，比如a和A是两个不同的变量；

5、不能将python关键字和函数名做变量名；

6、变量名应既短又具有描述性；

7、慎用小写字母l和大写字母O，因为它们可能被堪称数字1和0；

8、驼峰命名。

### 变量的销毁

在python中，我们一般无需手动的去销毁一个变量，python的垃圾回收机制会帮我们处理掉那些不再使用的变量，如果我们想刻意去销毁删除某个变量，刻意使用del关键字

```bash
del name
```

销毁后，这个变量就像没有定义过一样，再使用它的话就会产生异常

## 字符串常用操作

字符串作用：记录描述性质的数据

定义：字符串就是一系列字符，在python中，用引号括起来的都是字符串，其中的引号可以是单引号，也可以是双引号

### 1、添加空白以及去除空白字符

先了解一下什么是空白字符，空白字符包括空格、换行（\n）、制表符（\t），比如下面这行代码

1.1 使用制表符或换行符来添加空白。添加制表符，使用字符组合\t。添加换行符，使用字符组合\n。也可以混合使用，使用字符组合\t\n。例如：

```python
# 使用制表符添加空白
print('Weinian\tis\teating!')   # 打印Weinian is eating!
```

1.2 删除空白字符

删除开头的空白字符

```python
# 删除开头的空白字符
name = '  weinian'
print(name.lstrip())   # 打印 weinian
```

删除末尾的空白字符

```python
# 删除末尾的空白字符
name = 'weinian ' 
print(name.rstrip())   # 打印 weinian
```

删除首位的空白字符

```python
# 删除首尾的空白字符
name = ' weinian '
print(name.strip())  # 打印 weinian
```

使用`replace()`替换掉所有空白字符。此方法能删除字符串中所有的空白。

```python
# 使用replace()替换掉所有空白字符
name = ' w e i n i a n '
print(name.replace(' ', ''))  # 打印 weinian
```

先用`split()`方法将字符串按空格分割，再用`join()`方法将字符串拼接起来。此方法能删除字符串中所有的空白。

```python
# 先用split()方法将字符串按空格分割，再用join()方法将字符串拼接起来
mystr = ' weinian is sleeping ! '
newstr = mystr.split()
print(''.join(newstr))   # 打印 weinianissleeping!
```

### 2、大小写操作

2.1 对于字符串，可执行的最简单的操作之一就是修改其中单词的大小，列如：

```python
# 修改字符串中的单词的大小写的操作
name = 'weinian'
# 将名字的首字母改成大写
print(name.title())   # 打印Weinian
```

在这个示例中，变量name指向小写的字符串`“weinian”`。在函数调用print()中，方法`title()`出现在这个变量的后面，方法是Python克对数据执行的操作，在`name.title()`，name后面的句点（.）让Python对变量那么执行方法title()指定的操作。

每个方法后面都跟着一对圆括号，这是因为方法通常需要额外的信息来完成其工作。这种信息是在圆括号内提供的，函数`title()`不需要额外的信息，因此它后面的圆括号是空的

2.2 将字符串改为全部大写，例如：

```python
# 定义一个变量
name = 'weinian'
# 将字符串转换为全部大写
print(name.upper())    # 打印WEINIAN
```

2.3 将字符串改为全部小写，例如：

```python
# 定义一个变量
name = 'weinian'
# 将字符串转换为全部小写
print(name.lower())    # 打印weinian
```

储存数据时，方法`lower()`很有用，很多时候你无法依靠用户来提供正确的大小写，因此需要将字符串先转换为小写，再储存他们。以后需要显示这些信息时，再将其转换为最适合的大小写。

### 3、字符串判断

3.1 `isalpha`判断字符串是否所有字符是字母。

```python
# isalpha判断字符串是否所有字符是字母。
name = 'weinian'
print(name.isalpha())
```

3.2 `isdigit`判断字符串是否所有字符是整数。

```python
# isdigit判断字符串是否所有字符是整数。
num = '12345'
print(num.isdigit())
```

3.3 `isalnum`判断字符串是否所有字符是字母或数字

```python
# isalnum判断字符串是否所有字符是字母或数字
str = '123wei'
print(str.isalnum())
```

3.4 `isspace`判断字符串是否所有字符是空白符

```python
# isspace判断字符串是否所有字符是空白符
str1 = '\n\t'
print(str1.isspace())
```

3.5 `islower`判断字符串是否都是小写

```python
# islower判断字符串是否都是小写
str2 = 'weinian'
print(str2.islower())
```

3.6 `isupper`判断字符串是否都为大写

```python
# isupper判断字符串是否都为大写
str3 = 'WEINIAN'
print(str3.isupper())
```

3.7 `istitle`判断字符串是否是标题

```python
# istitle判断字符串是否是标题.注意这里设置变量的值的时候，单词首字母必须为大写，若为小写，最后判断为False
str4 = 'Weinian'
print(str4.istitle())
```

3.8 `startswith`判断字符串是否从某个字符开始

```python
# startswith判断字符串是否从某个字符开始
num2 = '15222227777'
print(num2.startswith('1'))
```

3.9 `endswith`判断字符是否以某个字符结尾

```python
# endswith判断字符是否以某个字符结尾
num3 = '123168'
print(num3.endswith('168'))
```

### 4、查找与替换

### 5、字符串长度

### 6、字符串的格式化输出

```bash
# 占位符
%d：整数占位符
%f：浮点数占位符
%.f：指定精度的浮点数占位符
%s：字符串占位符
%%：输出百分号
```

如果给%d传入一个浮点数，那么它会自动将它转换成整数

### 7、从键盘输入

### 8、索引与切片

## 元组（tuple）常用操作

## 列表（list）常用操作

## 字典（dict）常用操作

## 集合（set）常用操作

## 列表，元组，字典，集合的区别

### 







