<script setup lang="ts">
const emit = defineEmits(['update:value'])
const props = defineProps({
  error: {
    type: Array,
    required: false,
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: '300px',
  },
})

const updateValue = ({target}: any): void => {
  emit('update:value', target.value)
}
</script>

<template>
  <div class="form-input" :style="{width}">
    <input
        class="input-text"
        :type="type"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        :value="value"
        @input="updateValue"
    >

    <label :for="name" class="input-label">{{ label }}</label>

    <TransitionGroup>
      <div
          class="form-error"
          v-for="element of error"
          :key="element.$uid">
        <div class="form-error__message">{{ element.$message }}</div>
      </div>
    </TransitionGroup>

  </div>
</template>

<style lang="scss" scoped>
@import "Input.scss";
</style>
