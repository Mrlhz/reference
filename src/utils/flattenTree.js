/**
 * @description 无递归扁平化Tree数据，使用堆栈
 * @param {Array} data
 * @reference https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 * @returns
 */
export function flattenTree(data = [], setting = {}) {
  const { childrenKey = 'children' } = setting
  const stack = [...data]
  const result = []
  while (stack.length) {
    const next = stack.shift()
    if (next && Array.isArray(next[childrenKey]) && next[childrenKey].length) {
      stack.push(...next[childrenKey])
    }

    result.push(next)
  }
  return result
}

export const getChildState = (nodes) => {
  let all = true
  let none = true
  let allWithoutDisable = true
  for (let i = 0, l = nodes.length; i < l; i++) {
    const node = nodes[i]
    if (node.checked !== true || node.indeterminate) {
      all = false
      if (!node.disabled) {
        allWithoutDisable = false
      }
    }
    if (node.checked !== false || node.indeterminate) {
      none = false
    }
  }

  return { all, none, allWithoutDisable, half: !all && !none }
}
