(self.webpackChunknote=self.webpackChunknote||[]).push([[2043],{2659:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-14a3de50",path:"/grid/",title:"Grid布局相关属性",lang:"zh-CN",frontmatter:{sidebar:"auto"},excerpt:"",headers:[{level:2,title:"容器属性",slug:"容器属性",children:[{level:3,title:"1、grid-template-columns、grid-template-rows",slug:"_1、grid-template-columns、grid-template-rows",children:[]},{level:3,title:"2、grid-row-gap、grid-column-gap、grid-gap",slug:"_2、grid-row-gap、grid-column-gap、grid-gap",children:[]},{level:3,title:"3、grid-template-areas",slug:"_3、grid-template-areas",children:[]},{level:3,title:"4、grid-auto-flow",slug:"_4、grid-auto-flow",children:[]},{level:3,title:"5、justify-items、align-items、place-items",slug:"_5、justify-items、align-items、place-items",children:[]},{level:3,title:"6、justify-content、align-content、place-content",slug:"_6、justify-content、align-content、place-content",children:[]},{level:3,title:"7、grid-template、grid",slug:"_7、grid-template、grid",children:[]}]},{level:2,title:"网格属性",slug:"网格属性",children:[{level:3,title:"1、grid-column-start、grid-column-end、grid-row-start、grid-row-end",slug:"_1、grid-column-start、grid-column-end、grid-row-start、grid-row-end",children:[]},{level:3,title:"2、grid-column、grid-row",slug:"_2、grid-column、grid-row",children:[]},{level:3,title:"3、grid-area",slug:"_3、grid-area",children:[]},{level:3,title:"4、justify-self、align-self、place-self",slug:"_4、justify-self、align-self、place-self",children:[]}]}],filePathRelative:"grid/README.md"}},5195:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="grid布局相关属性" tabindex="-1"><a class="header-anchor" href="#grid布局相关属性" aria-hidden="true">#</a> Grid布局相关属性</h1><p>定义display:grid或inline-grid开启子元素的Grid布局。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>\n    // 行内元素使用 \n    <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>不同于flex布局，grid布局是一种二维布局，它将容器划分为行和列，行和列组成网格，子元素像表格一样按照设置的属性在这些网格中排列。水平的为行，垂直向的为列。行和列交叉就形成网格。</p><p>父元素设置为grid布局之后，子元素的float、display: inline-block、display: table-cell、vertical-align和column-*属性将会失效。</p><h2 id="容器属性" tabindex="-1"><a class="header-anchor" href="#容器属性" aria-hidden="true">#</a> 容器属性</h2><h3 id="_1、grid-template-columns、grid-template-rows" tabindex="-1"><a class="header-anchor" href="#_1、grid-template-columns、grid-template-rows" aria-hidden="true">#</a> 1、grid-template-columns、grid-template-rows</h3><p>grid-template-rows定义每一行的行高，grid-template-columns定义每一列的列宽</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>\n    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 50px 50px 50px<span class="token punctuation">;</span> // 表示分3行，每一行的高度为50px\n    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 50px 50px 50px<span class="token punctuation">;</span>  // 表示分3列，每一列的宽度为50px\n\n    // 支持百分比写法\n    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 33.33% 33.33% 33.33%<span class="token punctuation">;</span>\n    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 33.33% 33.33% 33.33%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div align="center"><img src="/note/images/grid/1.png"></div><p>chrome调试模式下可以看到生成的网格线</p><div align="center"><img src="/note/images/grid/2.png"></div><p>相同的值可以使用repeat()函数进行合并</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>// 表示大小为50px的值，重复3次，表示分3行3列，每一行的行高跟每一列的列宽都是50px\n<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n// 同样支持重复一种模式，表示以50px，60px，70px为一组值重复2次\n// 表示分6行6列，第1、2、3行行高为分别为50px，60px，70px，第4、5、6行的行高为50px，60px，70px，列宽同理\n<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 50px 60px 70px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 50px 60px 70px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div align="center"><img src="/note/images/grid/3.png"></div><div align="center"><img src="/note/images/grid/4.png"></div><p>repeat()函数的auto-fill关键字，表示以某一数值尽可能多的划分网格， 当容器宽度固定时</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>\n    // 当宽度固定时，将以每一列50px的宽度尽可能多的划分网格，此时被划分为了6列\n    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div align="center"><img src="/note/images/grid/5.png"></div><div align="center"><img src="/note/images/grid/6.png"></div><p>fr关键字，是一个单位关键字，表示所有fr单位之间的倍数关系</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>// <span class="token property">表示划分为3列，第一列的宽度为150px，剩下的宽度以1</span><span class="token punctuation">:</span>2的关系分配个第二列和第三列\n<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 150px 1fr 2fr<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div align="center"><img src="/note/images/grid/7.png"></div><div align="center"><img src="/note/images/grid/8.png"></div><p>minmax()函数表示一个范围，接收两个参数，分别为最大值和最小值</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>// 表示动态计算第三列的宽度，最小值为100px，最大值为1fr（与第二列同宽）\n<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 150px 1fr <span class="token function">minmax</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>auto关键字 表示浏览器自动分配，会将剩余可用空间分配给此项</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 150px 50px auto<span class="token punctuation">;</span>  // 将容器剩余宽度分配给第三列\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div align="center"><img src="/note/images/grid/9.png"></div><div align="center"><img src="/note/images/grid/10.png"></div><p>可以给每条网格线命名，在之后的各类属性中可以使用命名对命名好的线进行操作</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">grid-template-columns</span><span class="token punctuation">:</span> [line1] 50px [line2] 50px [line3 line0] 50px [line4]<span class="token punctuation">;</span> // 3列会生成4条竖线，也可以同时给多个命名\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>使用grid可以简单的实现一些常用的布局</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">// 左边菜单栏宽度固定，右边内容区撑满的两栏布局\n.container</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>\n  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 200px auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">// 经典12网格布局\n.container</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>\n  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>12<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_2、grid-row-gap、grid-column-gap、grid-gap" tabindex="-1"><a class="header-anchor" href="#_2、grid-row-gap、grid-column-gap、grid-gap" aria-hidden="true">#</a> 2、grid-row-gap、grid-column-gap、grid-gap</h3><p>grid-row-gap属性设置行之间的间隔，grid-column-gap属性设置列之间的间隔。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>\n  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">grid-row-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span> // 行间距为5px\n  <span class="token property">grid-column-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span> // 列间距为5px\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div align="center"><img src="/note/images/grid/11.png"></div><div align="center"><img src="/note/images/grid/12.png"></div><p>grid-gap为上面两个属性的简写，上面的代码可以写成：</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>\n  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 10px 10px<span class="token punctuation">;</span> // 行间距 列间距\n  // 也可写成\n  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span> // 省略第二个属性表示与第一个相同\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这3个属性的grid-前缀已经可以删除，可以直接写成row-gap、column-gap、gap</p><h3 id="_3、grid-template-areas" tabindex="-1"><a class="header-anchor" href="#_3、grid-template-areas" aria-hidden="true">#</a> 3、grid-template-areas</h3><p>grid-template-areas属性将对所有网格进行命名规划，对网格的命名规划会影响到网格线的命名，网格起始位置的网格线为&#39;网格名称-start&#39;，网格结束位置网格线为&#39;网格名称-end&#39;</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">// 直接对3X3的网格区域做布局命名规划\n// 顶部3个网格组成了hearder区域，起始的网格线名称为header-start，结束位置的网格线名称为header-end\n.container</span> <span class="token punctuation">{</span>\n  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">&quot;header header header&quot;</span>\n                       <span class="token string">&quot;main main sidebar&quot;</span>\n                       <span class="token string">&quot;footer footer footer&quot;</span><span class="token punctuation">;</span>\n  // 如果某些网格不需要规划为某个区域，则直接用.表示\n  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">&#39;a . c&#39;</span>\n                       <span class="token string">&#39;d . f&#39;</span>\n                       <span class="token string">&#39;g . i&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_4、grid-auto-flow" tabindex="-1"><a class="header-anchor" href="#_4、grid-auto-flow" aria-hidden="true">#</a> 4、grid-auto-flow</h3><p>grid-auto-flow属性表示网格排列的方式，属性值默认为row，即先行排列，再列排列</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>\n  // 修改为先列排列，再行排列\n  <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div align="center"><img src="/note/images/grid/13.png"></div><p>还可以加上dense属性，表示当某些网格被安排好特定位置时，剩余的网格如何排列。</p><div align="center"><img src="/note/images/grid/14.png"></div><div align="center"><img src="/note/images/grid/15.png"></div><p>由于第一个网格占据了两个网格宽度，第二个网格在同一行放不下，会选择第二行起始，这样就出现了一个网格的空隙，dense属性可以让之后的网格尽可能的填满这些空隙。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>\n  // 在行方向上尽可能的填满，不留空隙\n  <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> row dense<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div align="center"><img src="/note/images/grid/16.png"></div><h3 id="_5、justify-items、align-items、place-items" tabindex="-1"><a class="header-anchor" href="#_5、justify-items、align-items、place-items" aria-hidden="true">#</a> 5、justify-items、align-items、place-items</h3><p>justify-items属性设置网格中内容在水平方向上的的位置。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>\n  // 在水平方向上居中\n  <span class="token property">justify-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div align="center"><img src="/note/images/grid/17.png"></div><p>align-items属性设置网格中内容在垂直方向上的的位置。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>\n  // 在垂直方向上居中\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div align="center"><img src="/note/images/grid/18.png"></div><p>place-items属性是justify-items和align-items的简写形式，只写一个值时表示两个值相同。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>\n  // 在水平和垂直方向上都居中\n  <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div align="center"><img src="/note/images/grid/19.png"></div><p>这3个属性可以取的值有start（对齐网格的起始位置）、end（对齐网格的结束位置）、center（网格内部居中）、stretch（拉伸，没有规定内容的大小时，占满网格的整个宽度，此值为默认值）。</p><h3 id="_6、justify-content、align-content、place-content" tabindex="-1"><a class="header-anchor" href="#_6、justify-content、align-content、place-content" aria-hidden="true">#</a> 6、justify-content、align-content、place-content</h3><p>justify-content属性设置所有网格组成的内容区域在水平方向上的位置。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>\n  // 所有网格组成的内容区域在水平方向上居中\n  <span class="token property">justify-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div align="center"><img src="/note/images/grid/20.png"></div><p>align-content属性设置所有网格组成的内容区域在垂直方向上的位置。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>\n  // 所有网格组成的内容区域在垂直方向上居中\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div align="center"><img src="/note/images/grid/21.png"></div><p>place-content属性是justify-content和align-content的简写形式，只写一个值时表示两个值相同。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>\n  // 所有网格组成的内容区域在水平和垂直方向上都居中\n  <span class="token property">place-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div align="center"><img src="/note/images/grid/22.png"></div><p>这3个属性可以取的值有：</p><ol><li>start（对齐容器的起始位置，此值为默认值）;</li><li>end（对齐容器的结束位置）;</li><li>center（容器内部居中）;</li><li>stretch（拉伸，没有规定项目的大小时，会占满容器相应方向上的整个宽度）;</li><li>space-around（每个项目两侧的距离相等，会造成项目之间的距离是项目到边缘距离的两倍）;</li><li>space-between（每个网格之间的间隔相等，网格与容器边缘没有间距）;</li><li>space-evenly（在相同的方向上，网格与网格之间，网格与边缘之间的距离全部相等）。</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>\n  <span class="token property">place-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div align="center"><img src="/note/images/grid/23.png"></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>\n  <span class="token property">place-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div align="center"><img src="/note/images/grid/24.png"></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>\n  <span class="token property">place-content</span><span class="token punctuation">:</span> space-evenly<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div align="center"><img src="/note/images/grid/25.png"></div><h3 id="_7、grid-template、grid" tabindex="-1"><a class="header-anchor" href="#_7、grid-template、grid" aria-hidden="true">#</a> 7、grid-template、grid</h3><p>这两个属性都是简写属性。 grid-template是grid-template-columns、grid-template-rows和grid-template-areas这三个属性的简写形式。 grid是grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow这六个属性的简写形式。 简写语义非常不明确，可读性很差，不推荐使用。</p><h2 id="网格属性" tabindex="-1"><a class="header-anchor" href="#网格属性" aria-hidden="true">#</a> 网格属性</h2><h3 id="_1、grid-column-start、grid-column-end、grid-row-start、grid-row-end" tabindex="-1"><a class="header-anchor" href="#_1、grid-column-start、grid-column-end、grid-row-start、grid-row-end" aria-hidden="true">#</a> 1、grid-column-start、grid-column-end、grid-row-start、grid-row-end</h3><p>可以用这4个属性来单独指定某一个网格的位置，grid-column-start表示网格左边框所在的垂直网格线，grid-column-end属性表示网格右边框所在的垂直网格线，grid-row-start属性表示网格上边框所在的水平网格线，grid-row-end属性表示网格下边框所在的水平网格线</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">// 通过指定第一个项目的起始和结束网格线，将第一个项目移动到正中间\n.item-1</span><span class="token punctuation">{</span>\n  <span class="token property">grid-column-start</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span>\n  <span class="token property">grid-column-end</span><span class="token punctuation">:</span>3<span class="token punctuation">;</span>\n  <span class="token property">grid-row-start</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span>\n  <span class="token property">grid-row-end</span><span class="token punctuation">:</span>3<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">// 默认只占一个网格宽度，可以省略结束位置\n.item-1</span><span class="token punctuation">{</span>\n  <span class="token property">grid-column-start</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span>\n  <span class="token property">grid-row-start</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div align="center"><img src="/note/images/grid/26.png"></div><div align="center"><img src="/note/images/grid/27.png"></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">// 水平和垂直方向都从第二个网格线开始，占据两个网格宽度\n.item-1</span><span class="token punctuation">{</span>\n  <span class="token property">grid-column-start</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span>\n  <span class="token property">grid-column-end</span><span class="token punctuation">:</span>4<span class="token punctuation">;</span>\n  <span class="token property">grid-row-start</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span>\n  <span class="token property">grid-row-end</span><span class="token punctuation">:</span>4<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div align="center"><img src="/note/images/grid/28.png"></div><div align="center"><img src="/note/images/grid/29.png"></div><p>前面通过给网格线命名的方式可以在这4个属性上进行应用。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>\n  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> [line1] 50px [line2] 50px [line3 line0] 50px [line4]<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.item-1</span><span class="token punctuation">{</span>\n  <span class="token property">grid-column-start</span><span class="token punctuation">:</span> line2<span class="token punctuation">;</span>\n  <span class="token property">grid-column-end</span><span class="token punctuation">:</span> line4<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div align="center"><img src="/note/images/grid/30.png"></div><div align="center"><img src="/note/images/grid/31.png"></div><p>这4个属性值还有span关键字，表示跨越几个网格</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item-1</span><span class="token punctuation">{</span>\n  <span class="token property">grid-column-start</span><span class="token punctuation">:</span> span 2<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">// 指定结束位置的跨越得到的结果也是一样的\n.item-1</span><span class="token punctuation">{</span>\n  <span class="token property">grid-column-end</span><span class="token punctuation">:</span> span 2<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div align="center"><img src="/note/images/grid/32.png"></div><h3 id="_2、grid-column、grid-row" tabindex="-1"><a class="header-anchor" href="#_2、grid-column、grid-row" aria-hidden="true">#</a> 2、grid-column、grid-row</h3><p>这两个属性都是简写属性。 grid-column是grid-column-start和grid-column-end的简写形式。 grid-row是grid-row-start和grid-row-end的简写形式。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.item-1 {\n  grid-column: 1 / 3;\n  grid-row: 2 / 4;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div align="center"><img src="/note/images/grid/33.png"></div><p>同样可以使用span关键字。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item-1</span> <span class="token punctuation">{</span>\n  <span class="token property">grid-column</span><span class="token punctuation">:</span> span 2<span class="token punctuation">;</span>\n  <span class="token property">grid-row</span><span class="token punctuation">:</span> span 2<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div align="center"><img src="/note/images/grid/34.png"></div><p>只写一项时表示默认跨越1个网格。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item-1</span> <span class="token punctuation">{</span>\n  <span class="token property">grid-column</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>\n  <span class="token property">grid-row</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div align="center"><img src="/note/images/grid/35.png"></div><h3 id="_3、grid-area" tabindex="-1"><a class="header-anchor" href="#_3、grid-area" aria-hidden="true">#</a> 3、grid-area</h3><p>grid-area属性直接指定某个网格位于哪一个命名区域</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>\n  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">&#39;a b c&#39;</span>\n                       <span class="token string">&#39;d e f&#39;</span>\n                       <span class="token string">&#39;g h i&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.item-1</span> <span class="token punctuation">{</span>\n  <span class="token property">grid-area</span><span class="token punctuation">:</span> e<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div align="center"><img src="/note/images/grid/36.png"></div><p>还可以当做grid-column-start、grid-column-end、grid-row-start、grid-row-end这4个属性的简写形式。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item-1</span> <span class="token punctuation">{</span>\n  <span class="token property">grid-area</span><span class="token punctuation">:</span> 2 / 2 / 3 / 3<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div align="center"><img src="/note/images/grid/37.png"></div><h3 id="_4、justify-self、align-self、place-self" tabindex="-1"><a class="header-anchor" href="#_4、justify-self、align-self、place-self" aria-hidden="true">#</a> 4、justify-self、align-self、place-self</h3><p>这3个属性的表现形式和值与容器属性的justify-items、align-items、place-items这3个属性完全一致。只不过只作用于单个网格。</p>',121),p={render:function(n,s){return e}}}}]);