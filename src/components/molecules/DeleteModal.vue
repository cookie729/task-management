<template>
  <div class="modal-wrap" v-if="staffDelete">
    <div class="modal-content">
      <button class="close-icon" @click="closeDeleteModal">✖️</button>
      <div class="vertical-row">
        <slot>
          <p class="cfm-text">
            職員を削除します。 <br />
            宜しいですか?
          </p>
        </slot>
        <div class="btn-flex">
          <cancel-button class="m-btn" type="submit" @click="delStaff">キャンセル</cancel-button>
          <danger-button class="m-btn" type="submit" @click="delStaff">職員削除</danger-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import DangerButton from '../atoms/DangerButton.vue'
import CancelButton from '../atoms/CancelButton.vue'

interface Props {
  staffDelete: Boolean
}
defineProps<Props>()

interface Emits {
  (event: 'close-delete'): void
}
const emit = defineEmits<Emits>()
// const emit = defineEmits(['close-modal'])

const closeDeleteModal = (): void => {
  emit('close-delete')
}

const delStaff = (): void => {
  emit('close-delete')
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
  .vertical-row {
    display: flex;
    flex-flow: column;
    text-align: center;
  }
  .cfm-text {
    line-height: 2rem;
    text-align: left;
    font-size: 1.2rem;
    margin-bottom: 16px;
  }
  .btn-flex {
    display: flex;
    justify-content: space-between;
  }
  .m-btn {
    margin: 16px;
  }
  .close-icon {
    position: absolute;
    top: 30px;
    right: 30px;
  }
}
</style>
