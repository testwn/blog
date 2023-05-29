import {navbar} from "vuepress-theme-hope";

export const navbarConfig = navbar([
    {
        text: "首页",
        link: "/",
    },
    {
        text: "测试",
        link: "/test/01.App测试/01、移动端测试基础.md",
    },
    {
        text: "Linux系统",
        link: "/linux/01、Linux执行命令.md",
    },
    {
        text: "python",
        link: "/python/python-base/01、Python+Requests.md",
    },
    {
        text: "持续集成与持续交付",
        link: "/CI_CD/CI/持续集成的基础.md",
    },
]);
