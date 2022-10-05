import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/functional-test": [
        {
            text: "功能测试",
            collapsable: true,
            children: [
                "测试工作总结.md",
            ]
        },
    ],
})
