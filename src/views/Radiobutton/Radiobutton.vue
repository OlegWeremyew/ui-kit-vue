<script setup lang="ts">
import {ref} from 'vue'
import Radiobutton from '@/components/Radiobutton/Radiobutton.vue'
import {FootballClubsType} from "@/views/Radiobutton/types";
import {clubsList, selectedClubName} from "@/views/Radiobutton/Radiobutton.data";

const footballClubs = ref<FootballClubsType>(clubsList)
const selectedClub = ref<selectedClubName>('')

const disabledRadio = ref<boolean>(true)
const disabledRadioChecked = ref<boolean>(true)
</script>

<template>
  <h1 class="heading-1">Radiobutton</h1>
  <h2 class="heading-2">Basic</h2>
  <div class="line line_block">
    <p>Selected Club: {{ selectedClub }}</p>
    <div
        v-for="{id, name} in footballClubs"
        :key="id"
    >
      <radiobutton
          :value="name"
          :label="name"
          :id="id"
          name="club"
          v-model:checkedValue="selectedClub"
      />
    </div>
  </div>

  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <radiobutton
        value="Radiobutton Disabled"
        label="Radiobutton Disabled"
        id="RadiobuttonDisabled"
        name="RadiobuttonDisabled"
        :disabled="disabledRadio"
        v-model:checkedValue="disabledRadioChecked"
    />
  </div>
</template>