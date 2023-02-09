import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import './index.css'

import store from "./store/store";

import VueLazyLoad from 'vue3-lazyload'
import LazyImage from './directives/laztImage';


const app = createApp(App)

app.use(router).directive('lazy-image', LazyImage.directive).use(store).use(VueLazyLoad, {})

app.mount('#app')
