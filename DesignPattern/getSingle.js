/**
 * @description 惰性单例
 * @see JavaScript设计模式与开发实践4.6 通用的惰性单例
 * @param {Function} fn 方法
 * @returns result fn的运算结果
 */
const getSingle = function (fn) {
  if (typeof fn !== 'function') return
  let result = null
  return function () {
    return result || (result = fn.apply(this, arguments))
  }
}

const render = getSingle(function () {
  console.log('开始渲染列表')
  return true
})

// render 函数执行了 3 次，但实际上只输出了一次打印
render()
render()
render()
