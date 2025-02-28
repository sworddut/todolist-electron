<template>
  <div class="banner">
    <h2>待办事项</h2>
    <div class="operator-area">
      <button class="close-button" @click="handleClose">
        <svg
          t="1740722518092"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2029"
          width="20"
          height="20"
        >
          <path
            d="M563.8 512l262.5-312.9c4.4-5.2 0.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9c-4.4 5.2-0.7 13.1 6.1 13.1h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
            p-id="2030"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const handleClose = (): void => {
  window.electron.ipcRenderer.send('close-window')
  console.log('close-window')
}
</script>
<style scoped>
.banner {
  background-color: #f0f0f0;
  padding: 10px 3px 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.close-button {
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
