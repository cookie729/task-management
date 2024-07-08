<template>
  <div>
    <div class="flex">
      <h1 class="content-title">職員追加</h1>
    </div>
    <div class="form-wrap">
      <form class="form-content" action="#">
        <div class="category-item">
          <label class="label-text">職員名</label>
          <input class="staff-form" type="text" required v-model="formData.employeeName" />
          <div class="border"></div>
        </div>
        <div class="category-item">
          <label class="label-text">部署名</label>
          <input class="staff-form" type="text" required v-model="formData.departmentName" />
          <div class="border"></div>
        </div>
        <div class="category-item">
          <label class="label-text">役職名</label>
          <input class="staff-form" type="text" required v-model="formData.position" />
          <div class="border"></div>
        </div>
        <div class="category-item">
          <label class="label-text">入社日</label>
          <input class="staff-form" type="text" required v-model="formData.joinDate" />
          <div class="border"></div>
        </div>
        <PrimaryButton type="submit" @click="addStaff">職員追加</PrimaryButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PrimaryButton from '../components/atoms/PrimaryButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const formData = ref({
  employeeName: null,
  departmentName: null,
  position: null,
  joinDate: null
})

const addStaff = () => {
  // axios
  router.push({ name: 'staffTop' })
}
</script>

<style lang="scss">
.form-wrap {
  background: rgb(255, 249, 237);
  border-radius: 20px;
  text-align: center;
  padding: 50px;
}

.form-content {
  margin: 0 auto;
}

.category-item {
  margin-bottom: 14px;
  margin: 0 auto;
}

.label-text {
  display: inline-block;
  width: 100px;
  font-size: 1.2rem;
  text-align: left;
}

.staff-form {
  background: rgb(255, 183, 39);
  color: white;
  font-weight: bold;
  width: 300px;
  height: 30px;
  outline: none;
  border-radius: 10px;
  padding-left: 10px;
  text-align: left;
}

.border {
  margin-top: 20px;
  border-bottom: solid 1px rgb(232, 232, 232);
  width: 35%;
  margin: 10px auto 20px;
}
</style>
