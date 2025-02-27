<template>
  <div id="app" class="draggable-area">
    <TodolistContainer />
  </div>
</template>

<script setup lang="ts">
import TodolistContainer from './components/TodolistContainer.vue'
</script>

<style scoped>
.draggable-area {
  -webkit-app-region: drag;
  /* 其他样式 */
}
</style>
