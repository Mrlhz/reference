// 

/**
 * @description 如何把一个字符串的大小写取反（大写变小写小写变大写），例如 'AbC' 变成 'aBc'
 *
 * @param {String} str
 * @returns {String}
 */
function invetString(str) {
  if (!str) return ''

  return str.split('').reduce((acc, cur) => {
    if (cur.charCodeAt() >= 97) {
      cur = cur.toUpperCase()
    } else {
      cur = cur.toLowerCase()
    }
    acc += cur
    return acc
  }, '')
}

function invetString2(str) {
  if (!str) return ''
  let result = ''
  str.split('').forEach((ele) => {
    if (ele === ele.toUpperCase()) {
      result += ele.toLowerCase()
    } else {
      result += ele.toUpperCase()
    }
  })

  return result
}


invetString('a')
invetString('AbC')

/**
 * @description 返回26个英文字母
 *
 * @param {LetterType} type 'upper | 'lower'
 * @returns {string[]}
 */

function letter(type) {
  let start = type === 'upper' ? 65 : 97
  return Array.from({ length: 26 }, (_, index) => String.fromCodePoint(start + index))
}


// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/116#issuecomment-490377015
// 用正则判断是否为小写字母

function transfer(str) {
  return str.replace(/[a-zA-Z]/g, (match) => {
    return /[a-z]/.test(match) ? match.toUpperCase() : match.toLowerCase()
  })
}

// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/116#issue-441487744
function processString (s) {
  var arr = s.split('');
  var new_arr = arr.map((item) => {
      return item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
  });
  return new_arr.join('');
}
console.log(processString('AbC'));
