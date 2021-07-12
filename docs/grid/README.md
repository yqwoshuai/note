---
sidebar: 'auto'
---

# Grid布局相关属性

定义display:grid或inline-grid开启子元素的Grid布局。

```css
.container {
    display: grid;
    // 行内元素使用 
    display: inline-flex;
}
```

不同于flex布局，grid布局是一种二维布局，它将容器划分为行和列，行和列组成网格，子元素像表格一样按照设置的属性在这些网格中排列。水平的为行，垂直向的为列。行和列交叉就形成网格。

父元素设置为grid布局之后，子元素的float、display: inline-block、display: table-cell、vertical-align和column-*属性将会失效。

## 容器属性

### 1、grid-template-columns、grid-template-rows

grid-template-rows定义每一行的行高，grid-template-columns定义每一列的列宽

```css
.container {
    display: grid;
    grid-template-rows: 50px 50px 50px; // 表示分3行，每一行的高度为50px
    grid-template-columns: 50px 50px 50px;  // 表示分3列，每一列的宽度为50px

    // 支持百分比写法
    grid-template-columns: 33.33% 33.33% 33.33%;
    grid-template-rows: 33.33% 33.33% 33.33%;
}
```

<div align=center><img src="/note/images/grid/1.png"></div>  

chrome调试模式下可以看到生成的网格线
<div align=center><img src="/note/images/grid/2.png"></div>  

相同的值可以使用repeat()函数进行合并

```css
// 表示大小为50px的值，重复3次，表示分3行3列，每一行的行高跟每一列的列宽都是50px
grid-template-rows: repeat(3, 50px); 
grid-template-columns: repeat(3, 50px);
// 同样支持重复一种模式，表示以50px，60px，70px为一组值重复2次
// 表示分6行6列，第1、2、3行行高为分别为50px，60px，70px，第4、5、6行的行高为50px，60px，70px，列宽同理
grid-template-rows: repeat(2, 50px 60px 70px);
grid-template-columns: repeat(2, 50px 60px 70px);
```

<div align=center><img src="/note/images/grid/3.png"></div>  

<div align=center><img src="/note/images/grid/4.png"></div>  

repeat()函数的auto-fill关键字，表示以某一数值尽可能多的划分网格，
当容器宽度固定时

```css
.container {
    width: 300px;
    display: grid;
    // 当宽度固定时，将以每一列50px的宽度尽可能多的划分网格，此时被划分为了6列
    grid-template-columns: repeat(auto-fill, 50px);
}
```

<div align=center><img src="/note/images/grid/5.png"></div>  

<div align=center><img src="/note/images/grid/6.png"></div>  

fr关键字，是一个单位关键字，表示所有fr单位之间的倍数关系

```css
// 表示划分为3列，第一列的宽度为150px，剩下的宽度以1:2的关系分配个第二列和第三列
grid-template-columns: 150px 1fr 2fr;
```

<div align=center><img src="/note/images/grid/7.png"></div>  

<div align=center><img src="/note/images/grid/8.png"></div>  

minmax()函数表示一个范围，接收两个参数，分别为最大值和最小值

```css
// 表示动态计算第三列的宽度，最小值为100px，最大值为1fr（与第二列同宽）
grid-template-columns: 150px 1fr minmax(100px, 1fr);
```

auto关键字
表示浏览器自动分配，会将剩余可用空间分配给此项

```css
grid-template-columns: 150px 50px auto;  // 将容器剩余宽度分配给第三列
```

<div align=center><img src="/note/images/grid/9.png"></div>  

<div align=center><img src="/note/images/grid/10.png"></div>  

可以给每条网格线命名，在之后的各类属性中可以使用命名对命名好的线进行操作

```css
grid-template-columns: [line1] 50px [line2] 50px [line3 line0] 50px [line4]; // 3列会生成4条竖线，也可以同时给多个命名
```

使用grid可以简单的实现一些常用的布局

```css
// 左边菜单栏宽度固定，右边内容区撑满的两栏布局
.container {
  display: grid;
  grid-template-columns: 200px auto;
}

// 经典12网格布局
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
```

### 2、grid-row-gap、grid-column-gap、grid-gap

grid-row-gap属性设置行之间的间隔，grid-column-gap属性设置列之间的间隔。

