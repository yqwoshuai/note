(self.webpackChunknote=self.webpackChunknote||[]).push([[1274],{5976:(t,r,a)=>{"use strict";a.r(r),a.d(r,{data:()=>e});const e={key:"v-cfd0f9f8",path:"/js-develop/2.html",title:"第二章、在HTML中使用JavaScript",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"<script>元素",slug:"script-元素",children:[]}],filePathRelative:"js-develop/2.md"}},2187:(t,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>c});const e=(0,a(6252).uE)('<h1 id="第二章、在html中使用javascript" tabindex="-1"><a class="header-anchor" href="#第二章、在html中使用javascript" aria-hidden="true">#</a> 第二章、在HTML中使用JavaScript</h1><h2 id="script-元素" tabindex="-1"><a class="header-anchor" href="#script-元素" aria-hidden="true">#</a> &lt;script&gt;元素</h2><p>&lt;script&gt;的属性：<br> async：可选，表示应该立即下载脚本，但不应妨碍页面中的其他操作。只对外部脚本文件有效。标记为async的脚本是异步加载的，并不保证按照指定他们的先后顺序执行。<br> charset：可选，表示通过src属性指定的代码的字符集。<br> defer：可选，表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本有效。<br> src：可选，表示包含的要执行代码的外部文件。<br> type：可选，表示编写代码使用的脚本语言的内容类型，默认为text/javascript。</p><p>&lt;script&gt;元素内部的JavaScript代码将被从上至下依次解释。代码中遇到&lt;/script&gt;使用“\\”进行转译，写成&lt;\\/script&gt;。</p><p>带有src属性的&lt;script&gt;元素内部的代码会被忽略，在页面&lt;body&gt;元素的最后引入JavaScript。 使用&lt;noscript&gt;元素可以在禁用了JavaScript的页面中显示内容。</p><p>现代web应用程序一般把全部JavaScript引用放在&lt;body&gt;元素中页面内容的后面。</p><p>使用&lt;noscript&gt;元素可以指定在不支持脚本的浏览器中显示的替代内容。</p>',7),c={render:function(t,r){return e}}}}]);