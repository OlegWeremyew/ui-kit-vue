<script setup lang="ts">
const props = defineProps({
  maxWidth: {
    type: String,
    default: '300px',
  },
  percent: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    default: 'primary',
  },
})
</script>

<template>
  <div class="progress-container" :style="[{'max-width': maxWidth},]">
    <span
        class="progress-percent"
        :style="[{'color': `var(--${color})`},]"
    >
      {{ percent }}%
    </span>

    <div class="progress" :style="[{'background': `var(--${color}-hover)`},]">
      <div
          class="progress-bar"
          :style="[{'width': `${percent}%`}, {'background': `var(--${color})`},]"
      ></div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@import "ProgressBar.scss";
</style>
