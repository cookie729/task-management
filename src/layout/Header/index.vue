<template>
  <div>
    <header>
      <div class="w95">
        <h1 class="header-title">タスク管理</h1>
        <ul class="h-list">
          <RouterLink to="/staff-top">
            <li>職員一覧</li>
          </RouterLink>
        </ul>
      </div>
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
  .w95 {
    width: 95%;
    margin: 0 auto;
    display:flex;
    justify-content: space-between;
    align-items: center;

  }
  .header-title {
    color: white;
    font-size: 3rem;
    padding: {
      top: 10px;
      bottom: 10px;
    }
  }
}
.h-list {
  margin-right: 20px;
  color: rgb(255, 249, 249);
}

</style>
