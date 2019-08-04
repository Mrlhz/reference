// 1. 指定参数名称，返回该参数的值 或者 空字符串；
// 2. 不指定参数名称，返回全部的参数对象 或者 {}；
// 3. 如果存在多个同名参数，则返回数组 ；

// 处理hash #位置在?前后

// 参数是数字？

// https://www.nowcoder.com/questionTerminal/a3ded747e3884a3c86d09d88d1652e10?toCommentId=3206788

/**
 * @description 
 *
 * @param {*} url
 * @param {*} name
 * @returns
 */
function UrlSearchParams(url, name) {
  if (!url) return {}

  // location.search
  let index = url.indexOf('?')
  if (index !== -1) url = url.split('?')[1]

  // remove location.hash
  let hashIndex = url.indexOf('#')
  if (hashIndex !== -1 && hashIndex > index) url = url.substring(0, hashIndex)

  let params = {}
  decodeURIComponent(url).split('&').forEach((ele) => {
    let [key, value] = ele.split('=')
    if (!params[key]) {
      params[key] = value
    } else {
      params[key] = Array.isArray(params[key]) ? params[key] : [params[key]]
      params[key].push(value)
    }
  })
  if (name && params[name]) {
    return params[name]
  }
  return params
}

// UrlSearchParams('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe')

function changeStr(str) {
  if (!str) return
  return str.split('').reduce((acc, cur) => {
    if (cur.charCodeAt() >= 97) {
      cur = cur.toUpperCase()
    } else {
      cur = cur.toLowerCase()
    }
    acc += cur
    return acc
  }, '')
}

/**
 * @description 获取 url 中的参数
 *
 * @param {String} sUrl
 * @param {String} sKey
 * @returns {*}
 * 
 * @example
 * 
 * UrlSearchParams('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe')
 */
function getUrlParam(sUrl, sKey) {
  if (!sUrl) return {}

  // location.search
  var index = sUrl.indexOf('?')
  if (index !== -1) sUrl = sUrl.split('?')[1]

  // remove location.hash
  var hashIndex = sUrl.indexOf('#')
  if (hashIndex !== -1 && hashIndex > index) sUrl = sUrl.substring(0, hashIndex)

  var params = {}
  decodeURIComponent(sUrl).split('&').forEach((ele) => {
    var [key, value] = ele.split('=')
    if (!params[key]) {
      params[key] = value
    } else {
      params[key] = Array.isArray(params[key]) ? params[key] : [params[key]]
      params[key].push(value)
    }
  })
  if (sKey && params[sKey]) {
    return params[sKey]
  }
  return params
}

function getUrlParam(sUrl, sKey) {
  var result = {};
  sUrl.replace(/\??(\w+)=(\w+)&?/g, function (a, k, v) {
    if (result[k] !== void 0) {
      var t = result[k];
      result[k] = [].concat(t, v);
    } else {
      result[k] = v;
    }
  });
  if (sKey === void 0) {
    return result;
  } else {
    return result[sKey] || '';
  }
}

let city = [{
  id: '1',
  name: '广东省',
  children: [{
    id: '11',
    name: '深圳市',
    children: [{
      id: '111',
      name: '南山区'
    },
    {
      id: '112',
      name: '福田区'
    }]
  }]
}]


const fn = (value) => {
  let result = []
  
}

// fn('112') // 输出 [1， 11， 112]

// function fn(id, list) {
//   const match = list.find(item => item.id === id);
//   if (match) return [id];
//   const sub = list.find(item => id.startsWith(item.id));
//   return [sub.id].concat(fn(id, sub.children));
// }

let tree = {
  name: 'A',
  value: 4,
  children: [
      {
          name: 'B', value: 7,
          children: [{name: 'C', value: 9, children: []}]
      },
      {
          name: 'D', value: 11,
          children: [{name: 'E', value: 9, children: []}]
      },
      {name: 'F', value: 55, children: []},
      {
          name: 'G', value: 65,
          children: [
              {name: 'H', value: 21, children: []},
              {name: 'I', value: 33, children: []}
          ]
      }
  ]
};

// https://ruby-china.org/topics/33768
function find(nodes, name) {
  if (nodes.value === name) {
    return nodes
  } else {
    for (let i = 0; i < nodes.children.length; i++) {
      console.log(nodes.children[i]);
      let value = find(nodes.children[i], name)
      if(value !== null) {
        return value
      }
    }
    return null
  }
}

find(tree, 21)