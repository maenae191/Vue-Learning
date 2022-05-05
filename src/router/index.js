import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AboutUs from '@/components/AboutUs'
// import ViewDetail from '@/components/ViewDetail'

const routes = [{
        path: '/',
        name: 'home',
        component: HelloWorld
    },
    {
        path: '/about',
        name: 'about',
        component: AboutUs
    },
    {
        path: '/send-data',
        name: 'send.data',
        component: () =>
            import ('@/components/SendData')
    },
    {
        path: '/detail/:id',
        name: 'view.detail',
        component: () =>
            import ('@/components/ViewDetail')
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router