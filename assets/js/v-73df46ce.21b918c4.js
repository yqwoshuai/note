(self.webpackChunknote=self.webpackChunknote||[]).push([[2045],{9087:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-73df46ce",path:"/write/4.html",title:"4、异步 demo",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"红绿灯函数",slug:"红绿灯函数",children:[]},{level:2,title:"并发数量控制函数",slug:"并发数量控制函数",children:[]},{level:2,title:"异步队列控制函数",slug:"异步队列控制函数",children:[]}],filePathRelative:"write/4.md"}},7554:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="_4、异步-demo" tabindex="-1"><a class="header-anchor" href="#_4、异步-demo" aria-hidden="true">#</a> 4、异步 demo</h1><h2 id="红绿灯函数" tabindex="-1"><a class="header-anchor" href="#红绿灯函数" aria-hidden="true">#</a> 红绿灯函数</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">task</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">timer<span class="token punctuation">,</span> type</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n\t<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t\t<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span> timer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">step</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">await</span> <span class="token function">task</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">await</span> <span class="token function">task</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">await</span> <span class="token function">task</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token string">&quot;yellow&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token function">step</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">step</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="并发数量控制函数" tabindex="-1"><a class="header-anchor" href="#并发数量控制函数" aria-hidden="true">#</a> 并发数量控制函数</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 需要异步输出的元素</span>\n<span class="token keyword">const</span> idList <span class="token operator">=</span> <span class="token punctuation">[</span>\n\t<span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> time<span class="token operator">:</span> <span class="token number">7222</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> time<span class="token operator">:</span> <span class="token number">5553</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> time<span class="token operator">:</span> <span class="token number">3243</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> time<span class="token operator">:</span> <span class="token number">5215</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> time<span class="token operator">:</span> <span class="token number">3323</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> time<span class="token operator">:</span> <span class="token number">7777</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> time<span class="token operator">:</span> <span class="token number">2222</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 异步执行函数</span>\n<span class="token keyword">function</span> <span class="token function">loadSource</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> time<span class="token punctuation">,</span> id <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t\t<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token function">resolve</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 并发控制函数</span>\n<span class="token keyword">function</span> <span class="token function">loadLimit</span><span class="token punctuation">(</span><span class="token parameter">idList<span class="token punctuation">,</span> load<span class="token punctuation">,</span> limit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// 拷贝数组，后续要对数组做修改，防止修改原数组</span>\n\t<span class="token keyword">const</span> list <span class="token operator">=</span> idList<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token comment">// 小于等于限制条件直接返回</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> limit<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">const</span> promiseArr <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">load</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>promiseArr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// 切割数组发起请求</span>\n\t<span class="token keyword">const</span> promiseArr <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> item<span class="token punctuation">.</span>id<span class="token punctuation">,</span> promiser<span class="token operator">:</span> <span class="token function">load</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token keyword">const</span> <span class="token function-variable function">begin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">idListItem</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t\t<span class="token comment">// 没有需要执行的元素则结束递归</span>\n\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>promiseArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">const</span> nowArr <span class="token operator">=</span> promiseArr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>promiser<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span>nowArr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">finishId</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token comment">// 输出元素</span>\n\t\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>finishId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token comment">// 找到完成加载的元素在数组中的位置，将这个元素删除</span>\n\t\t\t<span class="token keyword">let</span> finishIdPosition <span class="token operator">=</span> promiseArr<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">promiser</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token keyword">return</span> finishId <span class="token operator">===</span> promiser<span class="token punctuation">.</span>id<span class="token punctuation">;</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\tpromiseArr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>finishIdPosition<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token comment">// 删除一个元素后添加下一个元素进入数组</span>\n\t\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>idListItem<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\tpromiseArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id<span class="token operator">:</span> idListItem<span class="token punctuation">.</span>id<span class="token punctuation">,</span> promiser<span class="token operator">:</span> <span class="token function">load</span><span class="token punctuation">(</span>idListItem<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token comment">// 递归执行，如果还有没入队的元素则入队，没有了则直接执行</span>\n\t\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token function">begin</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\t<span class="token function">begin</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">loadLimit</span><span class="token punctuation">(</span>idList<span class="token punctuation">,</span> loadSource<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><h2 id="异步队列控制函数" tabindex="-1"><a class="header-anchor" href="#异步队列控制函数" aria-hidden="true">#</a> 异步队列控制函数</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">delay</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ms</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> ms<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> subFlow <span class="token operator">=</span> <span class="token function">createFlow</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">log</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 要求顺序输出并执行delay延迟</span>\n<span class="token function">createFlow</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n\t<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\tsubFlow<span class="token punctuation">,</span>\n\t<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;done&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// promise链实现</span>\n<span class="token keyword">function</span> <span class="token function">createFlow</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// 参数会有嵌套的情况，铺平参数为一维数组</span>\n\t<span class="token keyword">const</span> runArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token comment">// createFlow方法并不会输出，执行run方法的时候才会真正输出</span>\n\t<span class="token comment">// 每次都返回then方法，会让整个reduce过程变成 Promise.then(task1).then(task2).then(task3) 的形式</span>\n\t<span class="token keyword">const</span> <span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t\t<span class="token comment">// 拼接run传入的回调函数，执行reduce方法</span>\n\t\t<span class="token keyword">return</span> runArr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token comment">// 当前值如果是个嵌套的createFlow，则执行当前值的run方法</span>\n\t\t\t<span class="token comment">// 返回一个新的promise，成为下次reduce的prev</span>\n\t\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>isFlow<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token keyword">return</span> prev<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>run<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token comment">// 普通函数则直接执行，返回一个新的promise，成为下次reduce的prev</span>\n\t\t\t<span class="token keyword">return</span> prev<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token comment">// Promise.resolve()作为初始值启动reduce</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n\t<span class="token comment">// 返回flow对象</span>\n\t<span class="token keyword">return</span> <span class="token punctuation">{</span>\n\t\tisFlow<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\trun<span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// async await实现</span>\n<span class="token keyword">function</span> <span class="token function">createFlow</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">const</span> runArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">const</span> <span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> runArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>runArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> runArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>isFlow<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token keyword">await</span> runArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token keyword">await</span> runArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span>\n\t\tcb <span class="token operator">&amp;&amp;</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n\t<span class="token keyword">return</span> <span class="token punctuation">{</span>\n\t\tisFlow<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\trun<span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div>',7),t={render:function(n,s){return p}}}}]);