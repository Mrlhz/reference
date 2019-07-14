/**
 * @description 给定两个数组，写一个方法来计算它们的交集(求的是两个数组的最长公共子序列)
 * @param {*} arr1 
 * @param {*} arr2 
 * 
 * @todo 思路不对
 * @example
 * 
 * 例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。
 */
function getCommonSubsequence(arr1, arr2) {
  let len1 = arr1.length
  let len2 = arr2.length

  let stack = len1 > len2 ? [...arr2] : [...arr1]
  let big = len1 > len2 ? [...arr1] : [...arr2]
  let result = []
  stack.forEach((ele) => {
    if (big.indexOf(ele) !== -1) {
      result.push(ele)
    }
  })
  return result
}

// test

// let nums1 = [1, 2, 2, 1]
// let nums2 = [2, 2]

var nums1 = [1, 1]
var nums2 = [1]

getCommonSubsequence(nums1, nums2) // [1]
getCommonSubsequence(nums2, nums1) // [1]



getCommonSubsequence([1, 1, 1, 12, 3, 4, 7], [1, 1, 23, 5, 7]) // [1, 1, 7]
getCommonSubsequence([1, 1, 23, 5, 7], [1, 1, 1, 12, 3, 4, 7]) // [1, 1, 7]
getCommonSubsequence([1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1])

// bug
getCommonSubsequence([1, 2, 1, 2, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/102#issuecomment-485299117
// 哈希表，时间复杂度O(m + n) m为nums1长度，n为nums2长度
function f(nums1, nums2) {
  const map = {}
  const res = []
  for (let n1 of nums1) {
    if (map[n1]) {
      map[n1]++
    } else {
      map[n1] = 1
    }
  }
  for (let n2 of nums2) {
    if (map[n2] > 0) {
      res.push(n2)
      map[n2]--
    }
  }
  return res
}

f([1, 1], [1]) // [1]
f([1, 1, 0], [1, 0]) // [1, 0]
f([1, 1, 1, 12, 3, 4, 7], [1, 1, 23, 5, 7]) // [1, 1, 7]
f([1, 1, 23, 5, 7], [1, 1, 1, 12, 3, 4, 7]) // [1, 1, 7]
f([1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1]) // [1, 1, 1, 1, 1]
f([1, 2, 1, 2, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) // [1]