<template>
  <div class="todolist-container">
    <TodoList/>
  </div>
</template>

<script setup lang="ts">
import TodoList from './TodoLIst.vue'
</script>

<style scoped>
.todolist-container {
  position: fixed;
  width: 400px;
  height: 100px;
  border-radius: 8px;
  right: 0;
  top: 0;
  transform: translateX(-50px);
  transition: transform 1s ease;
  background-color: #f0f0f0;
}

.todolist-container:hover {
  transform: translateX(-400px);
}
</style>
