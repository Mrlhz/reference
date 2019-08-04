/**
 * @see https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/25
 * @description 介绍下观察者模式和订阅-发布模式的区别，各自适用于什么场景
 */

// JavaScript设计模式与开发实践
// 发布—订阅模式的优点非常明显，一为时间上的解耦，二为对象之间的解耦。它的应用非常
// 广泛，既可以用在异步编程中，也可以帮助我们完成更松耦合的代码编写。发布—订阅模式还可
// 以用来帮助实现一些别的设计模式， 比如中介者模式。  从架构上来看， 无论是 MVC还是 MVVM，
// 都少不了发布—订阅模式的参与，而且 JavaScript本身也是一门基于事件驱动的语言。

// 缺点：
// 创建订阅者本身要消耗一定的时间和内存，而
// 且当你订阅一个消息后，也许此消息最后都未发生，但这个订阅者会始终存在于内存中。另外，
// 发布—订阅模式虽然可以弱化对象之间的联系，但如果过度使用的话，对象和对象之间的必要联
// 系也将被深埋在背后，会导致程序难以跟踪维护和理解。特别是有多个发布者和订阅者嵌套到一
// 起的时候，要跟踪一个 bug不是件轻松的事情。
var event = {
  clientList: [],
  listen: function (key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn); // 订阅的消息添加进缓存列表 
  },
  trigger: function () {
    var key = Array.prototype.shift.call(arguments), // (1); 
      fns = this.clientList[key];

    if (!fns || fns.length === 0) { // 如果没有绑定对应的消息 
      return false;
    }

    for (var i = 0, fn; fn = fns[i++];) {
      fn.apply(this, arguments); // (2) // arguments 是 trigger 时带上的参数 
    }
  }
};

event.remove = function (key, fn) {
  var fns = this.clientList[key];

  if (!fns) { // 如果 key 对应的消息没有被人订阅，则直接返回 
    return false;
  }
  if (!fn) { // 如果没有传入具体的回调函数，表示需要取消 key 对应消息的所有订阅 
    fns && (fns.length = 0);
  } else {
    for (var l = fns.length - 1; l >= 0; l--) { // 反向遍历订阅的回调函数列表 
      var _fn = fns[l];
      if (_fn === fn) {
        fns.splice(l, 1); // 删除订阅者的回调函数 
      }
    }
  }
};

var salesOffices = {};
var installEvent = function (obj) {
  for (var i in event) {
    obj[i] = event[i];
  }
}

installEvent(salesOffices);

salesOffices.listen('squareMeter88', fn1 = function (price) { // 小明订阅消息 
  console.log('1价格= ' + price);
});

salesOffices.listen('squareMeter88', fn2 = function (price) { // 小红订阅消息 
  console.log('2价格= ' + price);
});

salesOffices.remove( 'squareMeter88', fn1 );    // 删除小明的订阅 
salesOffices.trigger('squareMeter88', 2000000); // 输出：2000000

console.log(salesOffices.clientList);

console.log('-------------------------------------------------------------------------');
