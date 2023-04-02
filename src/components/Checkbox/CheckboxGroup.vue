<script setup lang="ts">
import Checkbox from '@/components/Checkbox/Checkbox/Checkbox.vue'
import {ParamsType} from "@/views/Checkbox/types";

const emit = defineEmits(['update:value'])
const props = defineProps({
  value: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
    validator: (value: any[]): boolean => {
      const hasNameKey = value.every((option: string) => Object.keys(option).includes('name'))
      const hasIdKey = value.every((option: string) => Object.keys(option).includes('id'))
      return hasNameKey && hasIdKey
    },
  },
})

const check = ({optionId, checked}: ParamsType): void => {
  let updateValue = [...props.value]
  if (checked) {
    updateValue.push(optionId)
  } else {
    updateValue.splice(updateValue.indexOf(optionId), 1)
  }

  emit('update:value', updateValue)
}
</script>

<template>
  <div v-for="{name, id} in options" :key="id">
    <checkbox
        :label="name"
        :id="id"
        :name="name"
        :value="name"
        :checked="value.includes(id)"
        group
        @updateCheckboxGroup="check"
    />
  </div>
</template>