# web
学习笔记

emmet
```
ul>li._item*3{$}
<ul>
    <li class="_item">1</li>
    <li class="_item">2</li>
    <li class="_item">3</li>
</ul>
```

## Flex布局

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

- flex-direction属性
> flex-direction属性决定主轴的方向（即项目的排列方向
```
flex-direction: row | row-reverse | column | column-reverse;
```

- flex-wrap属性
> 默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行
```
flex-wrap: nowrap | wrap | wrap-reverse; 
            不换行  换行      第一行在下方
```

- flex-flow属性
> flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
```
flex-flow: <flex-direction> || <flex-wrap>;
```

- justify-content属性
> justify-content属性定义了项目在主轴上的对齐方式
```
 justify-content: flex-start | flex-end | center | space-between                  | space-around;
                    左对齐       右对齐      居中   两端对齐，项目之间的间隔都相等      每个项目两侧的间隔相等。项目之间的间隔比项目与边框的间隔大一倍
```

- align-items属性
> align-items属性定义项目在交叉轴(|垂直)上如何对齐
```
align-items: flex-start | flex-end | center | baseline | stretch;
            交叉轴的起点对齐
            baseline: 项目的第一行文字的基线对齐
            stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度
```

- align-content属性
> align-content属性定义了多根轴线（多行）的对齐方式。如果项目只有一根轴线，该属性不起作用。

```
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
flex-start：交叉轴的起点对齐。
```