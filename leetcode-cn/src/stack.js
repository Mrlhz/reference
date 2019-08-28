/**
 * @description 模拟栈，后进后出
 */
class Stack {
  constructor() {
    this.items = []
  }

  push(item) {
    this.items.push(item)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  clear() {
    this.items = []
  }

  print() {
    console.log(this.items.toString())
    // console.log(this.items.join())
  }
}


/**
 * @description 进制转化
 *
 * @param {Number} decNumber
 */
function divideBy2(decNumber, base = 2) {
  let remStack = new Stack()
  let rem = 0
  let binaryString = ''
  let digits = '0123456789ABCDEF'

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }
  console.log(remStack)

  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()]
  }
  console.log(binaryString)
  // binaryString = remStack.items.reverse().join('')
  return binaryString
}

divideBy2(10, 8)
divideBy2(100, 16)
divideBy2(100345, 2)
divideBy2(100345, 8)
divideBy2(100345, 16)