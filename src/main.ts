import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'

import './style.css'
import App from './App.vue'
import router from './router'
import store, {key} from "./store";

const app = createApp(App)

app.use(router)
app.use(store, key)
app.use(MotionPlugin)

app.mount('#app')
