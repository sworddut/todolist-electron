<template>
  <div class="todolist-container" :class="{ focused: isTaskInputFocused }">
    <TitleBar/>
    <TodoList @task-input-focus="handleTaskInputFocus" @task-input-blur="handleTaskInputBlur" />
  </div>
</template>

<script setup lang="ts">
import TodoList from './TodoLIst.vue'
import TitleBar from './TiltleBar.vue'
import { ref } from 'vue'

const isTaskInputFocused = ref(false)

const handleTaskInputFocus = (): void => {
  isTaskInputFocused.value = true
}

const handleTaskInputBlur = (): void => {
  isTaskInputFocused.value = false
}
</script>

<style scoped>
.todolist-container {
  position: fixed;
  width: 400px;
  right: 0;
  top: 0;
  transform: translateX(-50px);
  transition: transform 1s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.todolist-container:hover,
.todolist-container.focused {
  transform: translateX(-400px);
}
</style>
