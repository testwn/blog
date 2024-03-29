---
title: Python 迭代器
date: 2023-05-16 00:00:00
---

# 二、Python 迭代器 #

上面简单的介绍了一下迭代，迭代是 Python 最强大的功能之一，是访问集合元素的一种方式。现在正式进入主题：迭代器，迭代器是一个可以记住遍历的位置的对象。

迭代器对象从集合的第一个元素开始访问，直到所有的元素被访问完结束。

迭代器只能往前不会后退。

迭代器有两个基本的方法：iter() 和 next(),且字符串，列表或元组对象都可用于创建迭代器，迭代器对象可以使用常规 for 语句进行遍历，也可以使用 next() 函数来遍历。

具体的实例：

```python
# 1、字符创创建迭代器对象
str1 = 'liangdianshui'
iter1 = iter ( str1 )

# 2、list对象创建迭代器
list1 = [1,2,3,4]
iter2 = iter ( list1 )

# 3、tuple(元祖) 对象创建迭代器
tuple1 = ( 1,2,3,4 )
iter3 = iter ( tuple1 )

# for 循环遍历迭代器对象
for x in iter1 :
    print ( x , end = ' ' )

print('\n------------------------')
 
# next() 函数遍历迭代器
while True :
    try :
        print ( next ( iter3 ) )
    except StopIteration :
        break

```

最后输出的结果：

```txt
l i a n g d i a n s h u i 
------------------------
1
2
3
4
```