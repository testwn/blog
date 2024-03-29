---
title: Python 的 Magic Method
date: 2023-05-16 00:00:00
---

# 一、Python 的 Magic Method #

在 Python 中，所有以 "__" 双下划线包起来的方法，都统称为"魔术方法"。比如我们接触最多的 `__init__` 。

魔术方法有什么作用呢？

使用这些魔术方法，我们可以构造出优美的代码，将复杂的逻辑封装成简单的方法。

那么一个类中有哪些魔术方法呢？

我们可以使用 Python 内置的方法 `dir()` 来列出类中所有的魔术方法.示例如下：

```python
#!/usr/bin/env python3
# -*- coding: UTF-8 -*-

class User(object):
    pass


if __name__ == '__main__':
    print(dir(User()))
```

输出的结果：

```
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__']
```

可以看到，一个类的魔术方法还是挺多的，不过我们只需要了解一些常见和常用的魔术方法就好了。