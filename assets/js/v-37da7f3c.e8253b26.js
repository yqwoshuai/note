(self.webpackChunknote=self.webpackChunknote||[]).push([[9960],{1229:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-37da7f3c",path:"/js-develop/11.html",title:"第十一章、DOM扩展",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"选择符API",slug:"选择符api",children:[]},{level:2,title:"元素遍历",slug:"元素遍历",children:[]},{level:2,title:"HTML5",slug:"html5",children:[{level:3,title:"与类相关扩充",slug:"与类相关扩充",children:[]},{level:3,title:"焦点管理",slug:"焦点管理",children:[]},{level:3,title:"HTMLDocument变化",slug:"htmldocument变化",children:[]},{level:3,title:"字符集属性",slug:"字符集属性",children:[]},{level:3,title:"自定义数据属性",slug:"自定义数据属性",children:[]},{level:3,title:"插入标记",slug:"插入标记",children:[]},{level:3,title:"scrollIntoView()方法",slug:"scrollintoview-方法",children:[]}]},{level:2,title:"专有扩展",slug:"专有扩展",children:[{level:3,title:"children属性",slug:"children属性",children:[]},{level:3,title:"contains()方法",slug:"contains-方法",children:[]}]}],filePathRelative:"js-develop/11.md"}},4649:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="第十一章、dom扩展" tabindex="-1"><a class="header-anchor" href="#第十一章、dom扩展" aria-hidden="true">#</a> 第十一章、DOM扩展</h1><h2 id="选择符api" tabindex="-1"><a class="header-anchor" href="#选择符api" aria-hidden="true">#</a> 选择符API</h2><p>querySelector()和querySelectorAll()两个方法接收一个CSS选择符，querySelector()返回与该模式匹配的第一个元素，querySelectorAll()返回所有与该模式匹配的元素组成的NodeList实例。可以在document和Element类型上调用这两个方法。<br> matchesSelector()方法接收一个CSS选择符，如果调用该方法的元素与该匹配模式相匹配，则返回true，否则返回false。</p><h2 id="元素遍历" tabindex="-1"><a class="header-anchor" href="#元素遍历" aria-hidden="true">#</a> 元素遍历</h2><p>因为直接获取元素子节点时，元素之间的空白符会解析成文本节点，Element新定义属性。<br> childElementCount，返回子元素的个数。<br> firstElementCount，指向第一个子元素。<br> lastElementCount，指向最后一个子元素。<br> previousElementSibling，指向前一个同辈元素。<br> nextElementSibling，指向后一个同辈元素。<br> 利用这些属性可以不必担心空白的文本节点，它们只会作用在元素节点上。</p><h2 id="html5" tabindex="-1"><a class="header-anchor" href="#html5" aria-hidden="true">#</a> HTML5</h2><h3 id="与类相关扩充" tabindex="-1"><a class="header-anchor" href="#与类相关扩充" aria-hidden="true">#</a> 与类相关扩充</h3><p>getElementsByClassName()方法接收一个参数，即包含一个或多个类名的字符串，返回带有指定类名的元素组成的NodeList。传入多个类名时，先后顺序没有影响。<br> classList属性，是新集合类型DOMTokenList的实例，包含元素所有的类名。具有以下方法：<br> add()，传入字符串参数，为元素添加指定类名。如果已存在则不添加。<br> contains()，传入字符串参数，检测元素是否已包含指定类名，包含则返回true，否则返回false。<br> remove()，传入字符串参数，删除指定的类名。<br> toggle()，传入字符串参数，如果列表中存在该类名，则删除，如果不存在，则添加。</p><h3 id="焦点管理" tabindex="-1"><a class="header-anchor" href="#焦点管理" aria-hidden="true">#</a> 焦点管理</h3><p>document.activeElement属性，始终引用DOM中当前获得了焦点的元素。文档刚刚完成加载时，该属性中保存的是document.body元素的引用。<br> document.hasFocus()方法，判断文档是否获得了焦点。通过检测文档是否获得了焦点，可以知道用户是不是正在与页面交互。</p><h3 id="htmldocument变化" tabindex="-1"><a class="header-anchor" href="#htmldocument变化" aria-hidden="true">#</a> HTMLDocument变化</h3><p>document.readyState属性，该属性有两个可能值：loading表示正在加载文档，complete表示文档加载完毕。<br> document.compatMode属性，表示页面渲染模式是标准还是混杂，标准模式下，其值为“CSS1Compat”，混杂模式下，其值为“BackCompat”。<br> document.head属性，该属性引用文档的&lt;head&gt;元素。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 与onload事件处理程序一起使用</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token string">&quot;complete&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// 执行操作</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 判断网页渲染模式</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>compatMode <span class="token operator">==</span> <span class="token string">&quot;CSS1Compat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;标准模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;混杂模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 兼容性获取head元素</span>\n<span class="token keyword">var</span> head <span class="token operator">=</span> document<span class="token punctuation">.</span>head <span class="token operator">||</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;head&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="字符集属性" tabindex="-1"><a class="header-anchor" href="#字符集属性" aria-hidden="true">#</a> 字符集属性</h3><p>document.charset属性，表示文档中实际使用的字符集，默认值为“UTF-16”，可以修改。<br> document.defaultCharset属性，根据默认浏览器及操作系统设置，表示当前文档的默认字符集。</p><h3 id="自定义数据属性" tabindex="-1"><a class="header-anchor" href="#自定义数据属性" aria-hidden="true">#</a> 自定义数据属性</h3><p>元素可以添加非标准的属性，但要添加data-前缀。为元素提供与渲染无关的信息，或语义信息。添加了自定义属性后，可以通过dataset属性来访问自定义属性的值。属性名没有data-前缀。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>p data<span class="token operator">-</span>myname<span class="token operator">=</span><span class="token string">&quot;a&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>\n\n <span class="token keyword">var</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>myname<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// a</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="插入标记" tabindex="-1"><a class="header-anchor" href="#插入标记" aria-hidden="true">#</a> 插入标记</h3><p>使用插入标记技术，直接插入HTML字符串，比DOM操作更加简单，速度也更快。<br> innerHTML属性，返回调用元素的所有子节点对应的HTML标记，可以修改，会根据指定的值创建新的DOM树，然后用这个DOM树完全替换调用元素原先的所有子节点。<br> outerHTML属性，返回调用元素本身和其所有子节点对应的HTML标记，可以修改，会根据指定的值创建新的DOM树，然后用这个DOM树完全替换调用元素本身和其原先的所有子节点。<br> insertAdjacentHTML()方法，接收两个参数，第一个参数必须为以下值：<br> “beforebegin”，在当前元素前插入一个紧邻的同辈元素。<br> “afterbegin”，在当前元素的第一个子元素之前插入一个新子元素。<br> “beforeend”，在当前元素的最后一个子元素之后插入一个新子元素。<br> “afterend”，在当前元素后插入一个紧邻的同辈元素。<br> 第二个参数为HTML字符串，与innerHTML和outerHTML相同。<br> 多次使用innerHTML会导致性能问题，最好的做法是单独构建好字符串，带一次性将结果字符串赋值给innerHTML。</p><h3 id="scrollintoview-方法" tabindex="-1"><a class="header-anchor" href="#scrollintoview-方法" aria-hidden="true">#</a> scrollIntoView()方法</h3><p>可以在所有元素上调用该方法，让调用元素出现在浏览器视口当中，传入true参数或者不传参数时，元素滚动后会尽量与视口顶部齐平。传入false参数时，元素会尽可能全部出现在视口中（尽可能与底部齐平）。</p><h2 id="专有扩展" tabindex="-1"><a class="header-anchor" href="#专有扩展" aria-hidden="true">#</a> 专有扩展</h2><h3 id="children属性" tabindex="-1"><a class="header-anchor" href="#children属性" aria-hidden="true">#</a> children属性</h3><p>children属性将只包含元素子节点，会忽略元素之间的空白符。当元素只包含元素子节点时，与childNodes相同。</p><h3 id="contains-方法" tabindex="-1"><a class="header-anchor" href="#contains-方法" aria-hidden="true">#</a> contains()方法</h3><p>该方法用于判断一个节点是否为另一个节点的后代，祖先节点调用该方法，接收一个参数，即要检测的后代节点，参数是后代节点则返回true，否则返回false。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;a&quot;</span><span class="token operator">&gt;</span>\n\t<span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">&quot;b&quot;</span><span class="token operator">&gt;</span>abc<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n\n<span class="token keyword">var</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> b <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>compareDocumentPosition()方法也能检测节点之间的关系，返回一个表示两个节点关系的位掩码。<br> 1，无关；<br> 2，居前；<br> 4，局居后；<br> 8，包含；<br> 16，被包含。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> b <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">compareDocumentPosition</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 20（表示居后的4加上表示被包含的16）</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>兼容性检测一个节点是否为某个节点子节点的方法：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">containsNode</span><span class="token punctuation">(</span><span class="token parameter">node1<span class="token punctuation">,</span>node2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> node1<span class="token punctuation">.</span>contains <span class="token operator">==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t    <span class="token keyword">return</span> node1<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>node2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> node1<span class="token punctuation">.</span>compareDocumentPosition <span class="token operator">==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// 对掩码执行按位与，再用两个逻辑非操作符将其转为布尔值</span>\n\t    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>node1<span class="token punctuation">.</span><span class="token function">compareDocumentPosition</span><span class="token punctuation">(</span>node2<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n    <span class="token comment">// 两个方法都不支持则从自身开始向上遍历DOM判断。</span>\n\t    <span class="token keyword">var</span> node <span class="token operator">=</span> node2<span class="token punctuation">.</span>parentNode<span class="token punctuation">;</span>\n\t    <span class="token keyword">do</span><span class="token punctuation">{</span>\n\t        <span class="token keyword">if</span><span class="token punctuation">(</span>node <span class="token operator">===</span> node1<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\t        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n\t            node <span class="token operator">=</span> node<span class="token punctuation">.</span>parentNode<span class="token punctuation">;</span>\n\t        <span class="token punctuation">}</span>\n\t    <span class="token punctuation">}</span><span class="token keyword">while</span> <span class="token punctuation">(</span>node <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>',32),t={render:function(n,s){return e}}}}]);