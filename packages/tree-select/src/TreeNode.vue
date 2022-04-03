<template>
  <div
    role="node"
    tabindex="0"
    class="van-cell van-cell--clickable"
    :key="node[computeProps.idKey]"
  >
    <Checkbox
      :value="node.checked"
      :indeterminate="node.indeterminate"
      :key="`${node[computeProps.idKey]}_${node.checked}`"
      @change="(...args) => handleCheck(node, ...args)"
    />
    <div class="node" @click="expandNode(node)">
      <div class="van-cell__title">
        <span>{{ node[computeProps.label] }}</span>
      </div>
      <i
        class="van-icon van-icon-arrow van-cell__right-icon"
        v-if="hasChildren(node, computeProps)"
      ></i>
    </div>
  </div>
</template>
<script>
import Checkbox from '@/components/checkbox.vue'
import { hasChildren } from './model/node'

export default {
  name: 'TreeNode',
  components: {
    Checkbox,
  },
  props: {
    node: {
      default() {
        return {}
      },
    },
    computeProps: {
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      value: true,
    }
  },
  methods: {
    handleCheck(node, checked, event) {
      this.$emit('handleCheck', node, checked, event)
    },
    expandNode(node) {
      this.$emit('expandNode', node)
    },
    hasChildren(...args) {
      return hasChildren(...args)
    },
  },
}
</script>
