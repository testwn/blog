---
title: Sys模块详解
date: 2023-02-15 00:00:01
---

# Sys模块详解

## 简介

sys模块是与Python解析器交互的一个接口。sys模块提供了许多函数和变量来处理python运行时环境的不同部分

## 应用场景

## Sys模块相关函数操作

1、退出程序`sys.exit()`

```python
# 导包
import sys

num = 7
if num <= 7:
    sys.exit(8)
# 退出python执行程序，下面的代码将不会被执行，如同shell中的exit一样
# sys.exit(n)退出城市，正常退出exit(0)
```

2、`sys.version()`获取python解析器程序的版本信息

```python
import sys
print(sys.version)
```

3、`sys.platfrom()`返回操作系统平台名称

```python
import sys
print(sys.platform)
```

4、`sys.stdin.readline()`与`input`

```python
import sys
# sys.stdin.readline() 相当于input，区别在于input不会读入'\n'
aa = sys.stdin.readline()       # 输入数据多一个'\n'
bb = input('请输入：')
print(len(aa))
print(len(bb))

# sys.stdin.readline()方式与input方式的区别是：len(aa)元素中多了一个‘\n’换行符。即sys.stdin.readline()方式会读入换行符。

# 还有一个区别在于，input()里面可以直接传入文本，然后打印出来。
```

5、`sys.stdout.write()`
6、`sys.getdefaultencoding()`用来设置当前默认的字符编码
7、`sys.argv`命令行参数List，第一个元素是程序本身路径

```python
sys.argv[0] 表示程序自身
sys.argv[1] 表示程序的第一个参数
```



