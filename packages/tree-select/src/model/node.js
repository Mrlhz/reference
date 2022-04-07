import { flattenTree, getChildState } from '@/utils/flattenTree'
import deepCopy from '@/utils/deepClone'

export const hasChildren = (node = {}, { childrenKey } = {}) => {
  return Array.isArray(node[childrenKey]) && node[childrenKey].length
}

export const defaultProps = {
  idKey: 'id',
  pIdKey: 'pId',
  label: 'label',
  rootId: null,
  childrenKey: 'children',
}

/**
 * @reference https://github.com/ElemeFE/element/blob/dev/packages/tree/src/model/node.js
 */
export default class Node {
  constructor(options) {
    const { props = defaultProps, data } = options
    this.setting = props
    this.sourceData = data
    this.cloneData = deepCopy(data)
    this.flattenData = flattenTree(this.cloneData, props)
    this.nodesMap = new Map()
    this.setNodesMap()
    this.updateState(this.flattenData)
    this.setParent(this.flattenData)
    console.time('setLevel')
    this.setLevel(this.flattenData)
    console.timeEnd('setLevel')
  }

  setNodesMap() {
    const { idKey } = this.setting
    this.flattenData.forEach((node) => {
      this.nodesMap.set(node[idKey], node)
    })
  }
  // updateLeafState
  // 设置响应式属性，避免vue 数据更新了但是视图没有更新
  updateState(nodes = []) {
    nodes.forEach((node) => {
      node.isLeaf = !hasChildren(node, this.setting)
      node.level = 0
      node.rootId = null
      node.pIds = new Set()
      node.childNodes = new Set()
      node.checked = false
      node.indeterminate = false
      node.visible = true
    })
  }
  setParent(nodes = []) {
    const { pIdKey } = this.setting
    for (let i = 0, l = nodes.length; i < l; i++) {
      const node = nodes[i]
      if (node[pIdKey]) {
        node.parent = this.nodesMap.get(node[pIdKey])
      }
    }
  }
  setLevel(nodes) {
    const { idKey } = this.setting
    for (let i = 0, l = nodes.length; i < l; i++) {
      const node = nodes[i]
      node.level = 1
      if (node.parent) {
        // let p = this.nodesMap.get(node[pIdKey])
        // while (p) {
        //   p = this.nodesMap.get(p[pIdKey])
        //   node.level += 1
        // }
        let p = node.parent
        while (p) {
          p.childNodes.add(node[idKey])
          node.rootId = p[idKey]
          node.level += 1
          node.pIds.add(p[idKey])
          p = p.parent
        }
      }
    }
  }

  _getFullPath(keys) {
    const result = []
    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i]
      const node = this.nodesMap.get(key)
      if (node) {
        result.push(...Array.from(node.childNodes))
        result.push(...Array.from(node.pIds))
      }
    }
    console.log(result)
    return [...new Set(result.concat(keys))]
  }

  // TODO 1. 只输入父级节点，勾选失败
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

  _setCheckedKeys(keys = []) {
    this.flattenData.forEach((node) => {
      node.checked = false
      node.indeterminate = false
    })
    const { childrenKey } = this.setting
    // TODO 设置勾选节点的 key数组必须包含父子节点
    const _checkedNodes = [] // 根据勾选节点的 key数组，获取对应的nodes节点
    const fullPathKeys = this._getFullPath(keys)
    fullPathKeys.forEach((key) => {
      const node = this.nodesMap.get(key)
      node && _checkedNodes.push(node)
    })

    console.log(_checkedNodes, fullPathKeys)

    const checkedNodes = _checkedNodes.sort((a, b) => b.level - a.level) // 节点排序：level值由大到小 节点最深的排在最前面
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

  _setChildrenCheck(nodes, checked) {
    const { childrenKey } = this.setting
    for (let i = 0, l = nodes.length; i < l; i++) {
      const node = nodes[i]
      node.checked = checked
      checked ? (node.indeterminate = false) : ''
      if (hasChildren(node, this.setting)) {
        this._setChildrenCheck(node[childrenKey], checked)
      }
    }
  }
  _setHalfCheck(nodes, checked) {
    const { childrenKey } = this.setting
    console.log(nodes, checked)
    const sortNodes = nodes.sort((a, b) => b.level - a.level) // 子节点在前
    for (let i = 0, l = sortNodes.length; i < l; i++) {
      const node = sortNodes[i]
      node.checked = false
      node.indeterminate = false
    }
    console.log('sortNodes', sortNodes)
    for (let i = 0, l = sortNodes.length; i < l; i++) {
      const node = sortNodes[i]
      const { half, all, none } = getChildState(node[childrenKey])
      console.log({ half, all, none, name: node.name, id: node.id })
      node.checked = all
      node.indeterminate = half
    }
  }

  _handleCheck(node, checked) {
    console.log(node, checked)
  }

  _getParentNodes(node, setting = {}) {
    const { pIdKey } = setting
    let parent = this.nodesMap.get(node[pIdKey]) || node.parent
    const result = []
    while (parent) {
      result.push(parent)
      parent = this.nodesMap.get(parent[pIdKey]) || parent.parent
    }
    return result
  }
  _getCheckedNodes() {
    return this.flattenData.filter((node) => node.checked)
  }
  _getCheckedKeys() {
    const { idKey } = this.setting
    return this._getCheckedNodes().map((node) => (node || {})[idKey])
  }
  _getHalfCheckedKeys() {
    const { idKey } = this.setting
    return this._getHalfCheckedNodes().map((node) => (node || {})[idKey])
  }
  _getHalfCheckedNodes() {
    return this.flattenData.filter((node) => node.indeterminate)
  }
  // 获取节点全路径集合
  _getNodePath(id) {
    if (typeof id !== 'string') return []
    const node = this.nodesMap.get(id)
    if (!node) return []
    const path = []
    // node.pIds.forEach((pId) => path.push(this.nodesMap.get(pId)))
    // return path.concat(node).sort((a, b) => a.level - b.level)
    let parent = node.parent
    while (parent) {
      path.unshift(parent)
      parent = parent.parent
    }
    return path.concat(node)
  }
  // 通过关键字过滤树节点
  _filter(value) {
    if (!value) {
      this._resetFilter()
      return
    }
    const { label, childrenKey } = this.setting
    const traverse = (nodes) => {
      for (let i = 0, l = nodes.length; i < l; i++) {
        const node = nodes[i]
        node.visible = false
        if (node[label].includes(value)) {
          node.visible = true
          let p = node.parent
          while (p) {
            p.visible = true
            p = p.parent
          }
          continue
        }
        if (hasChildren(node, this.setting)) {
          traverse(node[childrenKey])
        }
      }
    }

    traverse(this.cloneData)
  }
  _resetFilter() {
    for (let i = 0, l = this.flattenData.length; i < l; i++) {
      const node = this.flattenData[i]
      node.visible = true
    }
  }
}
