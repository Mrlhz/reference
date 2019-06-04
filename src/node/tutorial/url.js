const url = require('url');

let site = 'https://api.douban.com/v2/movie/search?tag=喜剧&start=0&count=10';

let { pathname, query } = url.parse(site, true); // url.parse() 解析网址，true 的意思是把参数解析成对象

console.log(pathname, query);