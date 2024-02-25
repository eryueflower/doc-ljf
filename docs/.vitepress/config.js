const router = {
    前端基础知识: [
        { text: "00-开始", link: "/前端基础知识/00-开始" },
        {
            text: "01-ajax-fetch-axios-区别",
            link: "/前端基础知识/01-ajax-fetch-axios-区别",
        },
        {
            text: "02-节流和防抖",
            link: "/前端基础知识/02-节流和防抖",
        },
        {
            text: "03-px-em-rem-vw-vh-区别",
            link: "/前端基础知识/03-px-em-rem-vw-vh-区别",
        },
        {
            text: "04-箭头函数的缺点",
            link: "/前端基础知识/04-箭头函数的缺点",
        },
        {
            text: "05-TCP三次握手四次挥手",
            link: "/前端基础知识/05-TCP三次握手四次挥手",
        },

        {
            text: "06-for-in和for-of的区别",
            link: "/前端基础知识/06-for-in和for-of的区别",
        },
        {
            text: "07-offsetHeight-scrollHeight-clientHeight-区别",
            link: "/前端基础知识/07-offsetHeight-scrollHeight-clientHeight-区别",
        },
        {
            text: "08-HTMLCollection-NodeList-区别",
            link: "/前端基础知识/08-HTMLCollection-NodeList-区别",
        },
        {
            text: "09-vue-computed-watch-区别",
            link: "/前端基础知识/09-vue-computed-watch-区别",
        },
        {
            text: "10-vue组件通讯",
            link: "/前端基础知识/10-vue组件通讯",
        },
        {
            text: "11-vuex-action-mutation-区别",
            link: "/前端基础知识/11-vuex-action-mutation-区别",
        },

        {
            text: "12-JS严格模式",
            link: "/前端基础知识/12-JS严格模式",
        },
        {
            text: "13-options请求",
            link: "/前端基础知识/13-options请求",
        },
        {
            text: "14-总结",
            link: "/前端基础知识/14-总结",
        },
        {
            text: "x1-文本小节-前端知识体系",
            link: "/前端基础知识/x1-文本小节-前端知识体系",
        },
        {
            text: "x2-文本小节-Restful-API-method",
            link: "/前端基础知识/x2-文本小节-Restful-API-method",
        },
    ],
    数据结构和算法: [
        { text: "00-开始", link: "/数据结构和算法/00-开始" }, // /config/index.md
        {
            text: "01-旋转数组",
            link: "/数据结构和算法/01-旋转数组",
        },
        {
            text: "02-括号匹配",
            link: "/数据结构和算法/02-括号匹配",
        },
        {
            text: "03-用两个栈实现一个队列",
            link: "/数据结构和算法/03-用两个栈实现一个队列",
        },
        {
            text: "04-反转链表",
            link: "/数据结构和算法/04-反转链表",
        },
        {
            text: "05-二分查找",
            link: "/数据结构和算法/05-二分查找",
        },
        {
            text: "06-两数之和",
            link: "/数据结构和算法/06-两数之和",
        },
        {
            text: "07-BST第K小值",
            link: "/数据结构和算法/07-BST第K小值",
        },
        {
            text: "08-为何二叉树重要",
            link: "/数据结构和算法/08-为何二叉树重要",
        },
        {
            text: "09-斐波那契数列",
            link: "/数据结构和算法/09-斐波那契数列",
        },
        {
            text: "10-移动0",
            link: "/数据结构和算法/10-移动0",
        },
        {
            text: "11-连续最多的字符",
            link: "/数据结构和算法/11-连续最多的字符",
        },
        {
            text: "12-快速排序",
            link: "/数据结构和算法/12-快速排序",
        },
        {
            text: "13-回文数字",
            link: "/数据结构和算法/13-回文数字",
        },
        {
            text: "14-字符串前缀匹配",
            link: "/数据结构和算法/14-字符串前缀匹配",
        },
        {
            text: "15-数字千分位",
            link: "/数据结构和算法/15-数字千分位",
        },
        {
            text: "16-切换字母大小写",
            link: "/数据结构和算法/16-切换字母大小写",
        },
        {
            text: "17-小数相加",
            link: "/数据结构和算法/17-小数相加",
        },
        {
            text: "18-总结",
            link: "/数据结构和算法/18-总结",
        },
        {
            text: "x1-文本小节-常见数据结构",
            link: "/数据结构和算法/x1-文本小节-常见数据结构",
        },
        {
            text: "x2-文本小节-常见算法时间复杂度",
            link: "/数据结构和算法/x2-文本小节-常见算法时间复杂度",
        },
    ],
    编写高质量代码: [
        { text: "00-开始", link: "/编写高质量代码/00-开始" },
        {
            text: "01-文本小节-高质量代码的特点",
            link: "/编写高质量代码/01-文本小节-高质量代码的特点",
        },
        {
            text: "02-array-flatten",
            link: "/编写高质量代码/02-array-flatten",
        },
        {
            text: "03-类型判断",
            link: "/编写高质量代码/03-类型判断",
        },
        {
            text: "04-手写new",
            link: "/编写高质量代码/04-手写new",
        },
        {
            text: "05-遍历DOM树",
            link: "/编写高质量代码/05-遍历DOM树",
        },
        {
            text: "06-手写lazyman",
            link: "/编写高质量代码/06-手写lazyman",
        },
        {
            text: "07-curry-add",
            link: "/编写高质量代码/07-curry-add",
        },
        {
            text: "08-手写instanceof",
            link: "/编写高质量代码/08-手写instanceof",
        },
        {
            text: "09-手写函数bind",
            link: "/编写高质量代码/09-手写函数bind",
        },
        {
            text: "10-手写event-bus",
            link: "/编写高质量代码/10-手写event-bus",
        },
        {
            text: "11-手写LRU",
            link: "/编写高质量代码/11-手写LRU",
        },
        {
            text: "12-深拷贝",
            link: "/编写高质量代码/12-深拷贝",
        },
        {
            text: "13-文本小节-dom转vdom",
            link: "/编写高质量代码/13-文本小节-dom转vdom",
        },
        {
            text: "14-总结",
            link: "/编写高质量代码/14-总结",
        },
    ],
    分析解决问题: [
        { text: "00-开始", link: "/分析解决问题/00-开始" },
        {
            text: "01-数组转树",
            link: "/分析解决问题/01-数组转树",
        },
        {
            text: "02-连环问-树转数组",
            link: "/分析解决问题/02-连环问-树转数组",
        },
        {
            text: "03-map-parseInt",
            link: "/分析解决问题/03-map-parseInt",
        },
        {
            text: "04-原型",
            link: "/分析解决问题/04-原型",
        },
        {
            text: "05-promise调用顺序",
            link: "/分析解决问题/05-promise调用顺序",
        },
        {
            text: "06-react-setState",
            link: "/分析解决问题/06-react-setState",
        },
        {
            text: "07-对象赋值",
            link: "/分析解决问题/07-对象赋值",
        },
        {
            text: "08-对象属性赋值",
            link: "/分析解决问题/08-对象属性赋值",
        },
        {
            text: "09-函数参数",
            link: "/分析解决问题/09-函数参数",
        },
        {
            text: "10-文本小节-解决问题的常见思路",
            link: "/分析解决问题/10-文本小节-解决问题的常见思路",
        },
        {
            text: "11-总结",
            link: "/分析解决问题/11-总结",
        },
    ],
    软技能: [
        { text: "00-开始", link: "/软技能/00-开始" },
        {
            text: "01-是否看过红宝书",
            link: "/软技能/01-是否看过红宝书",
        },
        {
            text: "02-如何做code-review",
            link: "/软技能/02-如何做code-review",
        },
        {
            text: "03-如何学习一门新语言",
            link: "/软技能/03-如何学习一门新语言",
        },
        {
            text: "04-你目前有和不足",
            link: "/软技能/04-你目前有和不足",
        },
        {
            text: "05-总结",
            link: "/软技能/05-总结",
        },
    ],
    项目设计: [
        { text: "00-开始", link: "/项目设计/00-开始" },
        {
            text: "01-文本小节-项目负责人的职责",
            link: "/项目设计/01-文本小节-项目负责人的职责",
        },
        {
            text: "02-忽略",
            link: "/项目设计/02-忽略",
        },
        {
            text: "03-前端统计sdk",
            link: "/项目设计/03-前端统计sdk",
        },
        {
            text: "04-SPA-MPA",
            link: "/项目设计/04-SPA-MPA",
        },
        {
            text: "05-H5编辑器",
            link: "/项目设计/05-H5编辑器",
        },
        {
            text: "06-文本小节-何时使用SSR",
            link: "/项目设计/06-文本小节-何时使用SSR",
        },
        {
            text: "07-角色权限模型",
            link: "/项目设计/07-角色权限模型",
        },
        {
            text: "08-hybrid更新机制",
            link: "/项目设计/08-hybrid更新机制",
        },
        {
            text: "09-H5抽奖页",
            link: "/项目设计/09-H5抽奖页",
        },
        {
            text: "10-排查性10-技术选型",
            link: "/项目设计/10-技术选型",
        },
        {
            text: "11-图片懒加载",
            link: "/项目设计/11-图片懒加载",
        },
        {
            text: "12-文本小节-B端-C端",
            link: "/项目设计/12-文本小节-B端-C端",
        },
        {
            text: "13-总结",
            link: "/项目设计/13-总结",
        },
    ],
    知识广度: [
        { text: "00-开始", link: "/知识广度/00-开始" },
        {
            text: "01-移动端click-300ms-延迟",
            link: "/知识广度/01-移动端click-300ms-延迟",
        },
        {
            text: "02-文本小节-Retina屏幕1px宽度",
            link: "/知识广度/02-文本小节-Retina屏幕1px宽度",
        },
        {
            text: "03-token和cookie区别",
            link: "/知识广度/03-token和cookie区别",
        },
        {
            text: "04-http-udp区别",
            link: "/知识广度/04-http-udp区别",
        },
        {
            text: "05-https中间人攻击",
            link: "/知识广度/05-https中间人攻击",
        },
        {
            text: "06-defer和async",
            link: "/知识广度/06-defer和async",
        },
        {
            text: "07-前端攻击",
            link: "/知识广度/07-前端攻击",
        },
        {
            text: "08-websocket",
            link: "/知识广度/08-websocket",
        },
        {
            text: "09-输入url到页面展示",
            link: "/知识广度/09-输入url到页面展示",
        },
        {
            text: "10-网页多标签通讯",
            link: "/知识广度/10-网页多标签通讯",
        },
        {
            text: "11-koa2洋葱圈模型",
            link: "/知识广度/11-koa2洋葱圈模型",
        },
        {
            text: "12-文本小节-为何需要nodejs",
            link: "/知识广度/12-文本小节-为何需要nodejs",
        },
        {
            text: "13-总结",
            link: "/知识广度/13-总结",
        },
    ],
    知识深度: [
        { text: "00-开始", link: "/知识深度/00-开始" },
        {
            text: "01-JS内存泄漏",
            link: "/知识深度/01-JS内存泄漏",
        },
        {
            text: "02-浏览器和nodejs事件循环的区别",
            link: "/知识深度/02-浏览器和nodejs事件循环的区别",
        },
        {
            text: "03-忽略",
            link: "/知识深度/03-忽略",
        },
        {
            text: "04-vdom真的很快吗",
            link: "/知识深度/04-vdom真的很快吗",
        },
        {
            text: "05-for-vs-forEach",
            link: "/知识深度/05-for-vs-forEach",
        },
        {
            text: "06-nodejs多进程",
            link: "/知识深度/06-nodejs多进程",
        },
        {
            text: "07-js-bridge原理",
            link: "/知识深度/07-js-bridge原理",
        },
        {
            text: "08-requestIdleCallback",
            link: "/知识深度/08-requestIdleCallback",
        },
        {
            text: "09-Vue生命周期",
            link: "/知识深度/09-Vue生命周期",
        },
        {
            text: "10-vue-react-diff",
            link: "/知识深度/10-vue-react-diff",
        },
        {
            text: "11-vue-router-模式",
            link: "/知识深度/11-vue-router-模式",
        },
        {
            text: "12-总结",
            link: "/知识深度/12-总结",
        },
        {
            text: "x1-文本小节-知识深度很重要",
            link: "/知识深度/x1-文本小节-知识深度很重要",
        },
    ],
    实际工作经验: [
        { text: "00-开始", link: "/实际工作经验/00-开始" },
        {
            text: "01-首屏优化",
            link: "/实际工作经验/01-首屏优化",
        },
        {
            text: "02-渲染10w条数据",
            link: "/实际工作经验/02-渲染10w条数据",
        },
        {
            text: "03-文本小节-用CSS实现文字超出省略",
            link: "/实际工作经验/03-文本小节-用CSS实现文字超出省略",
        },
        {
            text: "04-设计模式",
            link: "/实际工作经验/04-设计模式",
        },
        {
            text: "05-vue优化",
            link: "/实际工作经验/05-vue优化",
        },
        {
            text: "06-react优化",
            link: "/实际工作经验/06-react优化",
        },
        {
            text: "07-忽略本节",
            link: "/实际工作经验/07-忽略本节",
        },
        {
            text: "08-vue错误监听",
            link: "/实际工作经验/08-vue错误监听",
        },
        {
            text: "09-react错误监听",
            link: "/实际工作经验/09-react错误监听",
        },
        {
            text: "10-排查性能问题",
            link: "/实际工作经验/10-排查性能问题",
        },
        {
            text: "11-项目难点",
            link: "/实际工作经验/11-项目难点",
        },
        {
            text: "12-文本小节-处理项目沟通冲突",
            link: "/实际工作经验/12-文本小节-处理项目沟通冲突",
        },
        {
            text: "13-总结",
            link: "/实际工作经验/13-总结",
        },
    ],
    面试笔记: [{ text: "总结", link: "/面试笔记/总结" }],
};
export default {
    title: "wint",
    description: "Just playing around.",
    outlineTitle: "In hac pagina",
    lastUpdated: true,
    base: "/",
    themeConfig: {
        logo: "/logo.png",
        siteTitle: "wint",
        nav: [
            {
                text: "面试笔记",
                items: router["面试笔记"],
            },
            {
                text: "前端面试100问",
                items: [
                    { text: "前端基础知识", link: "/前端基础知识/00-开始" },
                    { text: "数据结构和算法", link: "/数据结构和算法/00-开始" },
                    { text: "编写高质量代码", link: "/编写高质量代码/00-开始" },
                    { text: "分析解决问题", link: "/分析解决问题/00-开始" },
                    { text: "软技能", link: "/软技能/00-开始" },
                    { text: "项目设计", link: "/项目设计/00-开始" },
                    { text: "知识广度", link: "/知识广度/00-开始" },
                    { text: "知识深度", link: "/知识深度/00-开始" },
                    { text: "实际工作经验", link: "/实际工作经验/00-开始" },
                ],
            },
        ],
        sidebar: {
            "/面试笔记/": [
                {
                    text: "面试笔记",
                    items: router["面试笔记"],
                },
            ],
            "/前端基础知识/": [
                {
                    text: "前端基础知识",
                    items: router["前端基础知识"],
                },
            ],
            "/数据结构和算法/": [
                {
                    text: "数据结构和算法",
                    items: router["数据结构和算法"],
                },
            ],
            "/编写高质量代码/": [
                {
                    text: "编写高质量代码",
                    items: router["编写高质量代码"],
                },
            ],
            "/分析解决问题/": [
                {
                    text: "分析解决问题",
                    items: router["分析解决问题"],
                },
            ],
            "/软技能/": [
                {
                    text: "软技能",
                    items: router["软技能"],
                },
            ],
            "/项目设计/": [
                {
                    text: "项目设计",
                    items: router["项目设计"],
                },
            ],
            "/知识广度/": [
                {
                    text: "知识广度",
                    items: router["知识广度"],
                },
            ],
            "/知识深度/": [
                {
                    text: "知识深度",
                    items: router["知识深度"],
                },
            ],
            "/实际工作经验/": [
                {
                    text: "实际工作经验",
                    items: router["实际工作经验"],
                },
            ],
        },
        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
            // { icon: "twitter", link: "..." },
        ],
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2022-present Wint",
        },
        editLink: {
            pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
            text: "Edit this page on GitHub",
        },
        lastUpdatedText: "Updated Date",
        carbonAds: {
            code: "your-carbon-code",
            placement: "your-carbon-placement",
        },
        docFooter: {
            prev: "上一篇",
            next: "下一篇",
        },
    },
};
