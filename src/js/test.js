/*
 * 输出4444 333 22 1 22 333 4444用JS怎么做
 */

function f(n) {
    for (let i = -n; i <= n; i++) {
        if (i === 0 || i === 1) {
            continue
        }
        let k = Math.abs(i);
        console.log(k.toString().repeat(k))
    }
}


// 递归？
// let fn = n => (k => n > 1 ? (k(n), f(n - 1), k(n)) : k(n))(n => console.log((n + "").repeat(n)));

function makeClosures(arr, fn) {
    let len = arr.length;
    let result = [];
    for (let i = 0; i < len; i++) {
        result[i] = function (num) {
            return function () {
                return num;
            }
        }(i)
    }
    return result;
}

function callIt(fn) {
    return fn.apply(this, Array.prototype.slice.call(arguments, 1))
}

function matchesPattern(str) {
    return (/^(\d{3}-){2}\d{4}$/).test(str);
}


var fn = function () {
    console.log(this === global);
}

fn()

function fn1(x, f = () => x) {
    var x;
    var y = x;
    x = 2;
    console.log([x, y, f()])
    return [x, y, f()];
}

fn1(1)

function test() {

    console.log(f1); // function

    f1(); // "called"

    function f1() {

        console.log('called');

    }

}

test();

setTimeout(function(){
    console.log('定时器开始啦4')
});

new Promise(function(resolve){
    console.log('马上执行for循环啦1');
    for(var i = 0; i < 10000; i++){
        i == 99 && resolve();
    }
}).then(function(){
    console.log('执行then函数啦3')
});

console.log('代码执行结束2');

function timeout(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms, 'done');
    });
  }
  
  timeout(2000).then((value) => {
    console.log(value);
  });


  