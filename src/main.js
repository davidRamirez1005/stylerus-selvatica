import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './shared/router/index'
import { appp } from './utils/firebase.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'animate.css';
import 'tailwindcss/tailwind.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(appp)

app.mount('#app')