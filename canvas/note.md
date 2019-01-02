# 使用canvas来绘制图形

- [使用canvas来绘制图形](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
- [CanvasRenderingContext2D](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D)
- [canvas系列](https://www.w3cplus.com/blog/tags/616.html)
- [HTML5 canvas 参考手册](http://www.runoob.com/tags/ref-canvas.html)

## 绘制矩形

- `fillRect()`
绘制填充矩形，矩形的起点在 (x, y) 位置，矩形的尺寸是 `width` 和 `height`

- `clearRect()`
设置指定矩形区域内（以 点 (x, y) 为起点，范围是(width, height) ）所有像素变成透明，并擦除之前绘制的所有内容

- `strokeRect()`
在 canvas 中，使用当前的绘画样式，描绘一个起点在 (x, y) 、宽度为 w 、高度为 h 的矩形。

## 绘制文本

- `fillText()`
在(x,y)位置绘制（填充）文本
- `strokeText()`
在(x,y)位置绘制（描边）文本
- `measureText()`
返回 TextMetrics 对象