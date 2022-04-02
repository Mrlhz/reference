<template>
  <label
    class="el-checkbox"
    :class="[
      border && checkboxSize ? 'el-checkbox--' + checkboxSize : '',
      { 'is-disabled': isDisabled },
      { 'is-bordered': border },
      { 'is-checked': isChecked },
    ]"
    :id="id"
  >
    <span
      class="el-checkbox__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': isChecked,
        'is-indeterminate': indeterminate,
        'is-focus': focus,
      }"
      :tabindex="indeterminate ? 0 : false"
      :role="indeterminate ? 'checkbox' : false"
      :aria-checked="indeterminate ? 'mixed' : false"
    >
      <span class="el-checkbox__inner"></span>
      <input
        v-if="trueLabel || falseLabel"
        class="el-checkbox__original"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true' : 'false'"
        :name="name"
        :disabled="isDisabled"
        :true-value="trueLabel"
        :false-value="falseLabel"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false"
      />
      <input
        v-else
        class="el-checkbox__original"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true' : 'false'"
        :disabled="isDisabled"
        :value="label"
        :name="name"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false"
      />
    </span>
    <span class="el-checkbox__label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: 'ElCheckbox',
  inject: {
    elForm: {
      default: '',
    },
  },
  componentName: 'ElCheckbox',
  data() {
    return {
      selfModel: false,
      focus: false,
    }
  },
  computed: {
    model: {
      get() {
        return this.value || this.selfModel
      },
      set(val) {
        this.$emit('input', val)
        this.selfModel = val
      },
    },
    isChecked() {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model
      }
      return this.model === this.trueLabel
    },
    isDisabled() {
      return false
    },
  },
  watch: {},
  props: {
    value: {},
    label: {},
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    id: String, // 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系
    controls: String, // 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系
    border: Boolean,
    size: String,
  },
  methods: {
    handleChange(ev) {
      let value
      if (ev.target.checked) {
        value = this.trueLabel === undefined ? true : this.trueLabel
      } else {
        value = this.falseLabel === undefined ? false : this.falseLabel
      }
      this.$emit('change', value, ev)
    },
  },

  created() {},
  mounted() {
    // 为indeterminate元素 添加aria-controls 属性
    if (this.indeterminate) {
      this.$el.setAttribute('aria-controls', this.controls)
    }
  },
}
</script>
<style lang="less">
@import '../assets/stylesheets/checkbox.less';
</style>
