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

<script setup>
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

<style lang="scss" scoped>
@import "TableRow.scss";
</style>