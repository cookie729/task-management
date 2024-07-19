<template>
  <div class="modal-wrap" v-if="staffEdit">
    <div class="modal-content">
      <button class="close-icon" @click="closeStaffEdit">✖️</button>
      <form class="form-content" action="#">
        <div class="category-item">
          <label class="label-text">職員名</label>
          <input class="staff-form" type="text" required />
          <div class="border"></div>
        </div>
        <div class="category-item">
          <label class="label-text">部署名</label>
          <input class="staff-form" type="text" required />
          <div class="border"></div>
        </div>
        <div class="category-item">
          <label class="label-text">役職名</label>
          <input class="staff-form" type="text" required />
          <div class="border"></div>
        </div>
        <div class="category-item">
          <label class="label-text">入社日</label>
          <input class="staff-form" type="text" required />
          <div class="border"></div>
        </div>
        <PrimaryButton type="submit">職員追加</PrimaryButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import PrimaryButton from '../atoms/PrimaryButton.vue'

interface Props {
  staffEdit: Boolean
}
defineProps<Props>()

interface Emits {
  (event: 'close-edit'): void
}
const emit = defineEmits<Emits>()
// const emit = defineEmits(['close-modal'])

const closeStaffEdit = (): void => {
  emit('close-edit')
}
</script>

<style lang="scss">
.modal-wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-content {
    position: relative;
    background: #fffcdc;
    width: 70%;
    min-width: 500px;
    max-width: 700px;
    height: 70%;
    padding: 20px;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
  }
  .close-icon {
    position: absolute;
    top: 30px;
    right: 30px;
  }
}
</style>
