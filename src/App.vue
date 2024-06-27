<template>
  <div>
    <Header />
    <RouterView />
  </div>
</template>


<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './layout/Header/index.vue';
</script>
 

<style scoped>
Header {
  width: 100%;
}
</style>
