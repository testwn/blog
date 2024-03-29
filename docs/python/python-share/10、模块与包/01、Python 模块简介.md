---
title: Python 模块简介
date: 2023-05-16 00:00:00
---

# 一、Python 模块简介 #

在开发过程中，随着程序代码越写越多，在一个文件里代码就会越来越长，越来越不容易维护。

后面我们学习了函数，知道函数是实现一项或多项功能的一段程序，这样就更方便我们重复使用代码。

紧接着，我们有学了类，类可以封装方法和变量（属性）。这样就更方便我们维护代码了。

我们之前学过，类的结构是这样的:

![](https://minio.testwn.com/img/blog/168425332521695.png)

而我们要学的模块是这样的：


![](https://minio.testwn.com/img/blog/168425332623688.png)

在模块中，我们不但可以直接存放变量，还能存放函数，还能存放类。

不知道你们还有没有印象，我们封装函数用的是 `def` , 封装类用的是 `class` 。

而我们封装模块，是不需要任何语句的。

**在 Python 中，一个 .py 文件就称之为一个模块（Module）。**

可以看下我之前写的例子，在 pychrome 上 ，这样一个 test.py 文件就是一个模块。

![](https://minio.testwn.com/img/blog/168425332522723.png)

其实模块就是函数功能的扩展。为什么这么说呢？

那是因为模块其实就是实现一项或多项功能的程序块。

通过上面的定义，不难发现，函数和模块都是用来实现功能的，只是模块的范围比函数广，在模块中，可以有多个函数。

然有了函数，那为啥那需要模块？

最大的好处是大大提高了代码的可维护性。

其次，编写代码不必从零开始。当一个模块编写完毕，就可以被其他地方引用。我们在编写程序的时候，也经常引用其他模块，包括 Python 内置的模块和来自第三方的模块。

使用模块还可以避免函数名和变量名冲突。相同名字的函数和变量完全可以分别存在不同的模块中，因此，我们自己在编写模块时，不必考虑名字会与其他模块冲突。但是也要注意，尽量不要与内置函数名字冲突。

Python 本身就内置了很多非常有用的模块，只要安装完毕，这些模块就可以立刻使用。我们可以尝试找下这些模块，比如我的 Python 安装目录是默认的安装目录，在 C:\Users\Administrator\AppData\Local\Programs\Python\Python36 ，然后找到 Lib 目录，就可以发现里面全部都是模块，没错，这些 `.py` 文件就是模块了。

![](https://minio.testwn.com/img/blog/168425332522787.png)

其实模块可以分为标准库模块和自定义模块，而刚刚我们看到的 Lib 目录下的都是标准库模块。