<template>
  <div>
    <button class="add">
      <slot> </slot>
    </button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
button {
  font-size: 1.2rem;
  background: rgb(249, 78, 78);
  padding: 10px;
  color: rgb(255, 252, 235);
  border-radius: 10px;
}
</style>
