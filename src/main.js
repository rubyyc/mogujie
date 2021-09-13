import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.scss'
import '@/mock'
import 'lib-flexible/flexible.js'
createApp(App).use(store).use(router).mount('#app')
