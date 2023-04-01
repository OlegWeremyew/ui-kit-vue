<script setup lang="ts">
import {ref} from "vue";
import {LinksType} from "@/components/layout/Sidebar/types";
import {linksList} from "@/components/layout/Sidebar/Sidebar.data";

const props = defineProps({
  openSidebar: {
    type: Boolean,
    required: true,
  },
});

const links = ref<LinksType>(linksList);
</script>

<template>
  <div :class="['sidebar', { sidebar_isOpen: openSidebar }]">
    <router-link
        class="sidebar__link"
        v-for="{name, href} in links"
        :key="name"
        :to="href"
    >
      {{ name }}
    </router-link
    >
  </div>
</template>

<style lang="scss" scoped>
@import "Sidebar.scss";
</style>
