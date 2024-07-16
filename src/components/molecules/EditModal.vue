<template>
  <div class="modal-wrap" v-if="staffEditModal">
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
        <PrimaryButton type="submit" @click="addStaff">職員追加</PrimaryButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

// interface Props {
//   staffEditModal: {
//     type: Boolean
//     required: true
//   }
// }

// interface Emits {
//   (event: 'staffEditModal', false)
// }

// defineProps<Props>()

// const closeStaffEdit = (): void => {
//   emit('staffEditModal')
//   console.log('確認')
// }

const props = defineProps({
  staffEditModal: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['close-modal'])

const closeStaffEdit = (): void => {
  emit('close-modal')
}
// const emit = defineEmits(['update: staffEditModal'])

// const closeStaffEdit = () => {
//   emit('update: staffEditModal')
// }
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
    height: 70%;
    padding: 20px;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .close-icon {
    position: absolute;
    top: 15px;
    right: 15px;
  }
}
</style>
