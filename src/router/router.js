//不作为Main组件的子页面展示的页面（在整个浏览器区域展示）
export const loginRouter={
    path: '/login',
    name: 'login',
    meta: {
        title: '登录' //非必填，（不填会有默认值）
    },
    component: ()=> import('@/views/login.vue')
}
export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

//所有路由都要下载routers里
export const routers=[
    loginRouter,
    page404
]