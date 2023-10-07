import {createApp} from 'vue'
import '@/styles/scss/app.css'
import App from './App.vue'
import router from '@/router/router'

createApp(App).use(router).mount('#app')
