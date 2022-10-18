import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: () => import('../pages/myHome/MyHome'),
        },
        {
            path: '/cart',
            component: () => import('../pages/myCart/MyCart'),
        },
        {
            path: '/order',
            component: () => import('../pages/myOrder/MyOrder'),
        },
        {
            path: '/center',
            component: () => import('../pages/myCenter/MyCenter'),
        }
    ]
})

export default router;