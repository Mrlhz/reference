/**
 * @description 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数
 *
 * @param {Array} arr
 * @param {Number} k
 * @returns
 * 
 * @example
 * rotate([1, 2, 3, 4, 5, 6, 7], 3)
 * output: [5, 6, 7, 1, 2, 3, 4]
 * 
 * rotate([-1, -100, 3, 99], 2)
 * output: [3, 99, -1, -100]
 */
function rotate(arr, k) {
  if (!arr) throw Error('requires an array')
  if (!k || k < 0) return arr

  let n = k % arr.length
  let stack = [].concat(arr)

  let index = 1

  while (n) {
    stack.unshift(stack.pop())
    n--
    console.log(`向右旋转 ${index++} 步`, stack);
  }

  return stack
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotate([-1, -100, 3, 99], 2))
console.log(rotate([1, 2], 13))
console.log(rotate([1, 2], -1))
console.log(rotate([1, 2, 3, 4, 5, 6, 7]))
console.log(rotate([]))