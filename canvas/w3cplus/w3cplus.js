function getRads(degrees) { return (Math.PI * degrees) / 180; }
function getDegrees(rads) { return (rads * 180) / Math.PI; }

// https://www.w3cplus.com/canvas/canvas-drawing-function.html
var myCanvas = document.getElementById('myCanvas');
var ctx = myCanvas.getContext('2d');
function drawScreen() {
  // x,y => 圆心坐标点 
  // r => 圆弧半径 
  var arc = {
    x: myCanvas.width / 2,
    y: myCanvas.height / 2,
    r: 100
  },
    w = myCanvas.width,
    h = myCanvas.height;

  ctx.save();
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#e3f';

  // startRad => getRads(-45)
  // endRad => getRads(45)
  // 顺时针旋转
  ctx.beginPath();
  ctx.arc(arc.x, arc.y, arc.r, getRads(-45), getRads(45));
  ctx.stroke();

  // 逆时针旋转
  ctx.strokeStyle = '#f36';
  ctx.fillStyle = '#f36';
  ctx.beginPath();
  ctx.moveTo(arc.x, arc.y);
  ctx.arc(arc.x, arc.y, arc.r, getRads(-135), getRads(135), true);
  
  ctx.closePath();
  ctx.fill();
  
  // 画个声波波率放大图

  // ctx.save(); ctx.lineWidth = 1; ctx.strokeStyle = '#e3f';
  // for (let i = 0; i < 10; i++) {
  //   ctx.beginPath();
  //   ctx.arc(arc.x, arc.y, arc.r*i, getRads(-45), getRads(45));
  //   ctx.stroke();

  //   ctx.beginPath();
  //   ctx.arc(arc.x, arc.y, arc.r*i, getRads(-135), getRads(135), true);
  //   ctx.stroke();
  // }
}

drawScreen();