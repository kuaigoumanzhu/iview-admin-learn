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
export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@/views/error-page/403.vue')
};

//作为main组件的子页面展示，但不在左侧菜单显示
export const otherRouter={

}

//作为main组件的子页面展示并且在左侧菜单显示路由
export const appRouter=[
    
]

//所有路由都要下载routers里
export const routers=[
    loginRouter,
    otherRouter,
    ...appRouter,
    page403,    
    page404
]