import { createApp } from 'vue'
import App from './App.vue'
import { Vue } from "vue";
// import router from './router'
import store from './store'


const app = createApp(App).mount('#app')

app.use(store)
