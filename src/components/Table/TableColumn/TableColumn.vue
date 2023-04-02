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

<template>
  <div class="table-column">
    <span
        v-if="columnTitle"
        class="table-column__title"
    >{{ columnTitle }}: </span>

    <slot v-if="visibility"/>

    <img
        v-else
        class="table-column-image"
        :src="srcImage"
        alt="srcImage"
        title="srcImage"
    >
  </div>
</template>

<style lang="scss" scoped>
@import "TableColumn.scss";
</style>
