import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/test": [
        {
            // 侧边栏目录名称
            text: "功能测试",
            // 侧边栏子目录路径m名称
            prefix: "functional-test",
            collapsable: true,
            children: [
                "测试工作总结.md",
                "test.md",
                "测试.md",
            ]
        },
        {
            text: "WEB自动化测试",
            prefix: "web-automation",
            collapsable: true,
            children: [
                "web-1.md",
                "web-2.md",
            ]
        },
        {
            text: "APP自动化测试",
            prefix: "app-automation",
            collapsable: true,
            children: [
                "ADB Android调试桥.md",
                "app-2.md",
            ]
        },
        {
            text: "性能测试",
            prefix: "performance-testing",
            collapsable: true,
            children: [
                "性能测试基础概念.md",
                "性能测试计划内容.md",
            ]
        },
        {
            text: "测试工具",
            prefix: "test-tools",
            collapsable: true,
            children: [
                "主流测试工具简介.md",
            ]
        },
    ],
    "/linux": [
        {
            text: "Linux",
            collapsable: true,
            children: [
                "Linux执行命令.md",
                "shell编程.md",
            ]
        },
        {
            text: "Linux2",
            collapsable: true,
            children: [
                "Linux执行命令.md",
                "shell编程.md",
            ]
        },
    ],
    "/python": [
        {
            text: "python基础",
            prefix: "python-base",
            collapsable: true,
            children: [
                "python1.md",
            ]
        },
        {
            text: "python进阶",
            prefix: "python-advance",
            collapsable: true,
            children: [
                "python2.md",
            ]
        },
    ],
})
