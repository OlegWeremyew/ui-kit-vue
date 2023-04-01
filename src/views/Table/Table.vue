<script setup lang="ts">
import {ref, computed} from 'vue'
import BaseTable from '@/components/Table/BaseTable/BaseTable.vue'
import TableRow from '@/components/Table/TableRow/TableRow.vue'
import TableColumn from '@/components/Table/TableColumn/TableColumn.vue'
import Button from '@/components/Button/Button.vue'
import {SortType} from "@/types";
import {BooksType} from "@/views/Table/types";
import {booksList} from "@/views/Table/Table.data";

const tableHeads: string[] = ['Id', 'Author', 'Title', 'Cover', '']
const tableSizeColumns: string = '50px 1fr 2fr 150px 140px'

const sortField = ref<string>('id')
const typeSort = ref<SortType>('asc')

const books = ref<BooksType>(booksList)

const booksSorting = computed((): BooksType => {
  return books.value.sort((a: any, b: any) => {
    let modifier = 1;
    if (typeSort.value === 'desc') modifier = -1
    if (a[sortField.value] < b[sortField.value]) return -1 * modifier
    if (a[sortField.value] > b[sortField.value]) return modifier
    return 0
  })
})

const setSort = (name: SortType): void => {
  if (sortField.value === name) {
    if (typeSort.value === 'asc') {
      typeSort.value = 'desc'
    } else {
      typeSort.value = 'asc'
    }
  } else {
    sortField.value = name
  }
}
</script>

<template>
  <h1 class="heading-1">Table</h1>
  <span>Sort Field: {{ sortField }}</span><br>
  <span>Type Sort: {{ typeSort }}</span><br>
  <base-table
      :head="tableHeads"
      :columnTemplates="tableSizeColumns"
      @sorting="setSort">
    <table-row
        v-for="{id, bg, author, title, image} in booksSorting"
        :key="id"
        :columnTemplates="tableSizeColumns"
        :bgRow="bg">
      <table-column :columnTitle="tableHeads[0]">
        {{ id }}
      </table-column>
      <table-column :columnTitle="tableHeads[1]">
        {{ author }}
      </table-column>
      <table-column :columnTitle="tableHeads[2]">
        {{ title }}
      </table-column>
      <table-column :image="true" :srcImage="image"/>
      <table-column>
        <Button lavel="Read Online"></Button>
      </table-column>
    </table-row>
  </base-table>
</template>