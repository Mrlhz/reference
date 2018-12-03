# 笔记

让Node直接为所有js文件开启严格模式：

```js
node --use_strict calc.js
```

模块
CommonJS规范

```js
要在模块中对外输出变量，用：

module.exports = variable;
输出的变量可以是任意对象、函数、数组等等。

要引入其他模块输出的对象，用：

var foo = require('other_module');
引入的对象具体是什么，取决于引入模块输出的对象。
```

- [文件系统](http://nodejs.cn/api/fs.html)