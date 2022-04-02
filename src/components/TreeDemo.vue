<template>
  <div>
    <Checkbox v-model="value" />
  </div>
</template>
<script>
import Checkbox from './checkbox.vue'
export default {
  name: 'TreeDemo',
  components: {
    Checkbox,
  },
  data() {
    return {
      value: true,
    }
  },
}
</script>
