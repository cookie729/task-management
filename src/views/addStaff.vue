<template>
  <div>
    <div class="flex">
      <h1 class="content-title">職員追加</h1>
    </div>
    <form action="#" v-on:submit.prevent="onFormSubmit">
      <input class="staff-form" type="text" required />
      <button type="submit">追加</button>
    </form>
    <p>{{ msg }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('未送信')
const onFormSubmit = (): void => {
  msg.value = '送信されました'
}
</script>

<style lang="scss">
.staff-form {
  background: rgb(238, 247, 255);
}
</style>
