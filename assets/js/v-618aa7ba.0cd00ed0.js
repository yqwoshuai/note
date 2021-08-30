(self.webpackChunknote=self.webpackChunknote||[]).push([[9488],{7578:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-618aa7ba",path:"/css-secret/36.html",title:"第三十六章、逐帧动画",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"css-secret/36.md"}},9498:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="第三十六章、逐帧动画" tabindex="-1"><a class="header-anchor" href="#第三十六章、逐帧动画" aria-hidden="true">#</a> 第三十六章、逐帧动画</h1><p>使用CSS动画中的steps()调速函数代替贝塞尔曲线的调速函数，可以实现动画在关键帧之间硬切换的效果。 将一张loading的gif图的几个关键帧切出来组合成一张图片，将图片当做背景进行背景移动的动画，可以达到gif图的效果。</p><div align="center"><img src="/note/images/css-secret/36/1.png"></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.tip</span><span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;loader.png&quot;</span><span class="token punctuation">)</span></span> no-repeat<span class="token punctuation">;</span>\n    <span class="token property">animation</span><span class="token punctuation">:</span> 1s blink infinite <span class="token function">steps</span><span class="token punctuation">(</span>8<span class="token punctuation">)</span><span class="token punctuation">;</span> // 整个动画将只展现8个关键帧\n<span class="token punctuation">}</span>\n<span class="token atrule"><span class="token rule">@keyframes</span> blink</span> <span class="token punctuation">{</span>\n    <span class="token selector">to</span> <span class="token punctuation">{</span>\n        <span class="token property">background-position</span><span class="token punctuation">:</span> -800px 0<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div align="center"><img src="/note/images/css-secret/36/2.gif"></div>',5),p={render:function(n,s){return e}}}}]);