<template>
  <div class="card">
    <TreeSelect
      ref="treeSelectRef"
      :remoteSearch="getTreeData"
      :props="props"
    />
  </div>
</template>
<script>
import axios from 'axios'
import TreeSelect from '../../packages/tree-select'

export default {
  name: 'Card',
  components: {
    TreeSelect,
  },
  data() {
    return {
      treeData: [],
      props: {
        label: 'name',
      },
    }
  },
  mounted() {
    this.$refs.treeSelectRef.init()
  },
  methods: {
    getTreeData() {
      return axios.get('http://localhost:3005/avmoo/area').then((result) => {
        return result.data
      })
    },
  },
}
</script>
