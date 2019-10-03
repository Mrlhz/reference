
- [RegExp](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

## 元字符

元字符 | 等价类 | 描述
---|---|---
.	        | [^\n\r]         |    查找单个字符，除了换行和行结束符 
\w	      | [a-zA-Z_0-9]    |    查找单词字符（字母、数字下划线）
\W	      | [^a-zA-Z_0-9]   |    查找非单词字符
\d	      | [0-9]           |    查找数字
\D	      | [^0-9]          |    查找非数字字符
\s	      | [\t\n\x0B\f\r]  |    查找空白字符
\S	      | [^\t\n\x0B\f\r] |    查找非空白字符
\b	      |             |        匹配单词边界
\B	      |             |        匹配非单词边界
\0	      |             |        查找 NULL 字符
\n	      |             |        查找换行符
\f	      |             |        查找换页符
\r	      |             |        查找回车符
\t	      |             |        查找制表符
\v	      |             |        查找垂直制表符
\xxx	    |             |        查找以八进制数 xxx 规定的字符
\xdd	    |             |        查找以十六进制数 dd 规定的字符
\uxxxx	  |             |        查找以十六进制数 xxxx 规定的 Unicode 字符



### 贪婪模式

```js
var str ='12345678'
str.match(/\d{3,6}/) // ["123456", index: 0, input: "12345678", groups: undefined]
```

### 非贪婪模式

```js
var str ='123456789'
str.match(/\d{3,6}?/g) // ["123", "456", "789"]
```

### 忽略分组（非捕获分组）
`?:`

```js
/(?: Byron).(ok)/
```

```js
var reg1 = /\w/
var reg2 = /\w/g

while(reg2.test('ab')){
  console.log(reg2.lastIndex)
}
```

1. rex.test("str")--> 是否与正则匹配；
2. rex.exec("str")--> 接受返回数组。会从lastIndex处开始匹配而不是从头匹配；
3. "str".search(rex)--> 查找第一次匹配的子字符串的位置.忽视g全局；
4. "str".replace(rex)--> 字符串中的某些子串替换为需要的内容
5. "str".split(rex)--> 将一个字符串拆分成一个数组
6. "str".match(rex)--> g时将所有匹配结果以数组形式返回


### 前瞻
```js
// 查找exp2前面的exp1
exp1(?=exp2)


// 查找后面不是exp2的exp1
exp1(?!exp2)
```