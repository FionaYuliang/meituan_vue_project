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
            path: '/center',
            component: () => import('../pages/myCenter/MyCenter'),
        },
        {
            path: '/login',
            component: () => import('../pages/myCenter/Login')
        },
        {
            path: '/register',
            component: () => import('../pages/myCenter/Register')
        },
        {
            path: '/userinfoedit',
            component: () => import('../pages/myCenter/Userinfo')
        },
    ]
})

export default router;