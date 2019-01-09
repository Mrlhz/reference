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
 * _.map([1, 2]) // => [1, 2]
 * _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }); //  => [3, 6, 9]
 * _.map([{name: 'Kevin'}, {name: 'Daisy'}], {name: 'Daisy'}) // => [false, true]
 * _.map([{name: 'Kevin'}, {name: 'Daisy'}], 'name') // => ["Kevin", "Daisy"]
 *
 */

(function() {
  var _ = function() {};
  var root = this;

  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var nativeIsArray = Array.isArray;
  var nativeKeys = Object.keys;

  var isArrayLike = function(collection) {
    var length = collection.length;
    return typeof length == "number" && length > 0 && length < MAX_ARRAY_INDEX;
  };

  _.keys = function(obj) {
    // 容错
    // 如果传入的参数不是对象，则返回空数组
    if (!_.isObject(obj)) return [];

    // 如果浏览器支持 ES5 Object.key() 方法
    // 则优先使用该方法
    if (nativeKeys) return nativeKeys(obj);

    var keys = [];

    // own enumerable properties
    // hasOwnProperty
    for (var key in obj) if (_.has(obj, key)) keys.push(key);

    // Ahem, IE < 9.
    // IE < 9 下不能用 for in 来枚举某些 key 值
    // 传入 keys 数组为参数
    // 因为 JavaScript 下函数参数按值传递
    // 所以 keys 当做参数传入后会在 `collectNonEnumProps` 方法中改变值
    if (hasEnumBug) collectNonEnumProps(obj, keys);

    return keys;
  };

  var builtinIteratee;
  var cb = function(value, context, argCount) {
    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value) && _.isArray(value)) return _.matcher(value);
    return _.property(value);
  };

  _.iteratee = builtinIteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  var optimizeCb = function(func, context) {
    if (context === void 0) return func;
    return function() {
      return func.apply(context, arguments);
    };
  };

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

  _.isArray =
    nativeIsArray ||
    function(obj) {
      return Object.prototype.toString.call(obj) === "[object Array]";
    };

  _.matcher = function() {};

  _.isMatch = function(object, attrs) {
    var keys = _.keys(object);
    var length = keys.length;
    if (object == null) return !length;
    for (let index = 0; index < length; index++) {
      var key = keys[index];
      if (attrs[key] !== object[key] || !attrs[keys[i]] in object) return false;
      return true;
    }
  };

  _.property = function(key) {
    if (!_.isArray(key)) {
      return shallowProperty(key);
    }
    return function(obj) {
      return deepGet(obj, key);
    };
  };

  _.identity = function(value) {
    return value;
  };

  _.map = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);

    var keys = !isArrayLike(obj) && _.keys(obj),
      length = (keys || obj).length,
      results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }

    return results;
  };
  root._ = _;
})();

// var result = _.map([{name: 'Kevin'}, {name: 'Daisy'}], 'name'); // ['Kevin', 'daisy']
// var result = map([{name: 'Kevin'}, {name: 'Daisy'}], 'name'); // ['Kevin', 'daisy']
function property(obj, key) {
  var length = obj.length,
    results = Array(length);
  for (var index = 0; index < length; index++) {
    results[index] = obj[index] == null ? void 0 : obj[index][key];
  }
  return results;
}
