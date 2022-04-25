/**
 * @description 事件总线 EventBus (常用任意两个组件之间通讯)
 * @see https://juejin.cn/post/6884393371591245838 Vue 总结：组件间的通讯方式（父子传参、兄弟传参、任意两个组件间传参、多个组件嵌套传参）
 * @see https://juejin.cn/post/6999687348120190983#heading-20 Vue3的8种和Vue2的12种组件通信，值得收藏
 */
class Bus {
  constructor() {
    this.callbackList = {}
  }

  $on(name, callback) {
    // 注册事件
    if (!Array.isArray(this.callbackList[name])) {
      this.callbackList[name] = []
    }
    if (typeof callback !== 'function') return
    this.callbackList[name].push(callback)
  }

  $emit(name, ...args) {
    // 触发事件
    if (this.callbackList[name]) {
      this.callbackList[name].forEach((cb) => cb(...args))
    }
  }
}

export default Bus

// 示例
// Vue.prototype.$bus = new Bus()

// // 任意两个组件中
// // 组件一：在组件的 mounted() 去注册事件
// this.$bus.$on('confirm', function (data) {})

// // 组件二：触发事件(如：点击事件后执行触发事件即可)
// this.$bus.$emit('confirm', list)
