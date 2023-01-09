import {sidebar} from "vuepress-theme-hope";

export const sidebarConfig = sidebar({
    "/test": [
        {
            // 侧边栏目录名称
            text: "功能测试",
            // 侧边栏子目录路径名称
            prefix: "functional-test",
            collapsible: true,
            children: [
                "测试工作总结.md",
                "test.md",
                "测试.md",
            ]
        },
        {
            text: "WEB自动化测试",
            prefix: "web-automation",
            collapsible: true,
            children: [
                "Selenium-API操作.md",
                "web-2.md",
            ]
        },
        {
            text: "APP自动化测试",
            prefix: "app-automation",
            collapsible: true,
            children: [
                "ADB Android调试桥.md",
                "app-2.md",
            ]
        },
        {
            text: "性能测试",
            prefix: "performance-testing",
            collapsible: true,
            children: [
                "性能测试基础概念.md",
                "性能测试计划内容.md",
                "Jmeter性能压测脚本录制与编写.md",
            ]
        },
        {
            text: "测试工具",
            prefix: "test-tools",
            collapsible: true,
            children: [
                "主流测试工具简介.md",
                {
                    text: "JMeter",
                    prefix: "jmeter",
                    collapsible: true,
                    children: [
                        "jmeter操作详解（一）.md",
                        "jmeter操作详解（二）.md",
                        "jmeter关联.md",
                        "jmeter断言.md",
                    ]
                },
                {
                    text: "抓包工具",
                    prefix: "packet_capture_tool",
                    collapsible: true,
                    children: [
                        "Charles.md",
                        "F12开发者工具.md",
                        "Fiddler.md",
                    ]
                },
            ]
        },
    ],
    "/linux": [
        {
            text: "Linux",
            collapsible: true,
            children: [
                "Linux执行命令.md",
                "shell编程.md",
            ]
        },
        {
            text: "Linux2",
            collapsible: true,
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
            collapsible: true,
            children: [
                "python基础语法.md",
            ]
        },
        {
            text: "python进阶",
            prefix: "python-advance",
            collapsible: true,
            children: [
                "python2.md",
            ]
        },
    ],
    "/JavaScript": [
        {
            text: "JavaScript",
            prefix: "JavaScript",
            collapsible: true,
            children: [
                "JS语法（一）.md",
                "JS语法（二）.md",
            ]
        },

    ],
})
