// 


// 删除a标签与span标签
function removeTags(str){
  var re = /(<\/?a.*?>)|(<\/?span.*?>)/gi
  return str.replace(re, '')
}


function matchTagValue(){

}

// 匹配a标签href属性
// TODO 容错处理
function matchHrefValue(str){
  var re = /<a[^>]+href=["\'](.*?)["\']/
  var reg = /href=["'](.*?)["\']/ // ?
  var reg1 = /<a\b[^>]+\bhref="([^"]*)"[^>]*>/
  return str.match(re)[1]
}
