/**
 * fillRect(x, y, width, height)
 * 矩形
 */
{
  var canvas = document.getElementById("rectangle");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = '#eee';
  ctx.fillRect(10, 10, 150, 150);
  // ctx.clearRect(45, 45, 60, 60);
  // ctx.strokeRect(50, 50, 50, 50);
}
/**
 * fn() returns a new element
 * 三角形
 */
{
  var canvas = document.getElementById("triangle");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();

  // 填充三角形
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(80, 0);
  ctx.lineTo(0, 80);
  ctx.fill();

  // 描边三角形
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.lineTo(150, 70);
  ctx.lineTo(70, 150);
  ctx.closePath();
  ctx.stroke();
}

/**
 * arc(x, y, radius, startAngle, endAngle, anticlockwise)
 * 圆形
 * 弧度=(Math.PI/180)*角度
 */
{
  var canvas = document.getElementById("circle");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();
}
/**
 * fn() returns a new element
 * 笑脸
 */
{
  var canvas = document.getElementById('smileyFace');
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口(顺时针)
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
  ctx.stroke();
}

/**
 * Path2D.addPath(path [, transform])​
 * Path2D
 */
{
  var canvas = document.getElementById('Path2D');
  var ctx = canvas.getContext('2d');

  var rectangle = new Path2D();
  rectangle.rect(10, 10, 50, 50);

  var circle = new Path2D();
  circle.moveTo(125, 35);
  circle.arc(100, 35, 25, 0, 2 * Math.PI);

  ctx.stroke(rectangle);
  ctx.fill(circle);
}
