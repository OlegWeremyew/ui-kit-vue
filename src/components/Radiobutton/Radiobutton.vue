<script setup>
const emits = defineEmits(['update:checkedValue'])
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  group: {
    type: Boolean,
    default: false,
  },
})

const handleClick = (event) => {
  emits('update:checkedValue', event.target.value)
}
</script>

<template>
  <input
      class="radiobutton"
      type="radio"
      :name="name"
      :id="id"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @input="handleClick($event)">
  <label :for="id">{{ label }}</label>
</template>

<style lang="scss" scoped>
@import "Radiobutton.scss";
</style>