<template>
  <div class="table-wrapper">
    <div class="table">
      <div
          class="table-head"
          :style="{'grid-template-columns': columnTemplates}">
        <div
            class="table-head__name"
            v-for="(element, i) of head"
            :key="i"
            @click="clickOnHead(element)">
          {{ element }}
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import {SortType} from "@/types/index.js";

const props = defineProps({
  head: {
    type: Array,
    required: false,
  },
  columnTemplates: {
    type: String,
    required: false,
  },
})

const emit = defineEmits(['sorting'])

const clickOnHead = (name: SortType): void => {
  emit('sorting', name.toLowerCase())
}
</script>

<style lang="scss" scoped>
@import "BaseTable.scss";
</style>