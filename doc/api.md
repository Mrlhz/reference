# API接口

> 没有apikey访问不了

### 获取电影Top250

>example

`https://api.douban.com/v2/movie/top250?start=0&count=10`

>访问参数

key|描述
---|---
start | 数据的开始项
count| 单页条数


### 即将上映电影：

>接口

`https://api.douban.com/v2/movie/coming_soon`

### 电影搜索

>接口

`https://api.douban.com/v2/movie/search`

### 电影搜索

>接口

`https://api.douban.com/v2/movie/search`



参数|描述
---|---
start | 数据的开始项
count | 单页条数
q | 要搜索的电影关键字
tag | 要搜索的电影的标签

>example 搜索电影《神秘巨星》

`https://api.douban.com/v2/movie/search?q=神秘巨星&start=0&count=10`

>example 搜索喜剧类型的电影

`https://api.douban.com/v2/movie/search?tag=喜剧&start=0&count=10`


### 电影详情

>接口

`https://api.douban.com/v2/movie/subject/:id`

>example 电影《神秘巨星》的电影id为：26942674

`https://api.douban.com/v2/movie/subject/26942674`

### 获取正在热映的电影

`https://api.douban.com/v2/movie/in_theaters`

>example

`https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10`

>访问参数

key|描述
---|---
start | 数据的开始项
count | 单页条数
city | 城市

>数据格式

key	| 类型	|描述
---|---|---
count	    | int	| 单页条数
start	    | int	| 数据的开始项
total	    | int	| 数据总条数
subjects	| json数组	| 电影列表
— id	    | string	| 电影id
— title	  | string	| 电影名中文名
— images	| json对象	| 存放各种大小的电影图
—— small／large／medium	|string	|电影图url
— genres	| json数组| 	电影类型
— rating	| json对象	| 评分信息
—— average	| float	| 电影评分
— directors	| json数组	| 导演列表
—— name	| string	| 导演名
— casts	| json数组	| 主演列表
—— name	| string	| 主演名
— year	| int	| 年份

--------------------- 

- [豆瓣电影的API接口](https://blog.csdn.net/IT_czh/article/details/85617835)
- [豆瓣API实践项目-数据api接口](https://blog.csdn.net/mario_faker/article/details/79618235)