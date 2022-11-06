---
title: ADB Android调试桥
date: 2022-11-05 00:00:01
---

# ADB Android调试桥

## ADB概念

1、ADB全名时Android Debug Bridge，是一个调试工具；

2、ADB时一个C/S架构的命令行工具，由三部分组成，ADB就是连接收集个电脑通信的桥梁，只要这个桥梁建立起来，那么就可以通过电脑来控制手机。

## ADB工作原理

1、ADB时Android SDK里的一个工具，用这个工具可以直接操作管理Android模拟器或者真实的Android设备，它只要的功能有

- 在设备上运行Shell命令，将本地APK软件安装至模拟器或Android设备；
- 管理设备或手机模拟器上的预定端口；
- 在设备或手机模拟器上复制或黏贴文件。

2、ADB是一个客户端--服务器程序，包括三个组件

- Client端（客户端）：运行在pc端。该组件发送命令，可以通过ADB命令从命令行终端调用客户端，对Android应用进行安装，卸载及调试等操作；
- Daemon（后台程序）：改组件在设备上运行命令。守护进程，运行在调试设备中，手机或模拟器，用来接收并执行ADB命令。后台程序在每个模拟器或设备实列上作为后台程序运行；
- Sever端（服务器）：该组件运行在pc端，客户端到Android设备上ADB后台进程的连接，负责管理Client和Daemon进行通信。服务器在开发计算机上作为后台进程运行。

## ADB常见命令

1、进入指定设备

```bash
adb -s serialNumber shell
```

2、查看版本

```bash
adb version
```

3、查看日志

```bash
adb logcat
```

4、查看设备

adb devices

```bash
adb logcat
```



5、连接状态

```bash
adb get-state
```

6、启动ADB服务

```bash
adb start-server
```

7、停止ADB服务

```bash
adb kill-server
```

8、电脑推送到手机



```bash
adb push local remote
```



9、手机拉取到电脑



```bash
 adb pull remote loca
```



10、重启机器



```bash
 adb reboot
```



11、获取序列号



```bash
adb get-serialno
```



12、重启到bootloader，即刷机模式



```bash
adb reboot bootloader
```



13、重启到recovery，即恢复模式



```bash
adb reboot recovery
```



14、安装apk



```bash
adb install <apkfile> 
比如：adb install baidu.apk
```



15、安装apk到sd卡

```bash
adb install -s <apkfile> 
比如：adb install -s baidu.apk
```

16、卸载APK

```bash
adb uninstall <package> 
比如：adb uninstall com.baidu.search
```

17、获取机器MAC地址

```bash
adb shell cat /sys/class/net/wlan0/address
```

18、启动应用

```bash
adb shell am start -n <package_name>/.<activity_class_name> 
例如:adb shell am start
```

19、查看占用内存排序

```bash
adb shell top
```

20、查看占用内存前6的app

```bash
adb shell top -m 6
```

21、刷新一次内存信息，然后返回

```bash
adb shell top -n 1
```

22、查询各进程缓存和数据

```bash
adb shell procrank
```

23、清楚应用缓存和数据

```bash
adb shell pm clear "包名"
```

24、杀死一个进程

```bash
adb shell kill [pid]
```

25、查看进程列表

```bash
adb shell ps
```

26、查看指定进程状态

```bash
adb shell ps -x [PID]
```

27、查看后台services信息

```bash
 adb shell service list
```

28、查看当前内存占用

```bash
adb shell cat /proc/meminfo
```

29、查看IO内存分区

```bash
adb shell cat /proc/iomem
```

30、将system分区重新挂载为可读写分区

```bash
adb remount
```

31、从本地复制文件到设备

```bash
adb push <local> <remote>
```

32、从设备复制文件到本地

```bash
adb pull <remote> <local>
```

33、列出目录下的文件和文件夹，等同于dos中的dir命令

```bash
adb shell ls
```

34、进入文件夹，等同与dos中的cd命令

```bash
adb shell cd  文件夹名
```

35、重命名文件

```bash
adb shell rename path/oldfilename path/newfilename
```

36、删除system/avi.apk

```bash
 adb shell rm /system/avi.apk
```

37、删除文件夹及其下面所有文件

```bash
adb shell rm -r  文件夹名
```

38、移动文件

```bash
adb shell mv path/file newpath/file
```

39、设置文件权限

```bash
adb shell chmod 777 /system/fonts/DroidSansFallback.ttf
```

40、新建文件夹

```bash
adb shell mkdir path/foldelname
```

41、查看文件内容

```bash
adb shell cat <file>
```

42、查看wifi密码

```bash
adb shell cat /data/misc/wifi/*.conf
```

43、清除log缓存

```bash
adb logcat -c
```

44、查看bug报告

```bash
adb bugreport
```

45、获取设备名称

```bash
adb shell cat /system/build.prop
```

46、查看ADB帮助

```bash
adb help
```

47、跑monkey

```bash
adb shell monkey -v -p your.package.name 500
adb -s 192.168.244.151:5555 shell monkey -v -p com.bolexim 500
```

