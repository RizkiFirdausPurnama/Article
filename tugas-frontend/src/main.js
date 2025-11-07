import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios' // <-- Import axios

// Ini adalah pengaturan "anti-gagal" untuk error 419
axios.defaults.withCredentials = true; 
axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')