import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import './index.css'

import store from "./store/store";

const app = createApp(App)

app.use(router).use(store)

app.mount('#app')
