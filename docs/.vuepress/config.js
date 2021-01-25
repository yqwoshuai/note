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
          "js-nijia/7",
          "js-nijia/8"
        ]
      },
      {
        title: "《JavaScript数据结构与算法》",
        children: [
          "js-algorithms/1",
          "js-algorithms/2",
          "js-algorithms/3",
          "js-algorithms/4",
          "js-algorithms/5",
          "js-algorithms/7"
        ]
      },
      {
        title: "《JavaScript设计模式》",
        children: ["js-design/1", "js-design/2"]
      },
      {
        title: "《高性能JavaScript》",
        children: ["js-perter/1"]
      },
      {
        title: "《深入浅出webpack》",
        children: ["webpack-base/1", "webpack-base/2", "webpack-base/3", "webpack-base/5"]
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
          "css-secret/11",
          "css-secret/12",
          "css-secret/13",
          "css-secret/14",
          "css-secret/15",
          "css-secret/16",
          "css-secret/17",
          "css-secret/18",
          "css-secret/19",
          "css-secret/20",
          "css-secret/21",
          "css-secret/22",
          "css-secret/23",
          "css-secret/24",
          "css-secret/25",
          "css-secret/26",
          "css-secret/27",
          "css-secret/28",
          "css-secret/29",
          "css-secret/30",
          "css-secret/31",
          "css-secret/32",
          "css-secret/33",
          "css-secret/34",
          "css-secret/35",
          "css-secret/36",
          "css-secret/37",
          "css-secret/38",
          "css-secret/39",
          "css-secret/40"
        ]
      },
      // {
      //   title: "vue2.0源码解析学习笔记",
      //   children: ["vue-core2/1"]
      // },
      // {
      //   title: "vue3.0源码解析学习笔记",
      //   children: ["vue-core3/1"]
      // },
      {
        title: "数据结构与算法学习笔记",
        children: [
          "algorithms-exercises/1",
          "algorithms-exercises/2",
          "algorithms-exercises/3",
          "algorithms-exercises/4",
          "algorithms-exercises/5"
        ]
      },
      {
        title: "各类知识点系列",
        children: ["other-know/1", "other-know/2", "other-know/3"]
      },
      {
        title: "手写系列",
        children: ["write/1", "write/2"]
      }
    ]
  }
};