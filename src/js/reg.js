// 

var str1 = '<a href="https://www.yuque.com/afx/blog">蚂蚁金服AFX团队博客</a >'
var str2 = '<a href="https://www.yuque.com/atian25/plantuml">PlantUML</a >'
var str3 = '<a href="https://www.yuque.com/awesome/fe_weekly">前端技术周刊</a >'
var str4 = '<a href="https://www.yuque.com/itchina110/goodfe">前端精选</a >'

// 删除a标签与span标签
function removeTags(str) {
  var re = /(<\/?a.*?>)|(<\/?span.*?>)/gi
  return str.replace(re, '')
}


function matchTagValue() {

}

// 匹配a标签href属性
// TODO 容错处理
function matchHrefValue(str) {
  var re = /<a[^>]+href=["\'](.*?)["\']/
  var reg = /href=["'](.*?)["\']/ // ?
  var reg1 = /<a\b[^>]+\bhref="([^"]*)"[^>]*>/
  return str.match(re)[1]
}

// TODO 其他标签
function matchATagValue(str) {
  var re = /<a[^>]*href=['"]([^"]*)['"][^>]*>(.*?)<\/a>/g;
  str.match(re)
  console.log(RegExp.$1)
  console.log(RegExp.$2)
}

// TODO 标签中不能有空格  <a></a >
function matchTagsValue(str, tag) {
  tag = tag || 'a'
  var re = new RegExp(`<${tag}[^>]*href=['"]([^'"]*)['"][^>]*>(.*?)<\\/${tag}>`)
  var res = str.match(re)
  console.log(res);
  console.log(RegExp.$1)
  console.log(RegExp.$2)
  return res
}

// test
matchATagValue(str1)

// 获取URL参数
var urlParams = function (key) {
  var ret = location.search.match(new RegExp('(\\?|&)' + key + '=(.*?)(&|$)'))
  return ret && decodeURIComponent(ret[2])
}

// TODO
function getParam(url, name) {
  var re = new RegExp(`(^|\\?|&)${name}=([^&]*)(\\s|&|$)`, 'i')
  var res = url.match(re)
  console.log(res)
  console.log(decodeURIComponent(RegExp.$2))
}

getParam('https://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled', 'id')


// 千位分隔符
// 匹配的是后面是3*n个数字的非单词边界(\B)
// bug 小数点不能超过3位
/**
 * 
 * @param {string} str 
 */
function thousandSeparator(str) {
  return str.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',')
}

thousandSeparator('1234567890') // 1,234,567,890
thousandSeparator('123456789.1369') // 123,456,789.1,369

