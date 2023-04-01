<script setup lang="ts">
import {ref} from 'vue'
import Checkbox from '@/components/Checkbox/Checkbox/Checkbox.vue'
import CheckboxGroup from '@/components/Checkbox/CheckboxGroup.vue'
import {HeroesListType} from "@/views/Checkbox/types";
import {list} from "@/views/Checkbox/Checkbox.data";

const checkboxActive = ref<boolean>(true)
const checkboxDisabled = ref<boolean>(true)
const checkboxDisabledChecked = ref<boolean>(true)
const switchProfessional = ref<boolean>(false)

const listOfHeroes = ref<HeroesListType>(list)
const selectedHeroes = ref<string[]>(['h1', 'h3'])

</script>

<template>
  <h1 class="heading-1">Checkbox</h1>
  <h2 class="heading-2">Checkbox Active</h2>
  <div class="line">
    <checkbox
        label="Checkbox Active"
        id="checkboxActive"
        name="checkboxActive"
        value="I like it"
        v-model:checked="checkboxActive"/>
  </div>
  <h2 class="heading-2">Checkbox Disabled</h2>
  <div class="line">
    <checkbox
        label="Checkbox Disabled"
        id="checkboxDisabled"
        name="checkboxDisabled"
        value="I like it"
        :disabled="checkboxDisabled"
        v-model:checked="checkboxDisabledChecked"/>
  </div>
  <h2 class="heading-2">Checkbox Group</h2>
  <div class="line line_block">
    <p>Selected Heroes: {{ selectedHeroes }}</p>
    <checkbox-group v-model:value="selectedHeroes" name="heroes" :options="listOfHeroes"/>
  </div>
  <h2 class="heading-2">Switch</h2>
  <div class="line line_block">
    <p>Switch: {{ switchProfessional }}</p>
    <checkbox
        label="I'm a professional"
        id="switch"
        name="switch"
        value="I'm a professional"
        type="switch"
        v-model:checked="switchProfessional"/>
  </div>
</template>