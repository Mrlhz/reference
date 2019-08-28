/**
 * @description 回文
 * @param {Number|String} input
 * @returns {Boolean}
 */
function isPalindrome(input) {
  let s = typeof input === 'string' ? input : input.toString()
  let len = s.length

  for (let i = 0; i < len / 2; i++) {
    if (s[i] !== s[len - 1 - i]) {
      return false
    }
  }
  return true
}

/**
 * @description 是否回文字符串
 * @param {String} str
 * @returns {Boolean}
 */
function isPalindromic(str) {
  if (!str) return

  let len = str.length

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) return false
  }
  return true
}

module.exports = {
  isPalindrome,
  isPalindromic
}