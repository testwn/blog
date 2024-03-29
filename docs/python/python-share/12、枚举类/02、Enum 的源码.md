---
title: Enum 的源码
date: 2023-05-16 00:00:00
---

# 二、Enum 的源码 #

通过上面的实例可以知道通过 `__members__`  可以遍历枚举类的所有成员。

那有没有想过为什么呢？

当你看到那段代码的时候，有没有想过为什么通过  `__members__`  就能遍历枚举类型的所有成员出来？


我们可以先来大致看看 Enum 的源码是如何实现的；

Enum 在模块 enum.py 中，先来看看 Enum 类的片段

```python
class Enum(metaclass=EnumMeta):
    """Generic enumeration.
    Derive from this class to define new enumerations.
    """
```

可以看到，Enum 是继承元类 EnumMeta 的；再看看 EnumMeta 的相关片段

```python
class EnumMeta(type):
    """Metaclass for Enum"""
    @property
    def __members__(cls):
        """Returns a mapping of member name->value.
        This mapping lists all enum members, including aliases. Note that this
        is a read-only view of the internal mapping.
        """
        return MappingProxyType(cls._member_map_)
```

首先 `__members__` 方法返回的是一个包含一个 Dict 既 Map 的 MappingProxyType，并且通过 @property 将方法 `__members__(cls)` 的访问方式改变为了变量的的形式，那么就可以直接通过 `__members__` 来进行访问了