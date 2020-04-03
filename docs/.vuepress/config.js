module.exports = {
  base: "/note/",
  dest: "./dist",
  title: "前端学习笔记",
  themeConfig: {
    sidebar: [
      {
        title: "《javascript高级程序设计》",
        children: [
          "jsdevelop/1",
          "jsdevelop/2",
          "jsdevelop/3",
          "jsdevelop/4",
          "jsdevelop/5"
        ]
      }
    ]
  }
};
