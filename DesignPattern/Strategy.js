/**
 * @description 策略模式：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。
 */
class Strategy {
  constructor() {
    this.strategyMap = {}
  }
  perform(name, fn) {
    this.strategyMap[name] = fn
  }
  // invok
  context(type, ...rest) {
    const fn = this.strategyMap[type]
    if (typeof fn !== 'function') return
    return fn(...rest)
  }
}

// export default Strategy

const strategy = new Strategy()

strategy.perform('bitToKB', function (val) {
  const num = Number(val)
  return isNaN(num) ? val : (num / 1024).toFixed(0) + 'KB'
})

strategy.perform('bitToMB', function (val) {
  const num = Number(val)
  return isNaN(num) ? val : (num / 1024 / 1024).toFixed(1) + 'MB'
})

strategy.perform('timeout', function (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms, 'done')
  })
})

let sizeKb = strategy.context('bitToKB', 1234)
let sizeMb = strategy.context('bitToMB', 8636152)
strategy.context('timeout', 1000).then((ms) => {
  console.log({ ms })
})

console.log(sizeKb)
console.log(sizeMb)
