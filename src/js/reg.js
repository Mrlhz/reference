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
/**
 * @description 获取HTML标签
 *
 * @param {String} str
 * @param {String} tag
 * @returns
 */
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


var r = /([\?&].+=.+)/


// http://www.ituring.com.cn/article/210470
function testNum(str) {

  let stack = str.split(',').concat(-1)
  console.log(stack);
  let next = Number(stack[0])

  let res = []

  while (stack.length) {
    if (next + 1 === Number(stack[0])) {
      res.push('@' + next)
    } else {
      res.push(next)
    }
    next = Number(stack.shift())
  }

  console.log(res);
}

testNum('1,2,3,5,7,8,10')

const obj = { foo: 'bar', baz: 42 };
// [ ['foo', 'bar'], ['baz', 42] ]
function entries(obj) {
  let keys = Object.keys(obj)
  let len = keys.length

  let arr = new Array(len)

  for (let i = 0; i < len; i++) {
    arr[i] = [keys[i], obj[keys[i]]]
  }
  console.log(arr);
  return arr
}

if (!Object.entries)
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    
    return resArray;
  };

// entries(obj)

// function convert(list) {
//   let res = list.concat().filter( (el) => {
//     return el.parentId === 0
//   })
//   console.log(res);


//   return res
// }

let list =[
  {id:8,name:'部门H',parentId:4},
  {id:1,name:'部门A',parentId:0},
  {id:2,name:'部门B',parentId:0},
  {id:3,name:'部门C',parentId:1},
  {id:4,name:'部门D',parentId:1},
  {id:5,name:'部门E',parentId:2},
  {id:6,name:'部门F',parentId:3},
  {id:7,name:'部门G',parentId:2}
];

function convert(list) {
	const res = []
	const map = list.reduce((res, v) => (res[v.id] = v, res), {})
	for (const item of list) {
		if (item.parentId === 0) {
			res.push(item)
			continue
		}
		if (item.parentId in map) {
			const parent = map[item.parentId]
			parent.children = parent.children || []
			parent.children.push(item)
		}
	}
	return res
}

console.log(convert(list));