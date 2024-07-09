<template>
  <div>
    <button class="add" :style="{ backgroundColor: props.backgroundColor, color: props.color }">
      <slot> </slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  backgroundColor: {
    type: String,
    default: 'rgb(175, 232, 255)'
  },
  color: {
    type: String,
    default: 'rgb(47, 47, 220)'
  }
})
</script>

<style scoped>
button {
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 10px;
}
</style>
