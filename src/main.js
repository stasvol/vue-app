import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
// import Vue from 'vue'

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.mount('#app');


// Vue.config.productionTip = false
// new Vue ({
//     render : h => h(App),
// }).$mount('#app')