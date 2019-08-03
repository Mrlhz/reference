async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(function () {
  console.log('setTimeout');
}, 0)
async1();
new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
});
console.log('script end');


/**
 * @see https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7
 * https://segmentfault.com/a/1190000011296839
 * https://github.com/dwqs/blog/issues/61
 */

function testSometing() {
  console.log("执行testSometing"); // 2
  return "testSometing";
}

async function testAsync() {
  console.log("执行testAsync"); // 6
  return Promise.resolve("hello async"); // 8
}

async function test() {
  console.log("test start..."); // 1
  const v1 = await testSometing();
  console.log(v1); // testSometing // 5
  const v2 = await testAsync();
  console.log(v2); // 8
  console.log(v1, v2); // 9
}

test();

var promise = new Promise((resolve) => {
  console.log("promise start.."); // 3
  resolve("promise");
});
promise.then((val) => console.log(val)); // 7

console.log("test end...") // 4