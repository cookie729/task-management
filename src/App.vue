<template>
  <div class="default-view">
    <Header />
    <div class="default-component">
      <RouterView />
    </div>
  </div>
</template>


<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './layout/Header/index.vue';
</script>
 

<style scoped>
.default-view {
  width: 100%;
}
.default-component {
  width: 95%;
  margin: 0 auto;
}
Header {
  width: 100%;
}
</style>
