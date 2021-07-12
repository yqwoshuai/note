(self.webpackChunknote=self.webpackChunknote||[]).push([[2718],{2705:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>p});const p={key:"v-10839d90",path:"/css-secret/16.html",title:"第十六章、单侧投影",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"css-secret/16.md"}},6524:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="第十六章、单侧投影" tabindex="-1"><a class="header-anchor" href="#第十六章、单侧投影" aria-hidden="true">#</a> 第十六章、单侧投影</h1><p>box-shadow属性的第四个参数扩张半径还可以接受负数。指定为负数时，它会相应的缩小投影的尺寸。一个-5px的扩张半径会让投影的4个边都减少5px的大小。所以，当模糊半径的大小与扩张半径的大小相互抵消（一个为正一个为负，绝对值相等），并且X与Y方向的偏移量都为0时，将完全看不到投影。利用这一特点，只给X或者Y起中一个方向给偏移量，就可以实现单侧投影。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 10px 10px -10px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.8<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div align="center"><img src="/note/images/css-secret/16/1.png"></div><p>当扩张半径为模糊半径的一半且为负值时，可以将相邻的两侧阴影显示，并将另外两侧的阴影隐藏起来。注意此时扩展半径要和偏移量完全抵消才能完全隐藏阴影</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 10px 20px -10px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.8<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div align="center"><img src="/note/images/css-secret/16/2.png"></div><p>当要实现双侧投影时，因为扩张半径在4个方向上的抵消量都是相同的，所以只用一层阴影无法实现，可以利用两次单侧阴影的技巧，让两个阴影叠加在同一元素上。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 0 10px -10px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.8<span class="token punctuation">)</span><span class="token punctuation">,</span>\n            -10px 0 10px -10px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.8<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div align="center"><img src="/note/images/css-secret/16/3.png"></div>',10),t={render:function(s,n){return p}}}}]);