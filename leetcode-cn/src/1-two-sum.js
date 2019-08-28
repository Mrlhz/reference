/**
 * @description
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum (nums, target) {
  // let num = nums.filter( (item) => item <= target)
  let num = [...nums]
  for (let i = 0, len = num.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      // console.log(num[i], num[j])
      if (num[i] + num[j] === target) {
        // console.log(num[i], num[j])
        // console.log([i,j])
        return [i, j]
      }
    }
  }
  return [0, 0]
}

// twoSum([3,2,4], 6) // [1, 2]
// twoSum([11, 15, 5, 3, 8, 9, 2, 7], 9) // [6, 7]

var twoSum2 = function(nums, target) {
  let res = {}
  for (let i = 0; i < nums.length; i++) { // 每个人报出自己想要配对的人
    if (res[nums[i]] !== undefined) { // 如果有人被登记过
      return [nums[i], res[nums[i]]] // 就是他
    } else {  // 否则
      res[target - nums[i]] = nums[i] // 主持人记住他的需求
    }
  }
}

// bug twoSum2([0,4,3,0], 0)
function twoSum2(nums, target) {
  let res = {}

  for (let i = 0, len = nums.length; i < len; i++) {
    let temp = target - nums[i]
    if (res[temp]) {
      // return [res[i], i]
      console.log(res[nums[i]], temp, i);
    }
    res[nums[i]] = i
  }
}

module.exports = {
  twoSum
}
