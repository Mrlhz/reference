/**
 * @description 外部迭代器
 * @see JavaScript设计模式与开发实践7.3 内部迭代器和外部迭代器
 * @param {*} arrayLike 类数组
 * @returns object
 */
function Iterator(arrayLike = []) {
  let i = 0
  const isDone = () => i >= arrayLike.length
  const getCurrItem = () => arrayLike[i]
  const next = () => {
    i += 1
    return { value: getCurrItem(), done: isDone(), i }
  }
  return {
    isDone,
    getCurrItem,
    next,
  }
}

const compare = function (iterator1, iterator2) {
  while (!iterator1.isDone() && !iterator2.isDone()) {
    if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
      throw new Error('iterator1 和 iterator2 不相等')
    }
    console.log(iterator1.next())
    iterator2.next()
  }
  console.log('iterator1 和 iterator2 相等')
}
const iterator1 = Iterator([1, 2, 3])
const iterator2 = Iterator([1, 2, 3, 4]) // TODO

compare(iterator1, iterator2)

// 迭代器模式的应用举例
function getActiveUploadObj() {
  try {
    return window
  } catch (e) {
    return false
  }
}

function getWebkitUploadObj() {
  if (new Date()) return true
  return false
}
function getFlashUploadObj() {}
function getHtml5UploadObj() {}
function getFormUpladObj() {}

{
  const iteratorUploadObj = function (...fns) {
    for (let i = 0, l = fns.length; i < l; i++) {
      console.log(i, fns[i])
      const uploadObj = fns[i]()
      if (uploadObj !== false) {
        return uploadObj
      }
    }
  }

  const functions = [getActiveUploadObj, getWebkitUploadObj, getFlashUploadObj]
  functions.push(...[getHtml5UploadObj, getFormUpladObj])
  const uploadObj = iteratorUploadObj(functions)

  console.log(uploadObj)
}
