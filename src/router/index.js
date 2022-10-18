import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
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
            path: 'mine',
            component: () => import('../pages/mine/Mine'),
        }
    ]
})

export default router;