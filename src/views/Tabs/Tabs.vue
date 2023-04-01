<script setup lang="ts">
  import {ref} from 'vue'
  import Tabs from '@/components/Tabs/Tabs.vue'
  import {SelectedType, TabType} from "@/types";
  import {tabsList} from "@/views/Tabs/Tabs.data";

  const tabs: Array<TabType> = tabsList
  const selectedTab = ref<SelectedType>('Vue')

  const changeTab = (tabName: SelectedType): void => {
    selectedTab.value = tabName
  }
</script>

<template>
  <h1 class="heading-1">Tabs</h1>
  <Tabs
    :names="tabs"
    :selectedTab="selectedTab"
    @changeTab="changeTab">
    <div v-if="selectedTab === 'About'">
      Lorem ipsum dolor sit amet.
    </div>
    <div v-if="selectedTab === 'Vue'">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, id.
    </div>
    <div v-if="selectedTab === 'React'">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, atque. Laborum iusto odit minus incidunt.
    </div>
  </Tabs>
</template>