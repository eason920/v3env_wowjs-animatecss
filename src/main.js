import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import animated from 'animate.css'// 二法擇一(a:1/2)

const app = createApp(App)
// app.use(animated) // 二法擇一(a:2/2)(可省)
app.use(store).use(router).mount('#app')
