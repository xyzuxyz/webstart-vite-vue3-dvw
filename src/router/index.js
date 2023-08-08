import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [

    { path: '/', component: ()=> import("@/views/Index.vue") },
]

const index = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default index
