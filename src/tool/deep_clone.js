// js对象的深度克隆代码实现
function clone(Obj) {
  let buf;
  if (Obj instanceof Array) {
    buf = []; // 创建一个空的数组
    let i = Obj.length;
    while (i--) {
      buf[i] = clone(Obj[i]);
    }
    return buf;
  } else if (Obj instanceof Object) {
    buf = {}; // 创建一个空对象
    for (let k in Obj) { // 为这个对象添加新的属性
      buf[k] = clone(Obj[k]);
    }
    return buf;
  } else {
    return Obj;
  }
}

// 链接：https://www.nowcoder.com/questionTerminal/eb16831ab32b4cfaaf9f4ee313469f9f
function clone1(obj) {
  if (!obj || typeof (obj) != 'object') return obj;
  let r = Array.prototype.splice === obj.splice ? [] : {};
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      r[i] = clone(obj[i]);
    }
  }
  return r;
}
//数组、对象都可以for in,同时针对对象必须需要判断hasOwnProperty属性，以防克隆原型链上的属性

const deepCloneObj = JSON.prase(JSON.stringify(obj))
// http://www.cnblogs.com/jq-melody/p/4499333.html