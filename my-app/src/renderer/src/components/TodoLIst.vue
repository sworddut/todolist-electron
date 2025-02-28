<template>
  <div class="todolist">
    <input v-model="newTask" @keyup.enter="addTask" placeholder="添加新任务，enter确认" class="task-input" 
      @focus="emit('taskInputFocus')"
      @blur="emit('taskInputBlur')"
    />
    <div v-if="tasks.length === 0">
      <Empty />
    </div>
    <ul class="task-list" v-else>
      <li v-for="(task, index) in tasks" :key="index" class="task-item">
        <input type="checkbox" v-model="task.completed" class="task-checkbox" />
        <span :class="{ completed: task.completed }" class="task-text">{{ task.text }}</span>
        <button @click="removeTask(index)" class="remove-button">删除</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, onMounted, watch } from 'vue'
import Empty from './Empty.vue'; // Adjust the path as necessary
const emit = defineEmits<{
  (event: 'taskInputFocus'): void;
  (event: 'taskInputBlur'): void;
}>();
const newTask = ref('')
const tasks = ref([
  { text: '学习', completed: false },
])

onMounted(() => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks.value = JSON.parse(storedTasks);
  }
});

// Watch for changes in tasks and save to localStorage
watch(tasks, (newTasks) => {
  localStorage.setItem('tasks', JSON.stringify(newTasks));
}, { deep: true });

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
  overflow: hidden;
  padding: 20px;
  min-height: 220px;
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
