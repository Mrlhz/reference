// https://mp.weixin.qq.com/s/e3OPXe3EXtqPSRFxf137Uw
function getCollectionWeight(collection) {
  return getCollectionValues(collection).reduce(reduceWeightSum, 0);
}

function getCollectionValues(collection) {  
  if (collection instanceof Array) {
    return collection;
  }
  if (collection instanceof Map) {
    return getMapValues(collection);
  }
  return getPlainObjectValues(collection);
}

function reduceWeightSum(sum, item) {  
  return sum + getWeightByType(item);
}

function getWeightByType(value) {
  const WEIGHT_NULL_UNDEFINED = 1;
  const WEIGHT_PRIMITIVE = 2;
  const WEIGHT_OBJECT_FUNCTION = 4;
  if (value == null) {
    return WEIGHT_NULL_UNDEFINED;
  }
  if (typeof value === 'object' || typeof value === 'function') {
    return WEIGHT_OBJECT_FUNCTION;
  }
  return WEIGHT_PRIMITIVE;
}

// Code extracted into getMapValues()

function getMapValues(map) {
  return [...map.values()];
}

// Code extracted into getPlainObjectValues()

function getPlainObjectValues(object) {
  return Object.keys(object).map(function (key) {
    return object[key];
  });
}

let myArray = [null, {}, 15];

let myMap = new Map([
  ['functionKey', function () {}]
]);

let myObject = {
  'stringKey': 'Hello world'
};

console.log(getCollectionWeight(myArray)); // => 7 (1 + 4 + 2)  

console.log(getCollectionWeight(myMap)); // => 4  

console.log(getCollectionWeight(myObject)); // => 2