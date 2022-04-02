import { flattenTree, getChildState } from '@/utils/flattenTree'
import deepCopy from '@/utils/deepClone'

export const hasChildren = (node = {}, { childrenKey } = {}) => {
  return Array.isArray(node[childrenKey]) && node[childrenKey].length
}

/**
 * @reference https://github.com/ElemeFE/element/blob/dev/packages/tree/src/model/node.js
 */
export default class Node {
  constructor(options) {
    const { props, data } = options
    this.setting = props
    this.sourceData = data
    this.cloneData = deepCopy(data)
    this.flattenData = flattenTree(this.cloneData, props)
    this.dataSet = {}
    this.setDataSet()
    this.updateState(this.flattenData)
    this.setParent(this.flattenData)
    console.time('setLevel')
    this.setLevel(this.flattenData)
    console.timeEnd('setLevel')
  }

  setDataSet() {
    this.flattenData.forEach((node) => {
      this.dataSet[node[this.setting.idKey]] = node
    })
  }
  // updateLeafState
  // 设置响应式属性，避免vue 数据更新了但是视图没有更新
  updateState(nodes = []) {
    nodes.forEach((node) => {
      node.isLeaf = !hasChildren(node, this.setting)
      node.level = 0
      node.rootId = null
      node.pIds = []
      node.checked = false
      node.indeterminate = false
    })
  }
  setParent(nodes = []) {
    const { pIdKey } = this.setting
    for (let i = 0, l = nodes.length; i < l; i++) {
      const node = nodes[i]
      if (node[pIdKey]) {
        node.parent = this.dataSet[node[pIdKey]]
      }
    }
  }
  setLevel(nodes) {
    const { idKey } = this.setting
    for (let i = 0, l = nodes.length; i < l; i++) {
      const node = nodes[i]
      node.level = 1
      if (node.parent) {
        // let p = this.dataSet[node[pIdKey]]
        // while (p) {
        //   p = this.dataSet[p[pIdKey]]
        //   node.level += 1
        // }
        let p = node.parent
        while (p) {
          node.rootId = p[idKey]
          node.level += 1
          node.pIds.push(p[idKey])
          p = p.parent
        }
      }
    }
  }

  _beforeChecked(nodes) {
    const { idKey } = this.setting
    const stack = [...nodes]
    while (stack.length) {
      const next = stack.shift()
      const parent = next.parent
      const hasParent = (p) => nodes.find((node) => node[idKey] === p[idKey])
      if (parent && !hasParent(parent)) {
        stack.push(parent)
        nodes.push(parent)
      }
    }
    return nodes
  }

  _setCheckedKeys(keys) {
    this.flattenData.forEach((node) => {
      node.checked = false
      node.indeterminate = false
    })
    const { childrenKey } = this.setting
    // TODO 设置勾选节点的 key数组必须包含父子节点
    const _checkedNodes = [] // 根据勾选节点的 key数组，获取对应的nodes节点
    keys.forEach((key) => {
      const node = this.dataSet[key]
      node && _checkedNodes.push(node)
    })

    const allCheckedNodes = this._beforeChecked(_checkedNodes)
    console.log(allCheckedNodes)

    const checkedNodes = allCheckedNodes.sort((a, b) => b.level - a.level) // 节点排序：节点最深的排在最前面
    console.log(checkedNodes)
    for (let i = 0, l = checkedNodes.length; i < l; i++) {
      const node = checkedNodes[i]
      if (node.isLeaf) {
        node.checked = true
        node.indeterminate = false
      }
      const { half, all } = getChildState(node[childrenKey] || [])
      console.log({ half, all, name: node.name, id: node.id })
      node.checked = all
      node.indeterminate = half
    }
  }

  _handleCheck(node, checked) {
    console.log(node, checked)
  }

  _getParentNodes(node, setting = {}) {
    const { pIdKey } = setting
    let parent = this.dataSet[node[pIdKey]]
    const result = []
    while (parent) {
      result.push(parent)
      parent = this.dataSet[parent[pIdKey]]
    }
    return result
  }
}
