---
title: Selenium-API操作
date: 2022-10-09 00:00:01
---

# Selenium-API操作

## Selenium简介

## 环境搭建

## Selenium常见操作方法

### 导包

1、获得浏览器驱动

```bash
from selenium import webdriver
```

2、导入时间

```bash
import time
```

3、从selenium.webdriver.common.by导入By包进行元素定位

```bash
from selenium.webdriver.common.by import By
```

4、导入键盘包

```bash
from selenium.webdriver import Keys
```

5、导入下拉选择框的Select包

``` bash
from selenium.webdriver.support.ui import Select
```

6、待完善...

### 浏览器驱动

1、谷歌

```bash
driver = webdriver.Chrome()
```

2、火狐

```bash
driver = webdriver.Firefox()
```

3、待完善...

### 元素定位（语法为最新版的selenium）

1、ID定位

```bash
driver.find_element(By.ID, 'id')
```

2、name定位

```bash
driver.find_element(By.NAME, 'name')
```

3、class定位

```bash
driver.find_element(By.CLASS_NAME, 'class_name')
```

4、link_text定位

```bash
driver.find_element(By.LINK_TEXT, 'link_text')
```

5、partial_link_text定位

通过超链接的局部文本信息进行元素定位，主要用来定位a标签。

```bash
driver.find_element(By.PARTIAL_LINK_TEXT, 'partial_link_text')
```

6、tag_name定位

- 定位一组元素的方法

```bash
driver.find_element(By.TAG_NAME, 'tag_name')
```

- 定位一组元素返回的值是一个列表
- 可以通过下标来使用列表中的元素，下标是从0 开始

```bash
# 案例：通过li标签定位一组元素，通过索引方法对知乎链接点击
# 导包
from selenium import webdriver

# 从selenium.webdriver.common.by导入By包进行元素定位
from selenium.webdriver.common.by import By

# 获得浏览器驱动
driver = webdriver.Chrome()

# 定位一组元素,通过索引点击知乎
el = driver.find_elements_by_tag_name('li')
el[2].click()
```

7、xpath定位（全局唯一）

```bash

```

8、CSS定位

```bash
driver.find_element(By.CSS_SELECTOR, 'css_selector')
```

- CSS是一种语言，它是用来描述HTML元素的显示样式
- 在CSS中，选择器是一种模式，用于选择需要添加样式的元素
- 在Selenium中也可以使用这种选择器来定位元素
- CSS定位比XPath定位速度要快
- 定位思路
  - id选择器
  - class选择器
  - 属性选择器
  - 层级选择器

9、JS定位（不是一个定位器，只是一个脚本语言）

- XPath即为XML Path的简称，它是一门在 XML 文档中查找元素信息的语言。

```bash
driver.find_element(By.XPATH, 'xpath')
```

- HTML可以看做是XML的一种实现，所以Selenium用户可以使用这种强大的语言在Web应用中定位

  元素

- 定位思路

  - 路径定位：绝对路径：从最外层元素到指定元素之间所有经过元素层级的路径

    1). 绝对路径以/html根节点开始，使用/来分隔元素层级；

    如：/html/body/div/fieldset/p[1]/input

    相对路径：匹配任意层级的元素，不限制元素的位置

    1). 相对路径以//开始

    2). 格式：//input

  - 利用元素属性定位

  - 层级与属性结合定位

- xpath扩展：

  - 一个/是绝对路径，从根元素开始

  - 两个//是相对路径，递归查找所有子孙

  - 一个. 是当前层，两个.是上一层

  - @表示取属性

  - []叫谓语，里面跟的是查询条件条件支持算数运算+-*/><，条件支持逻辑运算 and or取文本值用text(),不加@因为它是个函数

  - 常用函数：contains(属性名或者节点名，文本值)；text()是取文本值，也可以当做一个查询条件； last()取末尾，倒数第二last()-1；starts-with(),表示以XX开头，写法是括号加两个入参；not(),表示否定，把内容全包进去；count(),取节点或属性个数

### 浏览器操作

1、浏览器最大化

```bash
driver.maximize_window()
```

2、最小化

```bash
driver.minimize_windows()
```

3、设置窗口大小

```bash
driver.set_window_size()
```

4、浏览器前进

```bash
driver.forward()
```

5、浏览器后退

```bash
driver.back()
```

6、浏览器刷新

```bash
driver.refresh()
```

### 操作测试对象

主要是对定位到的元素进行操作

1、点击对象

```b
element.click()    # element表示的是元素对象
```

2、模拟按键输入

```   
element.send_keys('value')   #  element表示是元素对象，value表示的是要输入的内容
```

3、清除对象内容

```bash
element.clear()   # element表示的元素对象，将输入框里面的内容全部清楚
```

4、提交对象的内容

```bash
submit()
```

5、用于获取元素的文本信息

```bash
text

# 案列：获取登录文本信息
# 导包
from selenium import webdriver

# 从selenium.webdriver.common.by导入By包进行元素定位
from selenium.webdriver.common.by import By

# 获得浏览器驱动
driver = webdriver.Chrome()

# 打开百度
driver.get('https://www.baidu.com')

# text打印登录信息
print(driver.find_element(By.LINK_TEXT, '登录').text)
```

### 键盘事件

```bash
TAB    send_keys(Keys.TAB)
ENTER  send_keys(Keys.ENTER)
BACKSPACE	send_keys(Keys.BACKSPACE)
SPACE	send_keys(Keys.SPACE)
F1	send_keys(Keys.F1)
F12	send_keys(Keys.F12)
全选	send_keys(Keys.CONTROL, 'a')
复制	send_keys(Keys.CONTROL, 'c')
剪切	send_keys(Keys.CONTROL, 'x')
粘贴	send_keys(Keys.CONTROL, 'v')
```

### 鼠标事件

```bash
# 执行ActionChains中的操作
perform()

# 右击
content_click()

# 双击
double_click()

# 拖动
drag_and_drop()

# 鼠标悬停
move_to_element()
```

### 窗口，框架切换

```bash
driver.current_window_handle
driver.switch_to_frame('frameName')
driver.switch_to_window('windowName')
```

### 获取断言信息(待完善...）

```bash
driver.title
driver.current_url
driver.page_source
text
```

### Cookie操作(待完善...)

```bash
driver.get_cookies()
driver.get_cookie()
```

### 时间等待（待完善...）

```bash
# 显性等待

# 隐性等待

# 智能等待
```

### 控制浏览器滚动条(待完善...)

用JS语言，数值为0滚动条往顶端拉，数值越大，滚动条往下拉

```bash

```

## Selenium应用于web自动化测试的主要流程(待完善...)

1、声明浏览器对象

2、访问页面

3、获取页面代码

4、定位元素

5、页面交互

6、执行JS脚本

7、等待页面加载





