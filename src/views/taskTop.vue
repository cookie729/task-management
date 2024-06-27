<template>
  <div>
    <p>
      <a :href="url" target="_blank">ポートフォリオ</a>
    </p>
    <button type="button" class="primary-button" :disabled="isSendButtonDisabled">送信</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isSendButtonDisabled = ref(true)
const url = ref('https://kouki-l-m-o.com')
</script>

<style scoped>
.primary-button {
  background: #7247d6;
}
</style>
