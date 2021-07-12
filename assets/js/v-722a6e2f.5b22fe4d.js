(self.webpackChunknote=self.webpackChunknote||[]).push([[588],{945:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-722a6e2f",path:"/write/3.html",title:"3、数组方法底层实现",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Array.prototype.push",slug:"array-prototype-push",children:[]},{level:2,title:"Array.prototype.pop",slug:"array-prototype-pop",children:[]},{level:2,title:"Array.prototype.map",slug:"array-prototype-map",children:[]},{level:2,title:"Array.prototype.reduce",slug:"array-prototype-reduce",children:[]}],filePathRelative:"write/3.md"}},9438:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="_3、数组方法底层实现" tabindex="-1"><a class="header-anchor" href="#_3、数组方法底层实现" aria-hidden="true">#</a> 3、数组方法底层实现</h1><h2 id="array-prototype-push" tabindex="-1"><a class="header-anchor" href="#array-prototype-push" aria-hidden="true">#</a> Array.prototype.push</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">push</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ECMA规范规定转为对象进行操作</span>\n  <span class="token keyword">let</span> <span class="token constant">O</span> <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 无符号右移保证length是数字</span>\n  <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> argCount <span class="token operator">=</span> items<span class="token punctuation">.</span>length <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token comment">// js能表示的最大正整数为2 ** 53 - 1</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">+</span> argCount <span class="token operator">&gt;</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">53</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&quot;数组长度超过最大值&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 将传入的值依次传入到原数组中</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> argCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token constant">O</span><span class="token punctuation">[</span><span class="token keyword">let</span> <span class="token operator">+</span> i<span class="token punctuation">]</span> <span class="token operator">=</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 设置新的length并返回</span>\n  <span class="token keyword">let</span> newLength <span class="token operator">=</span> len <span class="token operator">+</span> argCount<span class="token punctuation">;</span>\n  <span class="token constant">O</span><span class="token punctuation">.</span>length <span class="token operator">=</span> newLength<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> newLength<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="array-prototype-pop" tabindex="-1"><a class="header-anchor" href="#array-prototype-pop" aria-hidden="true">#</a> Array.prototype.pop</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> <span class="token constant">O</span> <span class="token operator">=</span> <span class="token function">object</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token comment">// 长度为0的数组直接返回undefined</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token constant">O</span><span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 删除最后一位元素，修改length值</span>\n  len<span class="token operator">--</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token constant">O</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">delete</span> <span class="token constant">O</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token constant">O</span><span class="token punctuation">.</span>length <span class="token operator">=</span> len<span class="token punctuation">;</span>\n  <span class="token comment">// 返回被删除的值</span>\n  <span class="token keyword">return</span> value<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="array-prototype-map" tabindex="-1"><a class="header-anchor" href="#array-prototype-map" aria-hidden="true">#</a> Array.prototype.map</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">map</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">callbackFn<span class="token punctuation">,</span> thisArg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// null和undefined判断</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token keyword">this</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&quot;Cannot read property &#39;map&#39; of null&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// callbackFn必须为函数</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>callbackFn<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">&quot;[object Function]&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span>callbackFn <span class="token operator">+</span> <span class="token string">&quot; is not a function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">let</span> <span class="token constant">O</span> <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> <span class="token constant">T</span> <span class="token operator">=</span> thisArg<span class="token punctuation">;</span>\n  <span class="token comment">// 定义一个与原数组长度相同的新数组</span>\n  <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token constant">O</span><span class="token punctuation">.</span>length <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> <span class="token constant">A</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 判断当前项存在时才执行操作</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token constant">O</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> iValue <span class="token operator">=</span> <span class="token constant">O</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token comment">// map callback的3个参数为当前项，当前索引，以及整个数组</span>\n      <span class="token keyword">let</span> mapedValue <span class="token operator">=</span> <span class="token function">callbackFn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token constant">T</span><span class="token punctuation">,</span> iValue<span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token constant">O</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token comment">// 执行结果传入新数组</span>\n      <span class="token constant">A</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> mapedValue<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 返回新数组</span>\n  <span class="token keyword">return</span> <span class="token constant">A</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="array-prototype-reduce" tabindex="-1"><a class="header-anchor" href="#array-prototype-reduce" aria-hidden="true">#</a> Array.prototype.reduce</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">reduce</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">callbackFn<span class="token punctuation">,</span> initialValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token keyword">this</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&quot;Cannot read property &#39;reduce&#39; of null&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>callbackfn<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">&quot;[object Function]&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span>callbackfn <span class="token operator">+</span> <span class="token string">&quot; is not a function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">let</span> <span class="token constant">O</span> <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token constant">O</span><span class="token punctuation">.</span>length <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token comment">// 第二个参数为初始值</span>\n  <span class="token keyword">let</span> accumulator <span class="token operator">=</span> initialValue<span class="token punctuation">;</span>\n  <span class="token comment">// 处理初始值未传的情况，将数组第一个有效的值设为初始值</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>accumulator <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>k <span class="token keyword">in</span> <span class="token constant">O</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        accumulator <span class="token operator">=</span> <span class="token constant">O</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        k<span class="token operator">++</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 未找到有效初始值则抛出错误</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>accumulator <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Each element of the array is empty&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 遍历数组执行归并</span>\n  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span>k <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token keyword">in</span> <span class="token constant">O</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 归并执行callbackfn，传入的参数为，前一项，当前项和整个数组</span>\n      accumulator <span class="token operator">=</span> <span class="token function">callbackfn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> accumulator<span class="token punctuation">,</span> <span class="token constant">O</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">O</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 返回归并结果</span>\n  <span class="token keyword">return</span> accumulator<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>',9),t={render:function(n,s){return p}}}}]);