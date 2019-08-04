/**
 * @description 找出字符串中连续出现最多的字符和个数（蘑菇街）
 *
 * @param {*} str
 * @returns {Object}
 * 
 * @todo
 * 
 * @example
 * getMostStr('abcaakjbb')
 * {'a':2,'b':2}
 * 
 * getMostStr('abbkejsbcccwqaa')
 * {'c':3}
 */
function getMostStr(str) {
  let res = {}

  let stack = str.split('')
  let next = stack.shift()
  while (stack.length) {
    if (next === stack[0]) {
      res[next] ? res[next]++ : res[next] = 2;
    }
    next = stack.shift()
  }

  // 找出res中最大的值
  let max = Math.max.apply(Math, Object.values(res))

  let result = {}

  if(max > 0) {
    for (const [key, value] of Object.entries(res)) {
      if(value === max) {
        result[key] = value
      }
    }
  }
  console.log(result);
  return result
}


getMostStr('abc') // {}

getMostStr('abcaakjbb') // { a: 2, b: 2 }
getMostStr('abbkejsbcccwqaa') // { c: 3 }


/**
 * @see https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/220#issuecomment-515277519
 *
 * @param {*} str
 */
function getStr(str) {
  const arr = str.match(/(\w)\1*/g);
  const maxLen = Math.max(...arr.map(s => s.length));
  const result = arr.reduce((pre, curr) => {
    if (curr.length === maxLen) {
      pre[curr[0]] = curr.length;
    }
    return pre;
  }, {});

  console.log(result);
}

// getStr('abcaakjbb')
// getStr('abbkejsbcccwqaa')