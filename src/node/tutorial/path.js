const path = require('path');

let str = '/root/a/b/index.html';
console.log(path.dirname(str)); // 路径
// /root/a/b
console.log(path.extname(str)); // 后缀名
// .html
console.log(path.basename(str)); // 文件名
// index.html

// path.resolve() 路径解析，简单来说就是拼凑路径，最终返回一个绝对路径
let pathOne = path.resolve('root/a/b', '../c', 'd', '..', 'e');

// 一般用来打印绝对路径，就像下面这样，其中 __dirname 指的就是当前目录
let pathTwo = path.resolve(__dirname, 'build'); // 这个用法很常见，你应该在 webpack 中有见过

console.log(pathOne, '|', pathTwo, '|', __dirname);