<template>
  <div>
    <h1>職員一覧</h1>

    <ul class="border">
      <template v-for="(staff, key) in staffList" v-bind:key="key">
        <li class="flex w100">

          <p class="b-right w100">
            {{ staff.id }}
          </p>
          <p class="b-right w100">
            {{ staff.code }}
          </p>
          <p class="w100">
            {{ staff.name }}
          </p>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Staff {
  id: number
  name: string
  code: string
}

const staffData: Staff[] = [
  {
    id: 1,
    code: '001',
    name: 'test-name1'
  },
  {
    id: 2,
    code: '002',
    name: 'test-name2'
  },
  {
    id: 3,
    code: '003',
    name: 'test-name3'
  },
  {
    id: 4,
    code: '004',
    name: 'test-name4'
  }
]

const staffList = ref(staffData)
</script>

<style lang="scss">
.flex {
  display: flex;
  justify-content: space-between;
}
.w80 {
  width: 80%;
}
.w100 {
  width: 100%;
}

.border {
  border: solid 1px #c3c3c3;
}
.b-right {
  border-right: solid 1px #c3c3c3;
}
.b-left {
  border-left: solid 1px #c3c3c3;
}
</style>