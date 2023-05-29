---
title: Python+Requests
date: 2023-04-27 00:00:01
---

#  Python+Requests

## 基础语法

### Requests介绍和安装

一个HTTP接口组成部分包括：

- 请求方法

- pip install requestsURL

- 请求头

- 请求体

- 响应数据

Requests可以在内部封装的函数中设置HTTP接口所需要的请求数据：

```python
import requests

response = requests.post(url="http://www.xxx.com/api/v1/xx", params={"key":"value"}, data={"key":"val"}, json={"key":"val"}, headers={"Content-Type":"application/json"},cookies=cookie)
```

- response 接口requests.post(...)方法返回的Response对象，该对象包括了服务器返回的响应数据

- requests.post(...) 设置请求方法为POST，其他设置方法有：requests.get(),requests.put(),requests.delete()等等

- url="http://www.xxx.com/api/v1/xx" 设置接口的URL是http://www.xxx.com/api/v1/xx

- params={"key":"value"} 设置接口的查询参数为key=value

- data={"key":"val"} 设置表单格式请求体数据为key=value

- json={"key":"val"} 设置json结构请求体数据为{"key":"val"}

- headers={"Content-Type":"application/json"} 设置请求头为{"Content-Type":"application/json"}

- cookies=cookie 设置cookies，在这里右边的cookie是一个变量

### Requests上传图片接口测试



### Requests+Unittest实现登录接口

### 登录态的管理

### 接口的加签和加密

### 数据的备份和还原

### 引入日志手机的功能