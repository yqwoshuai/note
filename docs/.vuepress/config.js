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
          "js-develop/5",
          "js-develop/6",
          "js-develop/8",
          "js-develop/10",
          "js-develop/11",
          "js-develop/12",
          "js-develop/13",
          "js-develop/14",
          "js-develop/20"
        ]
      },
      {
        title: "《JavaScript忍者秘籍》",
        children: [
          "js-nijia/1",
          "js-nijia/2",
          "js-nijia/3",
          "js-nijia/4",
          "js-nijia/5",
          "js-nijia/6",
          "js-nijia/7", "js-nijia/8"
        ]
      },
      {
        title: "《JavaScript数据结构与算法》",
        children: ["js-algorithms/1", "js-algorithms/2", "js-algorithms/3", "js-algorithms/4", "js-algorithms/5"]
      },
      {
        title: "《JavaScript设计模式》",
        children: ["js-design/1", "js-design/2"]
      },
      {
        title: "《深入浅出webpack》",
        children: ["webpack-base/1"]
      },
      {
        title: "《css揭秘》",
        children: [
          "css-secret/1",
          "css-secret/2",
          "css-secret/3",
          "css-secret/4",
          "css-secret/5",
          "css-secret/6",
          "css-secret/7",
          "css-secret/8",
          "css-secret/9",
          "css-secret/10",
          "css-secret/11"
        ]
      },
      {
        title: "vue源码解析学习笔记",
        children: ["vue-core/1"]
      },
      {
        title: "数据结构与算法学习笔记",
        children: ["algorithms-exercises/1"]
      },
      {
        title: "各类知识点系列",
        children: ["other-know/1", "other-know/2", "other-know/3"]
      }
    ]
  }
};