const querystring = require('querystring');

let query = 'a=1&b=2&c=3'; // 形如这样的字符串就能被解析
let obj = querystring.parse(query);
console.log(obj, obj.a); // { a: '1', b: '2', c: '3' }   '1'

query = 'a=1&b=2&c=3&a=3'; // 如果参数重复，其所对应的值会变成数组
obj = querystring.parse(query);
console.log(obj); // { a: [ '1', '3' ], b: '2', c: '3' }

// 相反的我们可以用 querystring.stringify() 把对象拼接成字符串
query = querystring.stringify(obj);
console.log(query); // a=1&a=3&b=2&c=3