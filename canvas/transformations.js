// macarons.js
var colorPalette = [
  '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
  '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
  '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
  '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
];

function draw() {
  var ctx = document.getElementById('translate').getContext('2d');
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.save();
      ctx.fillStyle = `rgb(${(51 * i)}, ${(255 - 51 * i)}, 255)`;
      ctx.translate(10 + j * 50, 10 + i * 50);
      ctx.fillRect(0, 0, 25, 25);
      ctx.restore();
    }
  }
}

draw();