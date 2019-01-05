/**
 * 浅拷贝
 * @param {Array|Object} obj 
 */

function shallowCopy(obj) {
  if (typeof obj !== "object") return;
  var result = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
