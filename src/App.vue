<script setup lang="ts">
import LayoutHeader from "@/components/layout/Header/Header.vue";
import LayoutSidebar from "@/components/layout/Sidebar/Sidebar.vue";
import {ref} from "vue";

const isOpenMenu = ref<boolean>(false);

const toggleMenu = (): void => {
  isOpenMenu.value = !isOpenMenu.value;
};

</script>

<template>
  <div
      class="sidebar-toggle"
      @click="toggleMenu"
  >&#5125;</div>

  <layout-header/>
  <layout-sidebar :openSidebar="isOpenMenu"/>
  <div :class="['content', { content__full: !isOpenMenu }]">
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/styles/global.scss';


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;

  &__full {
    margin-left: 0;
  }
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background: var(--primary);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}
</style>
