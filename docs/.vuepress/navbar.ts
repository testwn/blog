import {navbar} from "vuepress-theme-hope";

export const navbarConfig = navbar([
    {
        text: "首页",
        link: "/",
    },
    {
        text: "测试",
        link: "/test/functional-test/测试工作总结.md",
    },
    {
        text: "Linux系统",
        link: "/linux/Linux执行命令.md",
    },
    {
        text: "python",
        link: "/python/python-base/python基础语法.md",
    },
    {
        text: "持续集成与持续交付",
        link: "/CI_CD/CI/持续集成的基础.md",
    },
]);
