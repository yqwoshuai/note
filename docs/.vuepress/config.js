module.exports = {
    base: "/note/",
    dest: "./dist",
    title: "前端学习笔记",
    themeConfig: {
        sidebar: [{
                title: "《JavaScript高级程序设计》",
                children: [
                    "js-develop/1",
                    "js-develop/2",
                    "js-develop/3",
                    "js-develop/4",
                    "js-develop/5"
                ]
            },
            {
                title: "《JavaScript忍者秘籍》",
                children: [
                    "js-nijia/1"
                ]
            },
            {
                title: "《JavaScript数据结构与算法》",
                children: [
                    "js-algorithms/1",
                    "js-algorithms/2"
                ]
            },
            {
                title: "《JavaScript设计模式》",
                children: [
                    "js-design/1",
                    "js-design/2"
                ]
            },
            {
                title: "各类知识点系列",
                children: [
                    "other-know/1",
                    "other-know/2",
                    "other-know/3"
                ]
            }
        ]
    }
};