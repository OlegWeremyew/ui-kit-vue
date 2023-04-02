<script setup lang="ts">
const props = defineProps({
  columnTemplates: {
    type: String,
    required: false,
  },
  bgRow: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div
      class="table-row"
      :style="{
      'grid-template-columns': columnTemplates,
      'background-color': bgRow}"
  >
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
@import "TableRow.scss";
</style>
