module.exports = {
  base: "/note/",
  dest: "./dist",
  title: "前端学习笔记",
  themeConfig: {
    sidebar: [
      {
        title: "《javascript高级程序设计》",
        children: [
          "js-develop/1",
          "js-develop/2",
          "js-develop/3",
          "js-develop/4",
          "js-develop/5"
        ]
      },
      {
        title: "各类知识点系列",
        children: [
          "other-know/1"
        ]
      }
    ]
  }
};
