const { isPalindromic } = require('./9-palindrome-number')

/**
 * @description 给定一个字符串 s，找到 s 中最长的回文子串
 * @param {String} str
 * @returns {String}
 */
function longestPalindrome(str) {
  let len = str.length
  let longest = ''

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      let s = str.substring(i, j)
      if (isPalindromic(s) && s.length > longest.length) {
        longest = s
      }
    }    
  }
  return longest
}

// longestPalindrome('babad') // 'bab' || 'aba'

module.exports = {
  longestPalindrome
}