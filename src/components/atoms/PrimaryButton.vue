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
  background: rgb(175, 232, 255);
  padding: 10px;
  color: rgb(47, 47, 220);
  border-radius: 10px;
}
</style>
