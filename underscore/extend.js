/**
 *  https://github.com/mqyqingfeng/Blog/issues/33
 *  https://github.com/hanzichi/underscore-analysis
 */

(function() {
  var nativeKeys = Object.keys;

  var root = this;
  var _ = function() {};
  root._ = _;

  _.isObject = function(obj){
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) keys.push(key);
      return keys;
    }
  };

  var createAssigner = function(keysFunc, defaults) {
    return function(obj) {
      var length = arguments.length;
      if (defaults) return Object(obj);
      // 传入的参数 0 || 1 个，或者第一个参数是null
      if (length < 2 || obj == null) return obj;
      for (let index = 1; index < length; index++) {
        var source = arguments[index],
            // keysFunc 表示_.keys || Object.keys()
            keys = keysFunc(source),
            l = keys.length;
        for (let i = 0; i < l; i++) {
          var key = keys[i];
          if (!defaults || obj[key] === void 0) {
            obj[key] = source[key];
          }
        }
      }
      return obj;
    };
  };

  _.extendOwn = _.assign = createAssigner(_.keys);
})();
