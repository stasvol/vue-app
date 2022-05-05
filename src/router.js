import { createRouter, createWebHashHistory} from "vue-router";
 import Home from "./view/Home.vue"
import App from "@/App";

export default createRouter({
        history: createWebHashHistory(),
        routes: [
        {patch: '/' , component: Home, alias:'/'},
        // {patch: '/app' , component: App},
        {patch: '/Todos', component: () => import('./view/Todos.vue')}
      ]
})

// import Vue from "vue";
// import Router from "vue-router";
// import Home from "./view/Home"
//
// Vue.use(Router)
//
// export default Router ({
//     node:'history',
//     routes: [
//         {
//           patch: '/' ,
//           component: Home
//         },
//         {
//             patch: '/todos',
//             component: () => import('./view/Todos.vue')
//         }
//     ]
// })