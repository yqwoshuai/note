(self.webpackChunknote=self.webpackChunknote||[]).push([[8181],{9095:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-66a93197",path:"/css-secret/39.html",title:"第三十九章、状态平滑的动画",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"css-secret/39.md"}},5880:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="第三十九章、状态平滑的动画" tabindex="-1"><a class="header-anchor" href="#第三十九章、状态平滑的动画" aria-hidden="true">#</a> 第三十九章、状态平滑的动画</h1><p>CSS3动画中的animation-play-state属性可以控制动画的暂停和继续，动画往往需要类似:hover效果来触发，但是当动画还未执行完成:hover状态就消失的时候，动画会结束然后生硬的跳回初始状态。使用animation-play-state可以是动画在:hover状态消失的时候暂停，再次:hover的时候继续执行动画。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.a</span><span class="token punctuation">{</span>\n\t<span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;1.png&quot;</span><span class="token punctuation">)</span></span> no-repeat left top / auto 100%<span class="token punctuation">;</span>\n\t<span class="token property">animation</span><span class="token punctuation">:</span> bg 4s linear infinite alternate<span class="token punctuation">;</span>\n\t<span class="token property">animation-play-state</span><span class="token punctuation">:</span> paused<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.a:hover</span><span class="token punctuation">{</span>\n\t<span class="token property">animation-play-state</span><span class="token punctuation">:</span> running<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token atrule"><span class="token rule">@keyframes</span> bg</span> <span class="token punctuation">{</span>\n\t<span class="token selector">to</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">background-position</span><span class="token punctuation">:</span>100% 0<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span> \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div align="center"><img src="/note/images/css-secret/39/1.gif"></div>',4),e={render:function(n,s){return t}}}}]);