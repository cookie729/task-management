<template>
  <div>
    <div class="flex">
      <h1 class="content-title">職員追加</h1>
    </div>
    <form action="#" v-on:submit.prevent="onFormSubmit">
      <div>
        <label for="name">職員名</label>：
        <input class="staff-form" type="text" required v-model="inputNameModel" />
      </div>
      <div>
        <label for="name">部署</label>：
        <input class="staff-form" type="text" required v-model="inputNameModel" />
      </div>
      <div>
        <label for="name">役職</label>：
        <input class="staff-form" type="text" required v-model="inputNameModel" />
      </div>
      <div>
        <label for="name">入社日</label>：
        <input class="staff-form" type="text" required v-model="inputNameModel" />
      </div>

      <button type="submit">追加</button>
      <p>{{ inputNameModel }}</p>
    </form>
    <p>{{ msg }}</p>

    <button @click="test">テスト</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('未送信')
const onFormSubmit = (): void => {
  msg.value = '送信されました'
}

const inputNameModel = ref(null)

const test = () => {
  console.log('確認', inputNameModel.value)
}
</script>

<style lang="scss">
.staff-form {
  background: rgb(238, 247, 255);
}

.label-width {
  width: 500px;
}
</style>
