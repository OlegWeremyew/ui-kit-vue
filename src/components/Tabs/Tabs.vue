<script setup lang="ts">
import {SelectedType} from "@/types";

const props = defineProps({
  names: {
    type: Array,
    required: true,
  },
  selectedTab: {
    type: String,
    required: false,
  },
})

const emit = defineEmits(['changeTab'])

const clickOnTab = (tabName: SelectedType) => {
  emit('changeTab', tabName)
}
</script>

<template>
  <div class="tab-nav">
    <span
        v-for="{name, label} in names"
        :key="name"
        :class="['tab-nav__item', {'selected': name === selectedTab}]"
        @click="clickOnTab(name)"
    >{{ label }}</span>
  </div>
  <div class="tab-content">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
@import "Tabs.scss";
</style>
  