import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


document.addEventListener('DOMContentLoaded', () => {
    const appElement = document.createElement('div')
    document.body.appendChild(appElement)
    
    createApp(App).mount(appElement)
})
