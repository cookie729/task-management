<template>
  <div>
    <div class="flex">
      <h1 class="content-title">職員一覧</h1>
      <RouterLink to="/add-staff">
        <PrimaryButton>＋ 職員追加</PrimaryButton>
      </RouterLink>
    </div>

    <table class="styled-table">
      <tr>
        <th v-for="(label, key) in tableHeader" :key="key">{{ label }}</th>
      </tr>
      <tr v-for="(staff, key) in staffList" :key="key">
        <td>{{ staff.id }}</td>
        <td>{{ staff.code }}</td>
        <td>{{ staff.name }}</td>
        <td>{{ staff.department }}</td>
        <td class="d-flex">
          <primary-button
            backgroundColor="#009766"
            color="rgb(255, 255, 255)"
            @click="openStaffEdit"
          >
            編集
          </primary-button>
          <danger-button>削除</danger-button>
        </td>
      </tr>
    </table>
    <EditModal :staffEditModal="staffEditModal" @close-modal="closeStaffEdit" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PrimaryButton from '../components/atoms/PrimaryButton.vue'
import DangerButton from '../components/atoms/DangerButton.vue'
import EditModal from '../components/molecules/EditModal.vue'

const staffEditModal = ref(false)
const openStaffEdit = () => {
  staffEditModal.value = true
}

const closeStaffEdit = () => {
  staffEditModal.value = false
}

interface Staff {
  id: number
  name: string
  code: string
  department: string
  control: string
}

const tableHeader = {
  id: '#',
  code: '職員番号',
  name: '名前',
  department: '部署',
  control: ''
}

const staffData: Staff[] = [
  {
    id: 1,
    code: '001',
    name: 'test-name1',
    department: '経理',
    control: ''
  },
  {
    id: 2,
    code: '002',
    name: 'test-name2',
    department: '総務',
    control: ''
  },
  {
    id: 3,
    code: '003',
    name: 'test-name3',
    department: '設計',
    control: ''
  },
  {
    id: 4,
    code: '004',
    name: 'test-name4',
    department: '配送センター',
    control: ''
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
.d-flex {
  display: flex;
  justify-content: space-around;
}

.styled-table {
  width: 100%;
  margin: 25px 0;
  font-size: 1rem;
  min-width: 400px;
}

th,
td {
  border: solid 1px #dddddd;
  text-align: center;
  padding: 12px 15px;
}

th {
  background-color: #f3f3f3;
}
</style>
