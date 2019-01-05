/**
 * JavaScript 数组去重
 * 1. Array.filter + indeOf
 * 2. for...of + includes
 * 3. Array.sort()
 * 4. for...of + Object
 * 5. new Set()
 */

function unique(arr) {
  return arr.filter((v, i) => arr.indexOf(v) === i);
}

function unique(arr) {
  let result = [];
  for (const v of arr) {
    !result.includes(v) && result.push(v);
  }
  return result;
}


// test
var array = [1, 2, 1, 1, '1'];