---
title: python+requests做接口自动化测试
date: 2023-02-13 00:00:01
---

# python+requests做接口自动化测试

## 接口测试流程

接口测试一般在功能测试之前进行

1、需求分析

2、接口文档分析

3、设计接口测试用例

4、执行接口测试：搭建环境；`jmeter`执行，`python`代码执行

5、提交跟踪和管理缺陷

6、输出接口测试报告

7、自动化接口测试和持续集成

## 如何进行分析接口文档以及接口文档的内容

## 如何设计接口测试用例，需要关注哪些点

## 环境搭建

## 创建项目目录结构和安装依赖

### 项目目录结构

1、`api`

2、`backkup`：存放备份数据，初始化的数据

3、`data`：存放测试数据

4、`lib`：存放第三方工具

5、`logs`：

6、`reports`：

7、`script`：

8、`python`文件：`config.py`, `execute.py`, `utils.py`

### 安装依赖

`requests`

`pymysql`

`parameterized`

`jsonpath`

`HTML TestRunner_PY3`

### 在`config.py`文件中配置公有属性

```python
import os.path
# 公共配置py文件，存放配置信息
# 配置项目基础URL。因为URL的域名，端口经常变更，所以独立出来代码维护性
BASE_URL = '项目地址'

# BASE_PATH：项目的绝对路径；该代码始终能获取到当前项目的绝对路径。
# 生成日志、报告、备份文件时都需要使用BASE_PATH
BASE_PATH = os.path.dirname(os.path.abspath(__file__))

# 项目请求头设置
BASE_HEADERS = {'Content-Type': 'application/json', 'Authorization': ''}

# 后期会添加更多属性到这个文件中

```

### 在`utils.py`编写初始化日志的代码

```python
# #自定义工具的模块
# 这个文件中编写初始化日志的代码

```

### 在`api.__init__.py`中初始化日志

```python
# 编写封装被测系统API接口的模块
# 初始化日志
from utils import init_logging
import logging

# 初始化日志
init_logging()

# 测试打印日志
logging.info('Test日志打印')
```



## 封装系统接口

## 用python根据测试用例编写测试脚本

## 实现数据驱动测试

## 生成测试报告

## 登录态管理

## 多线程执行测试用例

## 多线程执行测试用例

## 服务端备份/还原/初始化

## Flask实现Mock测试

