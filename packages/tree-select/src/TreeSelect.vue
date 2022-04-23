<template>
  <div class="tree-select">
    <div class="breadcrumb">
      <div
        v-for="(tab, index) in tabs"
        :class="[
          'breadcrumb__item',
          {
            'is-active': tab[computeProps.idKey] === active,
          },
        ]"
        :key="tab[computeProps.idKey]"
        @click="handleToggleTab(tab, index)"
      >
        <span>{{ tab[computeProps.label] }}</span>
        <i class="van-icon van-icon-arrow van-cell__right-icon separator"></i>
      </div>
    </div>
    <template>
      <TreeNode
        v-for="item in cloneData"
        :key="`${item[computeProps.idKey]}_${item.code}`"
        v-show="item.visible"
        :node="item"
        :computeProps="computeProps"
        @handleCheck="handleCheck"
        @expandNode="expandNode"
      />
    </template>
  </div>
</template>
<script>
import TreeNode from './TreeNode.vue'
import Node from './model/node'
import { hasChildren, defaultProps } from './model/node'
import { getChildState } from '@/utils/flattenTree'

export default {
  name: 'TreeSelect',
  components: {
    TreeNode,
  },
  props: {
    remoteSearch: Function,
    props: {
      type: Object,
      default() {
        return {}
      },
    },
    name: String,
  },
  computed: {
    computeProps() {
      return Object.assign({}, defaultProps, this.props)
    },
  },
  data() {
    return {
      store: {},
      sourceData: [],
      cloneData: [],
      flattenData: [],
      nodesMap: {},
      tabs: [],
      active: 'root',
    }
  },
  mounted() {},
  methods: {
    async init() {
      const { childrenKey, label } = this.computeProps
      const data = await this.remoteSearch()
      console.time('init')
      this.store = new Node({
        props: this.computeProps,
        data,
      })
      const { sourceData, cloneData, flattenData, nodesMap } = this.store
      this.sourceData = sourceData
      this.cloneData = cloneData
      this.flattenData = flattenData
      this.nodesMap = nodesMap
      console.timeEnd('init')
      this.tabs = [
        {
          id: 'root',
          [label]: this.name || '首页',
          [childrenKey]: this.cloneData,
        },
      ]
    },
    expandNode(node) {
      if (!hasChildren(node, this.computeProps)) return
      const { childrenKey, label, idKey } = this.computeProps
      this.cloneData = node[childrenKey]
      this.tabs.push({ ...node, label: node[label] })
      this.active = node[idKey]
    },
    handleToggleTab(tab, index) {
      const { childrenKey, idKey } = this.computeProps
      if (this.active === tab[idKey]) return
      this.active = tab[idKey]
      this.cloneData = tab[childrenKey]
      this.tabs.splice(index + 1) // 移除点击tab 后面的所有tab
    },
    handleCheck(node, checked) {
      console.log(arguments, checked)
      const { childrenKey } = this.computeProps
      node.checked = checked
      if (checked) {
        node.indeterminate = false
      }
      if (hasChildren(node, this.computeProps)) {
        this.store._setChildrenCheck(node[childrenKey], checked)
      }
      // 方法1
      // const nodes = this.getParentNodes(node, this.computeProps)
      // this.store._setHalfCheck(nodes, checked)

      // 方法2
      let p = node.parent
      while (p) {
        const { half, all } = getChildState(p[childrenKey])
        console.log({ half, all, name: p.name, id: p.id })
        p.checked = all
        p.indeterminate = half
        p = p.parent
      }
    },
    getParentNodes(node, setting = {}) {
      return this.store._getParentNodes(node, setting)
    },
    // API
    getCheckedNodes() {
      return this.store._getCheckedNodes()
    },
    getHalfCheckedNodes() {
      return this.store._getHalfCheckedNodes()
    },
    setCheckedKeys(keys = []) {
      this.store._setCheckedKeys(keys)
    },
  },
}
</script>
<style lang="less">
.tree-select {
  padding: 0 16px;
  text-align: left;
  .breadcrumb {
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-size: 16px;
    font-weight: 700;
    .breadcrumb__item {
      display: flex;
      align-items: center;
      cursor: pointer;
      &.is-active {
        color: #1989fa;
      }
      &:last-child .separator {
        display: none;
      }
    }
  }
  .node {
    display: flex;
    flex: 1;
  }
  .el-checkbox {
    margin-right: 8px;
  }
}
</style>
