// main.js or your entry Vue file
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// document.addEventListener('mouseenter', (event) => {
//   console.log('mouseenter',event)
//   window.electron.ipcRenderer.send('mouseenter', event)
// })

// document.addEventListener('mouseleave', (event) => {
//   console.log('mouseleave',event)
//   window.electron.ipcRenderer.send('mouseleave', event)
// //   window.electron.ipcRenderer.send('mousedown', event)
// })
