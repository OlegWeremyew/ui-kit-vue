<template>
  <div class="table-column">
    <span class="table-column__title" v-if="columnTitle">{{ columnTitle }}: </span>
    <slot v-if="visibility"></slot>
    <img v-else class="table-column-image" :src="srcImage" alt="alt">
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  image: {
    type: Boolean,
    required: false,
  },
  srcImage: {
    type: String,
    required: false,
  },
  columnTitle: {
    type: String,
    required: false,
  },
})

const visibility = computed((): boolean => {
  return !props.image
})

</script>

<style lang="scss" scoped>
@import "TableColumn.scss";
</style>