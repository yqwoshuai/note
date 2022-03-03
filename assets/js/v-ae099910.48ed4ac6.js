(self.webpackChunknote=self.webpackChunknote||[]).push([[1812],{3619:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-ae099910",path:"/vue-design/2.html",title:"第二章、框架设计的核心要素",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"vue-design/2.md"}},2570:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="第二章、框架设计的核心要素" tabindex="-1"><a class="header-anchor" href="#第二章、框架设计的核心要素" aria-hidden="true">#</a> 第二章、框架设计的核心要素</h1><p>1、在开发环境下抛出有意义的警告信息，利用Tree-Sharking机制，预定义__DEV__常量，实现仅在开发环境下输出警告信息。</p><p>2、使用<code>/*#__PURE__*/</code>注释，辅助构建工具进行Tree-Sharking。</p><p>3、输出IIFE格式满足用户直接通过<code>&lt;script&gt;</code>引用，输出ESM格式满足用户通过<code>&lt;script type=&quot;module&quot;&gt;</code>引用，ESM有两种格式：用于浏览器的会将<code>__DEV__</code>替换为字面量<code>true</code>或<code>false</code>，用于打包工具的会替换为<code>process.env.NODE_ENV !== &#39;production&#39;</code>。</p><p>4、用户可以通过特性开关关闭对应的特性，这样在打包的时候可以Tree-Sharking减少打包体积。Vue3可以通过特性关闭 options API。</p><p>5、良好的错误处理，统一报错接口。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> handlerError <span class="token operator">=</span> <span class="token keyword">null</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 封装统一的错误处理函数进行报错处理</span>\n        <span class="token function">callWithErrorHandling</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// 通过该函数，用户可以自定义注册统一的错误处理函数</span>\n    <span class="token function">registerErrorHandle</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        handlerError <span class="token operator">=</span> fn\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">callWithErrorHandling</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        fn <span class="token operator">&amp;&amp;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        handlerError <span class="token operator">&amp;&amp;</span> <span class="token function">handlerError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Vue中注册统一的错误处理函数</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;App.vue&#39;</span>\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function-variable function">errorHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 处理报错</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>6、良好的TypeScript类型支持</p>',8),e={render:function(n,s){return p}}}}]);