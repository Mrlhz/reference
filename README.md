# web
学习笔记

## Flex布局

## 容器的属性
- `flex-direction`属性决定主轴的方向（即项目的排列方向）
- `flex-wrap`属性定义，如果一条轴线排不下，如何换行
- `flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`
- `justify-content`属性定义了项目在主轴上的对齐方式
- `align-items`属性定义项目在交叉轴上如何对齐
- `align-content`属性定义了多根轴线（多行）的对齐方式。如果项目只有一根轴线，该属性不起作用

## 项目的属性
- order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0
- flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
- flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
- `flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小
- `flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选
- `align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

## flex-direction属性
属性 | 	描述
--- | --- 
row | 水平方向(起点在左) &rarr; 
row-reverse | 水平方向 &larr;
column | 垂直方向 &darr;
column-reverse | 垂直方向 &uarr;

## flex-wrap属性
nowrap | wrap | wrap-reverse
--- | --- | --- 
不换行    |   换行 &darr;  | 换行 &uarr;

## justify-content属性
flex-start | flex-end | center |  space-between | space-around
--- | --- | --- |--- |---
左对齐 | 右对齐 | 居中 | 两端对齐，项目之间的间隔都相等 | 每个项目两侧的间隔相等

## align-items属性
属性 | 	描述
--- | --- 
flex-start  | 交叉轴的起点对齐 
flex-end    | 交叉轴的终点对齐 
center      | 交叉轴的中点对齐 
baseline    | 项目的第一行文字的基线对齐 
stretch     | 如果项目未设置高度或设为auto，将占满整个容器的高度

## align-content属性
属性 | 	描述
--- | --- 
flex-start | 与交叉轴的起点对齐
flex-end | 与交叉轴的终点对齐
center | 与交叉轴的中点对齐
space-between | 与交叉轴两端对齐，轴线之间的间隔平均分布
space-around | 每根轴线两侧的间隔都相等。轴线之间的间隔比轴线与边框的间隔大一倍
stretch（默认值）| 轴线占满整个交叉轴

## align-self属性
- [align-self](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-self)

属性 | 	描述
--- | --- 
auto | 设置为父元素的 align-items 值，如果该元素没有父元素的话，就设置为 stretch
flex-start | 元素会对齐到 cross-axis 的首端
flex-end | 元素会对齐到 cross-axis 的尾端
center | 元素会对齐到 cross-axis 的中间，如果该元素的 cross-size 的尺寸大于 flex 容器，将在两个方向均等溢出
baseline | 所有的 flex 元素会沿着基线对齐
stretch | 元素将会基于容器的宽和高，按照自身 margin box 的 cross-size 拉伸

除了auto，其他都与align-items属性完全一致

## Emmet
- [Emmet 文档](http://yanxyz.github.io/emmet-docs/)

el.`#page>div.logo+ul#navigation>li*5>a{Item $}`
```html
<div id="page">
    <div class="logo"></div>
    <ul id="navigation">
        <li><a href="">Item 1</a></li>
        <li><a href="">Item 2</a></li>
        <li><a href="">Item 3</a></li>
        <li><a href="">Item 4</a></li>
        <li><a href="">Item 5</a></li>
    </ul>
</div>
```