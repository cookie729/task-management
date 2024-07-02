<template>
  <div>
    <div class="flex">
      <h1 class="content-title">職員追加</h1>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Staff {
  id: number
  name: string
  code: string
  department: string
}

const tableHeader = {
  id: '#',
  code: '職員番号',
  name: '名前',
  department: '部署'
}

const staffData: Staff[] = [
  {
    id: 1,
    code: '001',
    name: 'test-name1',
    department: '経理'
  },
  {
    id: 2,
    code: '002',
    name: 'test-name2',
    department: '総務'
  },
  {
    id: 3,
    code: '003',
    name: 'test-name3',
    department: '設計'
  },
  {
    id: 4,
    code: '004',
    name: 'test-name4',
    department: '配送センター'
  }
]

const staffList = ref(staffData)
</script>

<style lang="scss">
.flex {
  display: flex;
  justify-content: space-between;
  margin: {
    top: 10px;
    bottom: 10px;
  }
}
.add {
  font-size: 1.2rem;
  background: rgb(175, 232, 255);
  padding: 10px;
  color: rgb(47, 47, 220);
  border-radius: 10px;
}
.content-title {
  font-size: 2rem;
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
