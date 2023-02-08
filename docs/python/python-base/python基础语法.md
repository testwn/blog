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

## 序列详解

序列的定义：指的是一块可存放多个值的连续内存空间，这些值按一定顺序排列，可通过每个值所在位置的编号（称为索引）访问它们。

在Python中，序列类型包括字符串，列表，元组，集合和字典，这些序列支持一下几种操作，但是比较特殊的是，字典和集合不支持索引，切片，相加和相乘操作

### 序列索引

### 序列切片

```python
# 切片string[起始下标:终止下标：步长]，顾头不顾尾，查找字符串中的一段值，用于截取某些字符
name = 'weinian'   

# 输出weini
print(name[0: 5])

# 输出下标0至下标为5，并且步长为2的值。输出wii
print(name[0: 5: 2])

# 输出字符串全部下标的值，并且步长为2,等价于name[0: 7: 2]。输出wiin。以下两种输出方式都可。
print(name[0:: 2])
print(name[0: len(name): 2])

# 倒序输出，步长为负数，等价name[6:: -1],输出nainiew。这里需要注意的是，在python中字符串打印超出长度不会报错，但是在java中就会报错，具体原理这里并未深究，可能是python自己的特色。
print(name[:: -1])
print(name[len(name)-1:: -1])
print(name[7:: -1])
print(name[6:: -1])
print(name[5:: -1])
print(name[8:: -1])
```

### 序列相加

### 序列相乘

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

### 4、查找`find()和index()`

```python
# string.find(sub_string)和string.index(sub_string) 查找字符串sub_string是否在string中的正序下标，find方法找不到时返回-1；index方法找不到时报错。
msg = 'aabbccssdd'
# findzai在查找时，如果出现不同下标相同的值的时候，返回第一个值出现的下标
print(msg.find('a'))  # 0
print(msg.find('x'))  # 1
print(msg.index('x'))  # ValueError: substring not found
```

### 5、字符串长度`len()`

```python
# 字符串长度len()
name = 'weinian'
print(len(name))
```

### 6、字符串的格式化输出

```bash
# 占位符
%d：整数占位符
%f：浮点数占位符
%.f：指定精度的浮点数占位符
%s：字符串占位符
%%：输出百分号
```

```python
# 字符串格式化输出format函数。除%号之外，使用format格式化，可以多次服用同一个值
# 她的名字叫薇念，网址为testwn.com
print('我的名字是{0}，网址是{1}'.format('薇念', 'testwn.com'))

```

### 8、判断字符串的包含关系`in`和`not in`

```python
site_name = 'weinian blog'
# in判断，当包含时返回True，结果为True
print('weinian' in site_name)
# not in判断，当不包含时返回True，结果为False
print('weinian' not in site_name)
```

### 9、字符串拼接`join()`

```python
# 字符串拼接
str1 = '眼下的生活'
str2 = '不是没有快乐'
str3 = '只是所有的快乐都暗含着一层谨慎的底色。'
print(','.join([str1, str2, str3]))
```

### 10、删除字符串`del()`

```python
# 删除字符串，后续不可以再使用该变量，否则报错NameError: name 'name' is not defined
name = 'weinian'
print(name)
del name
print(name)
```

### 11、统计一个字符串出现的次数`count()`

```python
# 统计字符串出现的次数
msg = 'aabbccssdd'
print(msg.count('a'))
```

## 元组（tuple）常用操作

元组的定义：元组是Python中另一个重要的序列结构，和列表类似，元组也是由一系列按特定顺序排序的元素组成

元组和列表的不同之处：列表的元素是可以更改的，包括修改元素值，删除和插入元素，所以列表是可变序列。而元组一旦被创建，它的元素就不可更改了，所以元组是不可变序列。

### 创建元组

### 访问元组（通过索引访问）

### 修改元组（创建一个新的元组去代替旧的原则）

### 删除元组

### 元组函数

1、join

2、count

3、in

4、index

5、del





## 列表（list）常用操作

定义：列表可以理解为可变的原则，它的使用方式跟原则差不多，区别就是列表可以动态的增加，修改，删除元素。

### 创建列表

```py
# 定义一个空列表
lst = []
lst1 = list()
# 定义一个带有初始值的列表
lst2 = [1, 2, 3]
lst3 = ['a', 1, 2, 'b']
lst4 = list(range(5))
lst5 = list("abc")
lst6 = list((1, 2, 3))
```

### 列表增、删、改元素操作

```python
# 定义一个列表
lst = ['a', 'b']
# 在列表中修改一个元素
lst[-1] = 'c'
print(lst)

# 在列表中添加一个元素
lst.append('b')
print(lst)

# 删除列表中的元素
del lst[1]
print(lst)
```

