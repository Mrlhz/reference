'use strict';

var fs = require('fs');

// 异步读文件
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// 同步读文件

var data = fs.readFileSync('sample.txt', 'utf-8')

console.log(`readFileSync${data}`)

'use strict';

var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});