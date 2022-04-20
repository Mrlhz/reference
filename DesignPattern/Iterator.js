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
  const next = () => (i += 1)
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
    iterator1.next()
    iterator2.next()
  }
  console.log('iterator1 和 iterator2 相等')
}
const iterator1 = Iterator([1, 2, 3])
const iterator2 = Iterator([1, 2, 3, 4]) // TODO

compare(iterator1, iterator2)
