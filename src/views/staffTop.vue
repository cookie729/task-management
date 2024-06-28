<template>
  <div>
    <h1>職員一覧</h1>

    <ul>
      <template 
        v-for="(staff, key) in staffList"
        v-bind:key="key"
      >
        <li>
          <p>
            {{ staff }}
          </p>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const staffData: {
  id: number;
  code: string;
  name: string;
} =  {
    id: 1,
    code: '001',
    name: 'test-name1'
}
  // {
  //   id: 2,
  //   code: '002',
  //   name: 'test-name2'
  // },
  // {
  //   id: 3,
  //   code: '003',
  //   name: 'test-name3'
  // },
  // {
  //   id: 4,
  //   code: '004',
  //   name: 'test-name4'
  // }


const staffList = ref(staffData)
</script>
