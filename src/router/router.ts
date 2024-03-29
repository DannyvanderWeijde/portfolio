import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {path: '', name: 'home', component: () => import('@/views/HomePage.vue')},
    {path: '/home', redirect: '/'},
    {path: '/about', name: 'about', component: () => import('@/views/AboutPage.vue')},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router