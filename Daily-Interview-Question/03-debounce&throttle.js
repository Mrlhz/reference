/**
 * @link https://github.com/mqyqingfeng/Blog/issues/22
 * @link https://github.com/30-seconds/30-seconds-of-code#debounce
 * @link https://yuchengkai.cn/docs/frontend/#防抖
 * @link 
 */

/**
 * @description 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
 *
 * @param {Function} fn 要防抖动的函数
 * @param {number} wait 需要延迟的毫秒数
 * 
 * @todo 缺陷，这个防抖只能在最后调用
 */
function debounce(fn, wait) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(function () {
      fn.apply(context, args)
    }, wait)
  }
}


const debounce = (fn, ms = 0) => {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}


// Will log the window dimensions at most every 250ms
window.addEventListener(
  'resize',
  debounce(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
)


/**
 * @description 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
 *
 * @param {Function} func
 * @param {number} wait
 */
function throttle(func, wait) {

}

function throttle(func, wait) {
  let context
  let args
  let previous

  return function () {
    let now = Date.now()
    context = this
    args = arguments
    if (now - previous > wait) {
      func.apply(context, args)
      previous = now
    }
  }

}