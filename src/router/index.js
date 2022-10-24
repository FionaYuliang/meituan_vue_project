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
        },
        {
            path: '/shop',
            component: () => import('../pages/myShop/MyShop'),
        },
        {
            path: '/createorder',
            component: () => import('../pages/createOrder/CreateOrder')
        },
        {
            path: '/address',
            component: () => import('../pages/address/Address')
        },
        {
            path: '/addressedit',
            component: () => import('../pages/address/AddressEdit')
        },
        {
            path: '/userinfoedit',
            component: () => import('../pages/myCenter/userinfoedit')
        },
    ]
})

export default router;