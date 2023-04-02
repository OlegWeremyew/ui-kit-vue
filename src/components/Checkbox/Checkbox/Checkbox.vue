<script setup lang="ts">
import {computed} from "vue";

const emits = defineEmits(['update:checked', 'updateCheckboxGroup'])
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
  type: {
    type: String,
    default: 'checkbox',
  },
})

const handleClick = ({target}: any) => {
  const {group, id} = props

  if (group) {
    emits('updateCheckboxGroup', {optionId: id, checked: target.checked})
  } else {
    emits('update:checked', target.checked)
  }
}

const isSwitchType = computed(():boolean=>{
  return props.type === 'switch'
})
</script>

<template>
  <div :class="[{'switch-container': isSwitchType}]">
    <input
        :class="[{'checkbox': type === 'checkbox'}, {'switch': isSwitchType}]"
        type="checkbox"
        :name="name"
        :id="id"
        :value="value"
        :checked="checked"
        :disabled="disabled"
        @input="handleClick($event)">
    <label :for="id" style="cursor: pointer">{{ label }}</label>
    <label
        :for="id"
        class="switch__label"
        v-if="type === 'switch'"
    >{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
@import "Checkbox.scss";
</style>
