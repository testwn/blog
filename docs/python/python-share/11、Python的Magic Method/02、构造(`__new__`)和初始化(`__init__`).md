---
title: 构造(`__new__`)和初始化(`__init__`)
date: 2023-05-16 00:00:00
---

# 二、构造(`__new__`)和初始化(`__init__`) #

通过之前的学习，我们已经知道定义一个类时，我们经常会通过 `__init__(self)` 的方法在实例化对象的时候，对属性进行设置。

比如下面的例子：

```python
#!/usr/bin/env python3
# -*- coding: UTF-8 -*-

class User(object):
    def __init__(self, name, age):
        self.name = name;
        self.age = age;

user=User('两点水',23)
```

实际上，创建一个类的过程是分为两步的，一步是创建类的对象，还有一步就是对类进行初始化。

`__new__` 是用来创建类并返回这个类的实例, 而`__init__` 只是将传入的参数来初始化该实例.`__new__` 在创建一个实例的过程中必定会被调用,但 `__init__` 就不一定，比如通过 pickle.load 的方式反序列化一个实例时就不会调用 `__init__` 方法。

![](https://minio.testwn.com/img/blog/168425339437223.png)

`def __new__(cls)` 是在 `def __init__(self)` 方法之前调用的，作用是返回一个实例对象。还有一点需要注意的是：`__new__` 方法总是需要返回该类的一个实例，而 `__init__`  不能返回除了 `None` 的任何值

具体的示例：

```python
#!/usr/bin/env python3
# -*- coding: UTF-8 -*-

class User(object):
    def __new__(cls, *args, **kwargs):
        # 打印 __new__方法中的相关信息
        print('调用了 def __new__ 方法')
        print(args)
        # 最后返回父类的方法
        return super(User, cls).__new__(cls)

    def __init__(self, name, age):
        print('调用了 def __init__ 方法')
        self.name = name
        self.age = age


if __name__ == '__main__':
    usr = User('两点水', 23)
```

看看输出的结果：

```txt
调用了 def __new__ 方法
('两点水', 23)
调用了 def __init__ 方法
```

通过打印的结果来看，我们就可以知道一个类创建的过程是怎样的了，先是调用了 `__new__` 方法来创建一个对象，把参数传给 `__init__` 方法进行实例化。

其实在实际开发中，很少会用到 `__new__` 方法，除非你希望能够控制类的创建。通常讲到 `__new__` ，都是牵扯到 `metaclass`(元类)的。

当然当一个对象的生命周期结束的时候，析构函数 `__del__` 方法会被调用。但是这个方法是 Python 自己对对象进行垃圾回收的。