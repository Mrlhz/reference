# JavaScript类型：关于类型，有哪些你不知道的细节？

- [JavaScript 数据类型和数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)

- [Undefined](#Undefined)
- Null
- Boolean
- String
- Number
- Symbol
- Object


## 类型

- 为什么有的编程规范要求用`void 0`代替`undefined`？
- 字符串有最大长度吗？
- [`0.1 + 0.2`不是等于`0.3`么？为什么JavaScript里不是这样的？](https://yuchengkai.cn/docs/frontend/#为什么-0-1-0-2-0-3)
- ES6新加入的Symbol是个什么东西？
- 为什么给对象添加的方法能用在基本类型上？


## Undefined

> 类型表示未定义，它的类型只有一个值，就是 undefined

> JavaScript语言公认的设计失误之一：JavaScript的代码undefined是一个变量，而并非是一个关键字


## Null

## Boolean

`0`、`-0`、`null`、`false`、`NaN`、`undefined`、或者空字符串（`""`），生成的 Boolean 对象的值为 false

## String

- [String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

> String 用于表示文本数据。String 有最大长度是 2^53 - 1，String 的意义并非“字符串”，而是字符串的 UTF16 编码，我们字符串的操作 charAt、charCodeAt、length 等方法针对的都是 UTF16 编码。所以，字符串的最大长度，实际上是受字符串的编码长度影响的。

> length属性返回字符串中字符编码单元的数量。JavaScript 使用 UTF-16 编码，该编码使用一个 16 比特的编码单元来表示大部分常见的字符，使用两个代码单元表示不常用的字符。因此 length 返回值可能与字符串中实际的字符数量不相同。

> Note：现行的字符集国际标准，字符是以 Unicode 的方式表示的，每一个 Unicode 的码点表示一个字符，理论上，Unicode 的范围是无限的。UTF是Unicode的编码方式，规定了码点在计算机中的表示方法，常见的有 UTF16 和 UTF8。 Unicode 的码点通常用 U+??? 来表示，其中 ??? 是十六进制的码点值。 0-65536（U+0000 - U+FFFF）的码点被称为基本字符区域（BMP）。

## Number

> JavaScript中的Number类型有 18437736874454810627(即2^64-2^53+3) 个值。

> 根据双精度浮点数的定义，Number类型中有效的整数范围是-0x1fffffffffffff至0x1fffffffffffff，所以Number无法精确表示此范围外的整数。

```js
Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON
```


## Symbol

## Object

## 类型转换

![](https://static001.geekbang.org/resource/image/71/20/71bafbd2404dc3ffa5ccf5d0ba077720.jpg)

### StringToNumber

### NumberToString

### 装箱转换


