## 创建对象
- 对象字面量
- 构造函数
- Object.create
- 

- 所有的引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性（ null除外）
- 所有的引用类型（数组、对象、函数），都有一个 __proto__ 属性，属性值是一个普通的对象
- 所有的函数，都有一个 prototype 属性，属性值也是一个普通的对象
- 所有的引用类型（数组、对象、函数）， __proto__ 属性值指向它的构造函数的prototype 属性值

https://blog.csdn.net/weixin_37861326/article/details/79858190