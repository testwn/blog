---
title: 使用 `type()` 动态创建类
date: 2023-05-16 00:00:00
---

# 二、使用 `type()` 动态创建类 #

因为类也是对象，所以我们可以在程序运行的时候创建类。

Python 是动态语言。

**动态语言和静态语言最大的不同，就是函数和类的定义，不是编译时定义的，而是运行时动态创建的。**

在之前，我们先了了解下 `type()` 函数。


首先我们新建一个 `hello.py` 的模块，然后定义一个 Hello 的 class ，

```python
class Hello(object):
    def hello(self, name='Py'):
        print('Hello,', name)
```

然后在另一个模块中引用 hello 模块，并输出相应的信息。

其中 `type()` 函数的作用是可以查看一个类型和变量的类型。

```python
#!/usr/bin/env python3
# -*- coding: UTF-8 -*-

from com.twowater.hello import Hello

h = Hello()
h.hello()

print(type(Hello))
print(type(h))

```

输出的结果是怎样的呢？

```
Hello, Py
<class 'type'>
<class 'com.twowater.hello.Hello'>
```

上面也提到过，`type()` 函数可以查看一个类型或变量的类型，`Hello` 是一个 `class` ，它的类型就是 `type` ，而 `h` 是一个实例，它的类型就是 `com.twowater.hello.Hello`。

前面的 `com.twowater` 是我的包名，`hello` 模块在该包名下。

在这里还要细想一下，上面的例子中，我们使用 `type()` 函数查看一个类型或者变量的类型。

其中查看了一个 `Hello` class 的类型，打印的结果是： `<class 'type'>` 。

**其实 	`type()` 函数不仅可以返回一个对象的类型，也可以创建出新的类型。**

class 的定义是运行时动态创建的，而创建 class 的方法就是使用 `type()` 函数。

比如我们可以通过 `type()` 函数创建出上面例子中的 `Hello` 类，具体看下面的代码：

```python
# -*- coding: UTF-8 -*-

def printHello(self, name='Py'):
    # 定义一个打印 Hello 的函数
    print('Hello,', name)


# 创建一个 Hello 类
Hello = type('Hello', (object,), dict(hello=printHello))

# 实例化 Hello 类
h = Hello()
# 调用 Hello 类的方法
h.hello()
# 查看 Hello class 的类型
print(type(Hello))
# 查看实例 h 的类型
print(type(h))

```

输出的结果如下：

```
Hello, Py
<class 'type'>
<class '__main__.Hello'>
```

在这里，需先了解下通过 `type()` 函数创建 class 对象的参数说明：

1、class 的名称，比如例子中的起名为 `Hello`

2、继承的父类集合，注意 Python 支持多重继承，如果只有一个父类，tuple 要使用单元素写法；例子中继承 object 类，因为是单元素的 tuple ，所以写成 `(object,)`

3、class 的方法名称与函数绑定；例子中将函数 `printHello` 绑定在方法名 `hello` 中

具体的模式如下：

```python
type(类名, 父类的元组（针对继承的情况，可以为空），包含属性的字典（名称和值）)
```

好了，了解完具体的参数使用之外，我们看看输出的结果，可以看到，通过 `type()` 函数创建的类和直接写 class 是完全一样的。

这是因为Python 解释器遇到 class 定义时，仅仅是扫描一下 class 定义的语法，然后调用 `type()` 函数创建出 class 的。

不过一般的情况下，我们都是使用 `class ***...` 的方法来定义类的，不过 `type()` 函数也可以让我们创建出类来。

也就是说，动态语言本身支持运行期动态创建类，这和静态语言有非常大的不同，要在静态语言运行期创建类，必须构造源代码字符串再调用编译器，或者借助一些工具生成字节码实现，本质上都是动态编译，会非常复杂。

**可以看到，在 Python 中，类也是对象，你可以动态的创建类。**

其实这也就是当你使用关键字 class 时 Python 在幕后做的事情，而这就是通过元类来实现的。 