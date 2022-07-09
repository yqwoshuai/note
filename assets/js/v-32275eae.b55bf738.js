(self.webpackChunknote=self.webpackChunknote||[]).push([[6260],{5328:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-32275eae",path:"/leetcode/1.html",title:"双指针",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"第 167 题",slug:"第-167-题",children:[]},{level:2,title:"第 633 题",slug:"第-633-题",children:[]},{level:2,title:"第 345 题",slug:"第-345-题",children:[]},{level:2,title:"第 88 题",slug:"第-88-题",children:[]},{level:2,title:"第 141 题",slug:"第-141-题",children:[]},{level:2,title:"第 524 题",slug:"第-524-题",children:[]}],filePathRelative:"leetcode/1.md"}},4440:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>x});var p=a(6252);const e=(0,p.Wm)("h1",{id:"双指针",tabindex:"-1"},[(0,p.Wm)("a",{class:"header-anchor",href:"#双指针","aria-hidden":"true"},"#"),(0,p.Uk)(" 双指针")],-1),t=(0,p.Wm)("h2",{id:"第-167-题",tabindex:"-1"},[(0,p.Wm)("a",{class:"header-anchor",href:"#第-167-题","aria-hidden":"true"},"#"),(0,p.Uk)(" 第 167 题")],-1),o={href:"https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("有序数组的 Two Sum"),l=(0,p.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">numbers<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 定义数组头尾双指针</span>\n  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>\n  <span class="token keyword">let</span> j <span class="token operator">=</span> numbers<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>\n  <span class="token comment">// 判断当前值与双指针值和的大小</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> numbers<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> numbers<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 超过右指针左移</span>\n      j<span class="token operator">--</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> numbers<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 不足左指针右移</span>\n      i<span class="token operator">++</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 返回符合结果值的位置</span>\n  <span class="token keyword">return</span> <span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="第-633-题" tabindex="-1"><a class="header-anchor" href="#第-633-题" aria-hidden="true">#</a> 第 633 题</h2>',2),r={href:"https://leetcode-cn.com/problems/sum-of-square-numbers/",target:"_blank",rel:"noopener noreferrer"},u=(0,p.Uk)("平方数之和"),k=(0,p.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">judgeSquareSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 定义双指针，右指针为目标数平方根取整</span>\n  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>\n  <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token comment">// 返回值</span>\n  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token boolean">false</span>\n  <span class="token comment">// 左指针小于右指针的时候循环</span>\n  <span class="token comment">// &lt;= 处理特殊用例 2</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 发现符合条件跳出循环</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">*</span> i <span class="token operator">+</span> j <span class="token operator">*</span> j <span class="token operator">===</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      result <span class="token operator">=</span> <span class="token boolean">true</span>\n      <span class="token keyword">break</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 超过右指针左移</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">*</span> i <span class="token operator">+</span> j <span class="token operator">*</span> j <span class="token operator">&gt;</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      j<span class="token operator">--</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 不足左指针右移</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">*</span> i <span class="token operator">+</span> j <span class="token operator">*</span> j <span class="token operator">&lt;</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      i<span class="token operator">++</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> result\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="第-345-题" tabindex="-1"><a class="header-anchor" href="#第-345-题" aria-hidden="true">#</a> 第 345 题</h2>',2),i={href:"https://leetcode-cn.com/problems/reverse-vowels-of-a-string/",target:"_blank",rel:"noopener noreferrer"},b=(0,p.Uk)("反转字符串中的元音字母"),m=(0,p.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">reverseVowels</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 定义双指针</span>\n  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>\n  <span class="token keyword">let</span> j <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>\n  <span class="token comment">// 字符串转数组，定义元音字母Set类型</span>\n  <span class="token keyword">let</span> arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>\n  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;i&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;o&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;u&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;I&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;O&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;U&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 利用Set类型has判断是否两个指针都为元音字符</span>\n    <span class="token comment">// 都为元音字符时交换两个元音字符，并移动指针</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> mid <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n      arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>\n      arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> mid\n      i<span class="token operator">++</span>\n      j<span class="token operator">--</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 左指针不为元音字符，右移</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      i<span class="token operator">++</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 右指针不为元音字符，左移</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      j<span class="token operator">--</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 返回合并值</span>\n  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="第-88-题" tabindex="-1"><a class="header-anchor" href="#第-88-题" aria-hidden="true">#</a> 第 88 题</h2>',2),d={href:"https://leetcode-cn.com/problems/merge-sorted-array/description/",target:"_blank",rel:"noopener noreferrer"},h=(0,p.Uk)("合并两个有序数组"),w=(0,p.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> m<span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 定义双指针为两个数组的末尾，则总共需要处理的位数为p</span>\n  <span class="token keyword">let</span> i <span class="token operator">=</span> m <span class="token operator">-</span> <span class="token number">1</span>\n  <span class="token keyword">let</span> j <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span>\n  <span class="token keyword">let</span> p <span class="token operator">=</span> i <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 当两个数组都还有元素未处理时，判断元素大小</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 将较大的数放在p位置，并移动相应指针，p位置左移。</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        nums1<span class="token punctuation">[</span>p<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>j<span class="token operator">--</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        nums1<span class="token punctuation">[</span>p<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums1<span class="token punctuation">[</span>i<span class="token operator">--</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 左指针已经没有元素时，直接将右指针元素放在p位置</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      nums1<span class="token punctuation">[</span>p<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>j<span class="token operator">--</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 右指针已经没有元素时，直接将左指针元素放在p位置</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      nums1<span class="token punctuation">[</span>p<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums1<span class="token punctuation">[</span>i<span class="token operator">--</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="第-141-题" tabindex="-1"><a class="header-anchor" href="#第-141-题" aria-hidden="true">#</a> 第 141 题</h2>',2),g={href:"https://leetcode-cn.com/problems/linked-list-cycle/",target:"_blank",rel:"noopener noreferrer"},f=(0,p.Uk)("环形链表"),y=(0,p.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">hasCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 处理链表为空或只有一个节点的情况</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 定义快慢指针</span>\n  <span class="token keyword">let</span> l1 <span class="token operator">=</span> head\n  <span class="token keyword">let</span> l2 <span class="token operator">=</span> head<span class="token punctuation">.</span>next\n  <span class="token comment">// 快慢指针所指向的节点都存在时进行循环</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>l1 <span class="token operator">&amp;&amp;</span> l2 <span class="token operator">&amp;&amp;</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>l1 <span class="token operator">===</span> l2<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 快指针每次前进两个节点，如果存在环，快指针必然将绕圈之后追上慢指针</span>\n    l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>next\n    l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="第-524-题" tabindex="-1"><a class="header-anchor" href="#第-524-题" aria-hidden="true">#</a> 第 524 题</h2>',2),v={href:"https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting/",target:"_blank",rel:"noopener noreferrer"},j=(0,p.Uk)("通过删除字母匹配到字典里最长单词"),W=(0,p.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">findLongestWord</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 将传入的数组按字典序排序</span>\n  <span class="token keyword">let</span> arr <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token comment">// 分割传入的字符串为数组</span>\n  <span class="token keyword">let</span> sArr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>\n  <span class="token comment">// 定义返回值</span>\n  <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>\n  <span class="token comment">// 对匹配数组的每一项都进行遍历</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 将当前项拆分为数组，定义当前满足条件子字符串的长度k</span>\n    <span class="token keyword">let</span> item <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>\n    <span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span>\n    <span class="token comment">// 对字符逐个匹配，匹配成功时k指针右移</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> p <span class="token operator">&lt;</span> sArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> p<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>sArr<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">===</span> item<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        k<span class="token operator">++</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// k值等于当前单词的长度时表示当前单词匹配成功</span>\n    <span class="token comment">// 在大于之前匹配成功的单词长度时更新单词</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">===</span> item<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> k <span class="token operator">&gt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      str <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> str\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>',1),x={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[e,t,(0,p.Wm)("p",null,[(0,p.Wm)("a",o,[c,(0,p.Wm)(a)])]),l,(0,p.Wm)("p",null,[(0,p.Wm)("a",r,[u,(0,p.Wm)(a)])]),k,(0,p.Wm)("p",null,[(0,p.Wm)("a",i,[b,(0,p.Wm)(a)])]),m,(0,p.Wm)("p",null,[(0,p.Wm)("a",d,[h,(0,p.Wm)(a)])]),w,(0,p.Wm)("p",null,[(0,p.Wm)("a",g,[f,(0,p.Wm)(a)])]),y,(0,p.Wm)("p",null,[(0,p.Wm)("a",v,[j,(0,p.Wm)(a)])]),W],64)}}}}]);