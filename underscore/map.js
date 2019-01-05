/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * copy from https://github.com/mqyqingfeng/Blog/issues/58
 */

/**
 *
 * 1. 当iteratee 不传时，返回一个相同的数组
 * 2. 当 iteratee 为一个函数，正常处理
 * 3. 当 iteratee 为一个对象，返回元素是否匹配指定的对象
 * 4. 当 iteratee 为字符串，返回元素对应的属性值的集合
 *
 * @example
 *
 * each([1, 2], value => console.log(value))
 * // => Logs `1` then `2`.
 *
 * each({ 'a': 1, 'b': 2 }, (value, key) => console.log(key))
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */

(function() {
  var _ = function() {};
  var root = this;

  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

  var isArrayLike = function(collection) {
    var length = collection.length;
    return typeof length == "number" && length > 0 && length < MAX_ARRAY_INDEX;
  };
  var builtinIteratee;
  var cb = function(value, context, argCount) {
    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context);
  };

  _.iteratee = builtinIteratee = function(value, context) {
    return cb(value, context, Infinity);
  };
  var optimizeCb = function() {};
  var shallowProperty = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };
  var deepGet = function(obj, path) {};
  _.isFunction = function(obj) {
    return typeof obj == "function" || false;
  };
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === "function" || (type === "object" && !!obj);
  };
  _.isArray = function(array) {};
  _.matcher = function() {};
  _.property = function(key) {};
  _.identity = function(value) {
    return value;
  };
  _.map = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);

    var length = obj.length,
      results = Array(length);
    for (var index = 0; index < length; index++) {
      results[index] = iteratee(obj[index], index, obj);
    }

    return results;
  };
  root._ = _;
})();
