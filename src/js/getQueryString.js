/**
 * 
 * @param {string} str 带有参数url地址
 * 1. 判断逻辑 字符串且格式符合
 * 2. 将参数key, value保存到{} value可以Number()转化的就转化 => {key:"user", value: "anonymous"}
 * 3. 解构取出key,value
 */

 
/**
 * 
 * @param {string} str 带有参数url地址
 * 1. 返回从问号到 URL 末尾的所有内容(location.search)
 * 2. 将参数key, value保存到{} value可以Number()转化的就转化 => {key:"user", value: "anonymous"}
 * 3. reduce处理参数(比如key相同,value不同)
 */
function getQueryStringArgs(str) {
  let query = getLocationSearch(str);
  if(query.length > 0){
    let arr = queryParameterObject(query);
    return reduceParameterObject(arr);
    // console.log(reduceParameterObject(arr));
  }
}

/**
 * 
 * 
 * @param {string} args 
 * @returns location.search.substring(1)
 */
function getLocationSearch(args) {
  if (typeof args !== 'string') {
    return {};
  }
  let index = args.indexOf('?');
  return index >= 0 ? args.substring(index + 1) : '';
}

/**
 * 
 * 
 * @param {string} query 
 * @returns {object} 由查询参数key,value组成的{}
 */
function queryParameterObject(query){
  return decodeURIComponent(query).split('&').map( params => {
    const tmp = params.split('=');
    const key = tmp[0];
    let value = tmp[1] || true;
    // Number(true) = 1
    if(typeof value === 'string' && !isNaN(value)){
      value = Number(value)
    }
    return {key, value}
  })
}

/**
 * 
 * 
 * @param {array} arr
 * @returns {object} 处理过的参数key,value组成的{}
 */
function reduceParameterObject(arr){
  return arr.reduce( (params, item) => {
    const {key, value} = item;
    if(typeof params[key] === 'undefined'){
      params[key] = value;
    } else {
      params[key] = Array.isArray(params[key]) ? params[key] : [params[key]];
      params[key].push(value)
    }
    return params;
  }, {})
}

getQueryStringArgs('https://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled')