<template>
  <div>
    <header>
      <h1 class="header-title">タスク管理</h1>

      <ul class="h-list">
        <RouterLink to="/staff-top">
          <li>職員追加</li>
        </RouterLink>
      </ul>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'task-header'
})
</script>

<style scoped lang="scss">
header {
  width: 100%;
  background: rgb(255, 180, 82);
  display:flex;
  justify-content: space-between;
  align-items: center;
  .header-title {
    color: white;
    font-size: 3rem;
    padding: 10px
  }
}
.h-list {
  margin-right: 20px;
  color: rgb(255, 249, 249);
}

</style>
