/**
 * 深拷贝
 * https://juejin.im/post/5beb93de6fb9a049c30ac9ee 深拷贝和浅拷贝
 * https://github.com/mqyqingfeng/Blog/issues/32 JavaScript专题之深浅拷贝
 * https://github.com/mqyqingfeng/Blog/issues/33 JavaScript专题之从零实现jQuery的extend
 * 性能会不如浅拷贝
 */

var deepCopy = (cloneDeep = function(obj) {
  if (typeof obj !== "object") return;
  var result = obj instanceof Array ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }
  return result;
});

// Example
var objects = [{ a: 1 }, { b: 2 }];

var deep = cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false

deepCopy({ value: null });
// => {value: {}}