```css
.container {
  display: grid;
  grid-template-rows: repeat(3, 50px);
  grid-template-columns: repeat(3, 50px);
  grid-row-gap: 10px; // 行间距为5px
  grid-column-gap: 10px; // 列间距为5px
}
```

<div align=center><img src="/note/images/grid/11.png"></div>  

<div align=center><img src="/note/images/grid/12.png"></div>  

grid-gap为上面两个属性的简写，上面的代码可以写成：

```css
.container {
  grid-gap: 10px 10px; // 行间距 列间距
  // 也可写成
  grid-gap: 10px; // 省略第二个属性表示与第一个相同
}
```

这3个属性的grid-前缀已经可以删除，可以直接写成row-gap、column-gap、gap

### 3、grid-template-areas

grid-template-areas属性将对所有网格进行命名规划，对网格的命名规划会影响到网格线的命名，网格起始位置的网格线为'网格名称-start'，网格结束位置网格线为'网格名称-end'

```css
// 直接对3X3的网格区域做布局命名规划
// 顶部3个网格组成了hearder区域，起始的网格线名称为header-start，结束位置的网格线名称为header-end
.container {
  grid-template-areas: "header header header"
                       "main main sidebar"
                       "footer footer footer";
  // 如果某些网格不需要规划为某个区域，则直接用.表示
  grid-template-areas: 'a . c'
                       'd . f'
                       'g . i';
}
```

### 4、grid-auto-flow

grid-auto-flow属性表示网格排列的方式，属性值默认为row，即先行排列，再列排列

```css
.container {
  // 修改为先列排列，再行排列
  grid-auto-flow: column;
}
```

<div align=center><img src="/note/images/grid/13.png"></div>  

还可以加上dense属性，表示当某些网格被安排好特定位置时，剩余的网格如何排列。

<div align=center><img src="/note/images/grid/14.png"></div>  

<div align=center><img src="/note/images/grid/15.png"></div>  

由于第一个网格占据了两个网格宽度，第二个网格在同一行放不下，会选择第二行起始，这样就出现了一个网格的空隙，dense属性可以让之后的网格尽可能的填满这些空隙。

```css
.container {
  // 在行方向上尽可能的填满，不留空隙
  grid-auto-flow: row dense;
}
```

<div align=center><img src="/note/images/grid/16.png"></div>  

### 5、justify-items、align-items、place-items

justify-items属性设置网格中内容在水平方向上的的位置。

```css
.container {
  // 在水平方向上居中
  justify-items: center;
}
```

<div align=center><img src="/note/images/grid/17.png"></div>  

align-items属性设置网格中内容在垂直方向上的的位置。

```css
.container {
  // 在垂直方向上居中
  align-items: center;
}
```

<div align=center><img src="/note/images/grid/18.png"></div>  

place-items属性是justify-items和align-items的简写形式，只写一个值时表示两个值相同。

```css
.container {
  // 在水平和垂直方向上都居中
  place-items: center;
}
```

<div align=center><img src="/note/images/grid/19.png"></div>  

这3个属性可以取的值有start（对齐网格的起始位置）、end（对齐网格的结束位置）、center（网格内部居中）、stretch（拉伸，没有规定内容的大小时，占满网格的整个宽度，此值为默认值）。

### 6、justify-content、align-content、place-content

justify-content属性设置所有网格组成的内容区域在水平方向上的位置。

```css
.container {
  // 所有网格组成的内容区域在水平方向上居中
  justify-items: center;
}
```

<div align=center><img src="/note/images/grid/20.png"></div>  

align-content属性设置所有网格组成的内容区域在垂直方向上的位置。

```css
.container {
  // 所有网格组成的内容区域在垂直方向上居中
  align-items: center;
}
```

<div align=center><img src="/note/images/grid/21.png"></div>  

place-content属性是justify-content和align-content的简写形式，只写一个值时表示两个值相同。

```css
.container {
  // 所有网格组成的内容区域在水平和垂直方向上都居中
  place-content: center;
}
```

<div align=center><img src="/note/images/grid/22.png"></div>  

这3个属性可以取的值有：

