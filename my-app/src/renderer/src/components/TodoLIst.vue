<template>
  <div class="todolist">
    <h2>待办事项</h2>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="添加新任务，enter确认" class="task-input" />
    <ul class="task-list">
      <li v-for="(task, index) in tasks" :key="index" class="task-item">
        <input type="checkbox" v-model="task.completed" class="task-checkbox" />
        <span :class="{ completed: task.completed }" class="task-text">{{ task.text }}</span>
        <button @click="removeTask(index)" class="remove-button">删除</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const newTask = ref('')
const tasks = ref([
  { text: '学习', completed: false },
])

const addTask = (): void => {
  if (newTask.value.trim()) {
    tasks.value.push({ text: newTask.value, completed: false })
    newTask.value = ''
  }
}

const removeTask = (index: number): void => {
  tasks.value.splice(index, 1)
}
</script>

<style scoped>
.todolist {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.task-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 16px;
}

.task-list {
  list-style: none;
  padding: 0;
  max-height: 200px; /* 设置最大高度 */
  overflow-y: auto; /* 添加滚动条 */
}

.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.task-checkbox {
  margin-right: 10px;
}

.task-text {
  flex-grow: 1;
}

.remove-button {
  background: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
}

.remove-button:hover {
  background: #ff1a1a;
}

.completed {
  text-decoration: line-through;
  color: #aaa;
}
</style>
