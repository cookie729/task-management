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
        <td>{{ staff.job }}</td>
        <td>{{ staff.join_date }}</td>
        <td class="d-flex">
          <primary-button
            backgroundColor="#009766"
            color="rgb(255, 255, 255)"
            @click="() => openStaffEdit(staff)"
          >
            編集
          </primary-button>
          <danger-button @click="openStaffDelete">削除</danger-button>
        </td>
      </tr>
    </table>
    <edit-modal :staffEdit="staffEdit" @close-edit="closeStaffEdit" :staff="selectedStaff" />
    <delete-modal :staffDelete="staffDelete" @close-delete="closeStaffDelete" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PrimaryButton from '../components/atoms/PrimaryButton.vue'
import DangerButton from '../components/atoms/DangerButton.vue'
import EditModal from '../components/molecules/EditModal.vue'
import DeleteModal from '../components/molecules/DeleteModal.vue'

const staffEdit = ref(false)
const staffDelete = ref(false)
const selectedStaff = ref<Staff | null>(null)

const openStaffEdit = (staff) => {
  selectedStaff.value = staff
  staffEdit.value = true
}

const closeStaffEdit = () => {
  staffEdit.value = false
}

const openStaffDelete = () => {
  staffDelete.value = true
}

const closeStaffDelete = () => {
  staffDelete.value = false
}

interface Staff {
  id: number
  name: string
  code: string
  department: string
  job: string
  join_date: string
  control: string
}

const tableHeader = {
  id: '#',
  code: '職員番号',
  name: '名前',
  department: '部署',
  job: '役職',
  join_date: '入社日',
  control: ''
}

const staffData: Staff[] = [
  {
    id: 1,
    code: '001',
    name: 'test-name1',
    department: '経理',
    job: '課長',
    join_date: '2013-04-01',
    control: ''
  },
  {
    id: 2,
    code: '002',
    name: 'test-name2',
    department: '総務',
    job: '係長',
    join_date: '2015-04-01',
    control: ''
  },
  {
    id: 3,
    code: '003',
    name: 'test-name3',
    department: '設計',
    job: '部長',
    join_date: '2018-04-01',
    control: ''
  },
  {
    id: 4,
    code: '004',
    name: 'test-name4',
    department: '配送センター',
    job: '社員',
    join_date: '2020-04-01',
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
