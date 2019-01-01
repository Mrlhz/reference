/**
 * copy from https://github.com/mqyqingfeng/Blog/issues/40
 */

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

var isArrayLike = function(collection) {
  var length = collection.length;
  return typeof length == "number" && length >= 0 && length <= MAX_ARRAY_INDEX;
};

/**
 *
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @example
 *
 * each([1, 2], value => console.log(value))
 * // => Logs `1` then `2`.
 *
 * each({ 'a': 1, 'b': 2 }, (value, key) => console.log(key))
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */

function each(obj, callback) {
  var i = 0,
    length;
  if (isArrayLike(obj)) {
    length = obj.length;
    for (; i < length; i++) {
      if (callback.call(obj[i], obj[i], i) === false) {
        break;
      }
    }
  } else {
    for (var key in obj) {
      if (callback.call(obj[key], obj[key], key) === false) {
        break;
      }
    }
  }
  return obj;
}
