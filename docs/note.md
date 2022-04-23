
### Vue

- [VUE学习----父子元素点击事件冲突](https://www.jianshu.com/p/bb06a9d2ac77)

### 移动端开发

- [总结在移动端碰到的坑](https://www.cnblogs.com/geoffgu/p/6699057.html)
  - 安卓设备的select options的坑，尽量使用各浏览器内核都支持的api
  - 移动端click事件300ms延迟
  - 点击穿透
  - 移动端整体布局
  - input 的 compositionstart 和 compositionend 事件
  - 移动端 1px border 实现

### element 树节点的选择 调试

```js
document.querySelectorAll('.el-tree')
document.querySelectorAll('.el-tree.el-tree--highlight-current')[0].__vue__.store

var node = document.querySelectorAll('.el-tree.el-tree--highlight-current')[0].__vue__.store._getAllNodes().sort((a, b) => b.level - a.level)[0]
```

### Vue函数有回调参数，添加参数时如何保留默认回调参数

```js
<template>
  <!-- `checked` 为 true 或 false -->
  <el-checkbox
    v-model="checked">备选项
    @change="handleChange(<自定义参数>, $event)"
    @change="(...args) => handleChange(<自定义参数>, ...args)"
    @change="(...args) => handleChange(item, ...args)"
  </el-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked: true
      };
    },
    methods: {
      handleChange() {}
    }
  }
</script>
```

### Vue的@click="doXX" 和 @click = "doXX()"有什么区别？

- [参考](https://www.zhihu.com/question/49533859)

```js
if (!handler.modifiers) {
    return simplePathRE.test(handler.value)
      ? handler.value
      : `function($event){${handler.value}}`
}
```
> 上面这段代码就是VUE用来处理event的

> 带括号的话 生成的代码是
```js
 on: {
       "click": function($event) {
             doXX()
          }
    }
```
> 不带括号是
```js
on: { "click": doXX }
```
