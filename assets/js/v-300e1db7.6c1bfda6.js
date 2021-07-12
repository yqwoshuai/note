(self.webpackChunknote=self.webpackChunknote||[]).push([[6524],{1289:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-300e1db7",path:"/css-secret/28.html",title:"第二十八章、背景弱化",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"阴影弱化",slug:"阴影弱化",children:[]},{level:2,title:"模糊弱化",slug:"模糊弱化",children:[]}],filePathRelative:"css-secret/28.md"}},4357:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="第二十八章、背景弱化" tabindex="-1"><a class="header-anchor" href="#第二十八章、背景弱化" aria-hidden="true">#</a> 第二十八章、背景弱化</h1><h2 id="阴影弱化" tabindex="-1"><a class="header-anchor" href="#阴影弱化" aria-hidden="true">#</a> 阴影弱化</h2><p>通常实现遮罩层是使用两个元素</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;div class=&quot;wrap&quot;&gt;  //遮罩层\n    &lt;div class=&quot;con&quot;&gt;  //主内容层\n        \n    &lt;/div&gt;\n&lt;/div&gt;\n\n.wrap</span><span class="token punctuation">{</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.8<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>配合固定定位或者页面没有滚动时，可以是用box-shadow方案来消除额外的HTML元素</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;div class=&quot;con&quot;&gt;  //主内容层\n\n&lt;/div&gt;\n\n.con</span><span class="token punctuation">{</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 0 9999px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.8<span class="token punctuation">)</span><span class="token punctuation">;</span>  // 给一个巨大的扩张半径，让阴影来实现遮罩\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>box-shadow方案的缺陷在于无法防止鼠标与页面发生交互，只能在视觉上起到遮罩的作用</p><h2 id="模糊弱化" tabindex="-1"><a class="header-anchor" href="#模糊弱化" aria-hidden="true">#</a> 模糊弱化</h2><p>将网页上其他内容都用一个元素包裹起来，与弹出框形成兄弟元素，对这个元素使用滤镜</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;main class=&quot;wrap&quot;&gt;\n    //主内容\n&lt;/main&gt;\n&lt;div class=&quot;con&quot;&gt;\n  //弹出框\n&lt;/div&gt; \n\nmain.wrap</span><span class="token punctuation">{</span>   //通过JS给main元素添加wrap类就可以实现模糊效果\n    <span class="token property">filter</span><span class="token punctuation">:</span><span class="token function">blur</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">transtion</span><span class="token punctuation">:</span> .5s filter  // 模糊可以使用CSS3渐变实现动画\n<span class="token punctuation">}</span>\n<span class="token selector">.con</span><span class="token punctuation">{</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div align="center"><img src="/note/images/css-secret/28/1.png"></div>',11),e={render:function(n,s){return p}}}}]);