### 列表函数

1、append函数

```python
# 列表函数append()
lst = ['a', 'b']
# 在末尾追加一个元素。输出['a', 'b', 'c']
lst.append('c')
print(lst)
# 在末尾追加一个元组，整个元组被当成一个元素。输出['a', 'b', 'c', ('d', 'e', 'f')]
a = ('d', 'e', 'f')
lst.append(a)
print(lst)
# 在末尾追加一个列表.输出['a', 'b', 'c', ('d', 'e', 'f'), ['g', 'h', 'i']]
b = ['g', 'h', 'i']
lst.append(b)
print(lst)
```

2、insert函数

在列表中间某个位置（任意位置）插入元素

语法表达式如下：

```python
listname.insert(index , obj)
```

其中，index 表示指定位置的索引值。insert() 会将 obj 插入到 listname 列表第 index 个元素的位置。

当插入列表或者元祖时，insert() 也会将它们视为一个整体，作为一个元素插入到列表中，这一点和 append() 是一样的。

```python
lst = ['a', 'b']
# 插入一个元素。输出['a', 'c', 'b']
lst.insert(-1, 'c')
print(lst)

# 插入元组，整个元组被当成一个元素。输出['a', 'c', 'weinian', 'b']
wn = ('weinian')
lst.insert(-1, wn)
print(lst)

# 插入列表，整个列表被当成一个元素。输出['a', 'c', 'weinian', ['weiwei'], 'b']
wn1 = ['weiwei']
lst.insert(-1, wn1)
print(lst)

# 插入字符串，整个字符串被当成一个元素。['a', 'c', 'weinian', ['weiwei'], 'haha', 'b']
lst.insert(-1, 'haha')
print(lst)
```

3、extend函数

在列表末尾插入元素。与append函数有点类似，区别是append函数每次只能添加一个元素，而extend可以添加一组元素

```python
# 定义一个空列表
lst = []
lst.extend(range(5))
print(lst)  # [0, 1, 2, 3, 4]
lst.extend([5, 6, 7])
print(lst)  # [0, 1, 2, 3, 4, 5, 6, 7]
```

4、pop函数

每次调用pop函数会从列表中弹出一个元素，接着上面的lst操作。如果想弹出其他位置的元素，可以传一个位置参数给pop

```python
```

5、remove函数

删除指定的内容的元素。remove函数会从左至右找到与指定的值想匹配的第一个元素，并将它删除

```python
lst = [1, 2, 1, 'a', 'b', 'c']
lst.remove('a')
print(lst)   # lst的值为[1, 2, 1, 'b', 'c']
lst.remove(1)   # 注意这里的1是元素值，不是索引
print(lst)   # lst的值为[2, 1, 'b', 'c']
```

6、clear函数

清空列表内的所有元素

```python
lst = [1,2,3,4]
lst.clear()
print(lst) # 结果为[]
```

7、reverse函数

将整个列表反转

```python
# 定义一个空列表
lst = []
lst.extend(range(7))
print(lst)  # [0, 1, 2, 3, 4, 5, 6]
# 将上面列表反转
lst.reverse()
print(lst)
```

8、sort函数

按照一定的规则将列表中的元素重新排序，对于数值，默认按从小到大的顺序排序，如果这里想要让列表从大到小排序，可以加上reverse参数。

```python
# 定义一个列表
lst = [3, 5, 2, 6, 7, 8, 0, 1, 4]
lst.sort()
print(lst)   # 输出[0, 1, 2, 3, 4, 5, 6, 7, 8]
# 如果想让列表从大到小排列，可以加上reverse参数
lst.sort(reverse=True)
print(lst)
```

9、copy函数

复制原有列表为一个新的列表

```python
lst1 = [1, 2, 3]
lst2 = lst1.copy()
lst1.append(4)
print(lst1) # [1, 2, 3, 4]
print(lst2) # [1, 2, 3]
```

10、del，pop，remove的区别

del：删除指定下标索引的元素

remove：删除指定内容的元素

pop：删除列表中的一个元素

## 字典（dict）常用操作

## 集合（set）常用操作

## 列表，元组，字典，集合的区别

1、列表，元组是依靠索引取值；字典通过key来取值；集合通常用来取关系集合。

2、列表，字典中的值可以修改，列表通过下标`list[下标] = 值`来修改值；字典通过`dict[key] = 值`来修改对应的值；元组不能修改，只能读；集合通常用来取关系集合不会单独读写。

3、总结来说，通常还会有以下分类

数值类型（整型，浮点型）

序列类型，可以按照一定顺序排列的数据类型（列表，元组，字符串）

散列类型，没有顺序，不可以通过下标来取值（字典，集合）

### 







