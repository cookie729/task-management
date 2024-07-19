<template>
  <div>
    <button class="cancel">
      <slot> </slot>
    </button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
button {
  font-size: 1.2rem;
  border: solid 1px rgb(66, 100, 255);
  background: rgb(247, 253, 255);
  padding: 10px;
  color: rgb(66, 100, 255);
  border-radius: 10px;
}
</style>
