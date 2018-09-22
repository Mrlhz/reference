new Promise(
    /* 执行器 executor */
    function (resolve, reject) {
      // 一段耗时很长的异步操作

      resolve(); // 数据处理完成

      reject(); // 数据处理出错
    }
  )
  .then(function A() {
    // 成功，下一步
  }, function B() {
    // 失败，做相应处理
  });

// 简单的范例-定时执行
console.log('简单的范例-定时执行 -- go')
new Promise(resolve => {
    setTimeout(() => {
      resolve('hello')
    }, 2000)
  })

  .then(value => {
    console.log(`${value} world`)
  })

// 分两次，顺序依次执行

console.log(`分两次，顺序依次执行 -- go -- ${new Date().toLocaleString()}`)
new Promise(resolve => {
    setTimeout(() => {
      resolve('hello')
    }, 2000)
  })

  .then(value => {
    console.log(`${value} -- ${new Date().toLocaleString()}`)
    return new Promise(resolve => {
      console.log(`${value} -- ${new Date().toLocaleString()}`)
      setTimeout(() => {
        resolve(`world -- ${new Date().toLocaleString()}`)
      }, 2000)
    })
  })

  .then(value => {
    console.log(`${value} world -- ${new Date().toLocaleString()}`)
  })

class Time {
  formatTime(date) {
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    return [hour, minute, second].map(this.formatNumber).join(':')
  }

  formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
}

const t = new Time()
t.formatTime(new Date())