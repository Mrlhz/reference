# 数据类型
## 类型检测
1. typeof：一般用于检测原始数据类型，引用数据类型无法具体的检测出来


```
console.log(typeof ""); //string
console.log(typeof 1); //number
console.log(typeof true); //boolean
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof []); //object
console.log(typeof function() {}); //function
console.log(typeof {}); //object
```

其实null是js设计的一个败笔，早期准备更改null的类型为null，由于当时已经有大量网站使用了null，如果更改，将导致很多网站的逻辑出现漏洞问题，就没有更改过来，于是一直遗留到现在。

2. instanceof：检测引用数据类型


```
console.log("1" instanceof String);  //false
console.log(1 instanceof Number);  //false
console.log(true instanceof Boolean);  //false
console.log([] instanceof Array);  //true
console.log(function() {} instanceof Function);  //true
console.log({} instanceof Object);  //true
```

> 可以看到前三个都是以对象字面量创建的基本数据类型，但是却不是所属类的实例，这个就有点怪了。后面三个是引用数据类型，可以得到正确的结果。如果我们通过new关键字去创建基本数据类型，你会发现，这时就会输出true,如下:


```
console.log(new String("1") instanceof String); //true
console.log(new Number(1) instanceof Number); //true
console.log(new Boolean(true) instanceof Boolean); //true
console.log([] instanceof Array); //true
console.log(function() {} instanceof Function); //true
console.log({} instanceof Object); //true
```

3. constructor：似乎完全可以应对基本数据类型和引用数据类型，都能检测出数据类型


```
console.log(("1").constructor === String); //true
console.log((1).constructor === Number); //true
console.log((true).constructor === Boolean); //true
console.log(([]).constructor === Array); //true
console.log((function() {}).constructor === Function); //true
console.log(({}).constructor === Object); //true
```

事实上并不是如此，来看看为什么：


```
function Fn(){};
Fn.prototype=new Array();
var f=new Fn();

console.log(f.constructor===Fn);  //false
console.log(f.constructor===Array);  //true
```
声明了一个构造函数，并且把他的原型指向了Array的原型，所以这种情况下，`constructor`也显得力不从心了。

4. `Object.prototype.toString`：终极数据检测方式

```
var a = Object.prototype.toString;

console.log(a.call("aaa"));  //[object String]
console.log(a.call(1));  //[object Number]
console.log(a.call(true));  //[object Boolean]
console.log(a.call(null));  //[object Null]
console.log(a.call(undefined));  //[object Undefined]
console.log(a.call([]));  //[object Array]
console.log(a.call(function() {}));  //[object Function]
console.log(a.call({}));  //[object Object]
```