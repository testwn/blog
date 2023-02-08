import {defineUserConfig} from "vuepress";
import theme from "./theme";
import {searchProPlugin} from "vuepress-plugin-search-pro";

export default defineUserConfig({
    lang: "zh-CN",
    title: "薇念的小窝",
    description: "测试点工一枚，文章主要分享自己的编程学习笔记、编程技巧、实用工具...等等，当然也会分享职场生活，人生经历。",
    base: "/",
    // 指定 vuepress build 的输出目录
    dest: "./dist",
    // 是否开启默认预加载 js
    shouldPrefetch: false,
    head: [
        // meta
        ["meta", { name: "robots", content: "all" }],
        ["meta", {name: "author", content: "薇念的小窝"}],
        [
            "meta",
            {
                "http-equiv": "Cache-Control",
                content: "no-cache, no-store, must-revalidate",
            },
        ],
        ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
        ["meta", { "http-equiv": "Expires", content: "0" }],
        [
            "meta",
            {
                name: "keywords",
                content:
                    "测试基础, 功能测试，数据库, 并发编程, MySQL, Redis, Linux, web自动化测试, python, docker, 性能测试,安全测试, 项目管理。 ",
            },
        ],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],
    ],
    markdown: {
        code: {
            // 代码块禁用行号
            lineNumbers: false
        },
    },
    plugins: [
        searchProPlugin({
            locales: {
                "/": {
                    placeholder: '搜索',
                },
            },
            indexContent: false,
        }),
    ],
    theme,
});