1. start（对齐容器的起始位置，此值为默认值）;
2. end（对齐容器的结束位置）;  
3. center（容器内部居中）;  
4. stretch（拉伸，没有规定项目的大小时，会占满容器相应方向上的整个宽度）;  
5. space-around（每个项目两侧的距离相等，会造成项目之间的距离是项目到边缘距离的两倍）;  
6. space-between（每个网格之间的间隔相等，网格与容器边缘没有间距）;  
7. space-evenly（在相同的方向上，网格与网格之间，网格与边缘之间的距离全部相等）。

```css
.container {
  place-content: space-around;
}
```

<div align=center><img src="/note/images/grid/23.png"></div>  

```css
.container {
  place-content: space-between;
}
```

<div align=center><img src="/note/images/grid/24.png"></div>  

```css
.container {
  place-content: space-evenly;
}
```

<div align=center><img src="/note/images/grid/25.png"></div>  

### 7、grid-template、grid

这两个属性都是简写属性。
grid-template是grid-template-columns、grid-template-rows和grid-template-areas这三个属性的简写形式。
grid是grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow这六个属性的简写形式。
简写语义非常不明确，可读性很差，不推荐使用。

## 网格属性

### 1、grid-column-start、grid-column-end、grid-row-start、grid-row-end

可以用这4个属性来单独指定某一个网格的位置，grid-column-start表示网格左边框所在的垂直网格线，grid-column-end属性表示网格右边框所在的垂直网格线，grid-row-start属性表示网格上边框所在的水平网格线，grid-row-end属性表示网格下边框所在的水平网格线

```css
// 通过指定第一个项目的起始和结束网格线，将第一个项目移动到正中间
.item-1{
  grid-column-start:2;
  grid-column-end:3;
  grid-row-start:2;
  grid-row-end:3;
}

// 默认只占一个网格宽度，可以省略结束位置
.item-1{
  grid-column-start:2;
  grid-row-start:2;
}
```

<div align=center><img src="/note/images/grid/26.png"></div>  

<div align=center><img src="/note/images/grid/27.png"></div>  

```css
// 水平和垂直方向都从第二个网格线开始，占据两个网格宽度
.item-1{
  grid-column-start:2;
  grid-column-end:4;
  grid-row-start:2;
  grid-row-end:4;
}
```

<div align=center><img src="/note/images/grid/28.png"></div>  

<div align=center><img src="/note/images/grid/29.png"></div>  

前面通过给网格线命名的方式可以在这4个属性上进行应用。

```css
.container {
  grid-template-columns: [line1] 50px [line2] 50px [line3 line0] 50px [line4];
}
.item-1{
  grid-column-start: line2;
  grid-column-end: line4;
}
```

<div align=center><img src="/note/images/grid/30.png"></div>  

<div align=center><img src="/note/images/grid/31.png"></div>  

这4个属性值还有span关键字，表示跨越几个网格

```css
.item-1{
  grid-column-start: span 2;
}

// 指定结束位置的跨越得到的结果也是一样的
.item-1{
  grid-column-end: span 2;
}
```

<div align=center><img src="/note/images/grid/32.png"></div>  

### 2、grid-column、grid-row

这两个属性都是简写属性。
grid-column是grid-column-start和grid-column-end的简写形式。
grid-row是grid-row-start和grid-row-end的简写形式。

```
.item-1 {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
}
```

<div align=center><img src="/note/images/grid/33.png"></div>  

同样可以使用span关键字。

```css
.item-1 {
  grid-column: span 2;
  grid-row: span 2;
}
```

<div align=center><img src="/note/images/grid/34.png"></div>  

只写一项时表示默认跨越1个网格。

```css
.item-1 {
  grid-column: 2;
  grid-row: 2;
}
```

<div align=center><img src="/note/images/grid/35.png"></div>  

### 3、grid-area

grid-area属性直接指定某个网格位于哪一个命名区域

```css
.container {
  grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';
}
.item-1 {
  grid-area: e;
}
```

<div align=center><img src="/note/images/grid/36.png"></div>  

还可以当做grid-column-start、grid-column-end、grid-row-start、grid-row-end这4个属性的简写形式。

```css
.item-1 {
  grid-area: 2 / 2 / 3 / 3;
}
```

<div align=center><img src="/note/images/grid/37.png"></div>  

### 4、justify-self、align-self、place-self

这3个属性的表现形式和值与容器属性的justify-items、align-items、place-items这3个属性完全一致。只不过只作用于单个网格。
