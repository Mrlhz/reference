# CSS Grid 网格布局教程

- [CSS Grid 网格布局教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
- [网格布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)
- [网格布局的基本概念](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)

### 基本概念

- 容器和项目

>采用网格布局的区域，称为"容器"（`container`）。容器内部采用网格定位的子元素，称为"项目"（`item`）。

- 行和列

>容器里面的水平区域称为"行"（`row`），垂直区域称为"列"（`column`）。

- 单元格

>行和列的交叉区域，称为"单元格"（`cell`）。正常情况下，`n`行和`m`列会产生`n * m`个单元格

- 网格线

>划分网格的线，称为"网格线"（`grid line`）。水平网格线划分出行，垂直网格线划分出列。正常情况下，`n`行有`n + 1`根水平网格线，`m`列有`m + 1`根垂直网格线，比如三行就有四根水平网格线。

### 容器属性

- `display` 属性
- `grid-template-columns` 属性，`grid-template-rows` 属性
  - repeat()
  - auto-fill 关键字
  - fr 关键字
  - minmax()
  - auto 关键字
  - 网格线的名称
>`grid-template-columns`属性定义每一列的列宽，`grid-template-rows`属性定义每一行的行高。

```css
/* repeat()接受两个参数，第一个参数是重复的次数（上例是3），第二个参数是所要重复的值。 */

/* 定义了6列，第1，4列的宽度为100px，第2，5列为20px，第3，6列为80px*/ 
grid-template-columns: repeat(2, 100px 20px 80px);


```

### 项目属性

- grid-column-start
- grid-column-end
- grid-row-start
- grid-row-end


- `grid-column`: `grid-column-start`和`grid-column-end`的合并简写形式
- `grid-row`: `grid-row-start`属性和`grid-row-end`的合并简写形式

>当元素设置了网格布局，column，float，clear，vertical-align属性无效
