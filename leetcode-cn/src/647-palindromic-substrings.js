const { isPalindrome } = require('./9-palindrome-number')

/**
 * @description 给定一个字符串，计算这个字符串中有多少个回文子串
 *
 * @param {String} str
 * @returns {Number}
 */
function countSubstrings (str) {
  let len = str.length

  let result = []

  for (let i = 0; i < len; i++) {
    for (let j = i+1; j <= len; j++) {
      let s = str.substring(i, j)
      if (isPalindrome(s)) result.push(s)
    }
  }
  return result.length
}

module.exports = {
  countSubstrings
}