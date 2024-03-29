---
title: Python 中类也是对象
date: 2023-05-16 00:00:00
---

# 一、Python 中类也是对象 #

在了解元类之前，我们先进一步理解 Python 中的类，在大多数编程语言中，类就是一组用来描述如何生成一个对象的代码段。在 Python 中这一点也是一样的。

这点在学习类的章节也强调过了，下面可以通过例子回忆一下：

```python
class ObjectCreator(object):
    pass


mObject = ObjectCreator()
print(mObject)
```

输出结果：

```
<__main__.ObjectCreator object at 0x00000000023EE048>
```

但是，Python 中的类有一点跟大多数的编程语言不同，在 Python 中，可以把类理解成也是一种对象。对的，这里没有写错，就是对象。

为什么呢？

因为只要使用关键字 `class` ，Python 解释器在执行的时候就会创建一个对象。

如：

```python
class ObjectCreator(object):
    pass
```

当程序运行这段代码的时候，就会在内存中创建一个对象，名字就是ObjectCreator。这个对象（类）自身拥有创建对象（类实例）的能力，而这就是为什么它是一个类的原因。

但是，它的本质仍然是一个对象，于是我们可以对它做如下的操作：

```python
class ObjectCreator(object):
    pass


def echo(ob):
    print(ob)


mObject = ObjectCreator()
print(mObject)

# 可以直接打印一个类，因为它其实也是一个对象
print(ObjectCreator)
# 可以直接把一个类作为参数传给函数（注意这里是类，是没有实例化的）
echo(ObjectCreator)
# 也可以直接把类赋值给一个变量
objectCreator = ObjectCreator
print(objectCreator)
```

输出的结果如下：

```
<__main__.ObjectCreator object at 0x000000000240E358>
<class '__main__.ObjectCreator'>
<class '__main__.ObjectCreator'>
<class '__main__.ObjectCreator'>
```