---
title: 性能压测脚本录制与编写
date: 2022-10-28 00:00:01
---

# 性能压测脚本录制与编写

## Jmeter脚本录制

### jmeter工具设置

1.添加HTTP代理服务器（录制脚本）

右键点击测试计划，选择添加->非测试元件->HTTP代理服务器

![image-20221028213350898](https://minio.testwn.com/img/blog/166770591588416.png)

2.HTTP代理服务器参数设置

![image-20221029150316458](https://minio.testwn.com/img/blog/166770591605298.png)

1.启动按钮：在录制脚本前启动，弹出框点确定即可

2.端口：端口与浏览器选项中的设置要一致

3.目标控制器：测试计划->线程组。可以稍后再jmeter中添加完线程组后设置

### 浏览器代理配置

1.chrome设置代理服务器

操作步骤：打开Chrome浏览器->设置->高级->系统->打开计算机的代理设置，启动代理服务器，并设置地址和端口，保存即可。注意，输入地址和端口号同jmeter保持一致

2.再次开启浏览器，提示未连接到互联网，说明代理设置成功，需要启动jmeter代理服务

![image-20221029170653728](https://minio.testwn.com/img/blog/166770591587993.png)



3.需要jmeter代理服务启动，浏览器提示隐私安全问题，https协议需要安装证书



4.安装证书



5.chrome浏览器导入证书



6.导入jmeter证书后，再次启动hmeter代理服务录制，就可以录制了

![image-20221029170352312](https://minio.testwn.com/img/blog/166770591605361.png)

## HTTP代理服务器参数设置

1.抓取内容



2.jmeter提供过滤功能，进行内容过滤设置



3.设置成功，再次抓取，会把排除项过滤掉



4.prefix  设置每个请求前缀内容



## 脚本编写

1.录制前Jmeter参数配置



2.过滤信息



3.脚本录制及优化

通过cookie实现免登录，需要添加http cookie管理器





## 