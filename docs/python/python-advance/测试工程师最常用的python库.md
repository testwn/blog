---
title: 测试工程师最常用的python库
date: 2023-02-15 00:00:01
---

# 测试工程师最常用的python库

## `OS`模块操作系统接口

简介：`os`库是Python标准库，包含几百个函数，常用的有路径操作，进程管理，环境参数等

应用场景：在进行web自动化测试的时候，前期网页是没有部署到服务器的，这个时候我们没有办法访问服务器，只能通过本地的`html`页面来进行测试，这个时候就要使用`os`库来访问我们的本地页面，如：`dr.get("file:///"+os.path.abspath('HTML/下列列表.html'))`。以及`os`库中有对文件的修改，删除等功能。

## `SYS`模块

简介：sys模块是与Python解析器交互的一个接口。sys模块提供了许多函数和变量来处理python运行时环境的不同部分

## `time`

简介：

应用：为了更好的定位到元素，需要休眠代码

## `Selenium`

简介：

应用：

八大定位元素：

## `Unittest`

简介：`unittest`单元测试框架不仅可以适用于单元测试，还可以适用WEB自动化测试用例的开发与执行，该测试框架可组织执行测试用例，并且提供了丰富的断言方法，判断测试用例是否通过，最终生成测试结果。

应用：可以使用在批量运行自动化测试用例，用例之间数据交互，自动生成测试报告

## `Pytest`

简介：

应用：`pytest`的使用和`unittest`类似，不同的地方在于`pytest`有很多插件，可以用例出错重跑等

## logging

简介：Python的日志记录工具

应用：

## `Pymsql`

简介：`pymsql`是python来连接操作`mysql`数据的一个`python`专用库。有着成熟的功能齐全的Python测试工具。与mysql-python兼容的纯Python MySQL驱动程序。

应用：在编写自动化测试时，有些数据我们需要从`mysql`数据库中获取。

## `Email`

简介：该库常和**`smtplib`库一起使用，你在写代码进行邮件自动化发送的时候必不可少**

应用：该库的使用需要配合邮箱的设置，邮箱要开启一些服务，然后你才可以登录smtp服务器

## `Appium`

简介：`Appium`是一个开源的，适用于原生或混合移动应用（` hybrid mobile apps `）的自动化测试工具，`Appium`应用`WebDriver`: `JSON wire protocol`驱动安卓和`iOS`移动应用

应用：在进行移动端自动化测试时，你的代码必须引入appium库，你才能调用appium软件，然后再控制移动端的app

## `Requests`

简介：`Requests `是用`Python`语言编写，基于 `urllib`，采用 `Apache2 Licensed `开源协议的 HTTP 库。它比` urllib` 更加方便，可以节约我们大量的工作，完全满足 `HTTP `测试需求。`Requests` 的哲学是以 PEP 20 的习语为中心开发的，所以它比` urllib `更加 `Pythoner`。

应用：主要应用于接口自动化测试，可以用来发送get和post等等一些请求。

## `Matplotlib`

简介：一个Python 2D绘图库。

应用：

## `Numpy`

简介：

应用：

## `Pandas`

简介：一个提供高性能，易于使用的数据结构和数据分析工具的库

应用：

## Mock

简介：Python的标准库，一个模拟和修补库

应用：

## Django

简介：Python中最流行的Web框架

应用：