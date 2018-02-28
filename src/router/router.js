import Main from '@/views/Main.vue'
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
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        // { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: ()=>import('@/views/home/home.vue') },
        { path: 'home', title: '首页', name: 'home_index', component: ()=>import('@/views/home/home.vue') },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/own-space.vue') },
        { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/message/message.vue') }
    ]
}

//作为main组件的子页面展示并且在左侧菜单显示路由
export const appRouter=[
    // 多语言切换
    {
        path: '/international',
        icon: 'earth',
        title: {i18n: 'international'},
        name: 'international',
        component: Main,
        children: [
            // { path: 'index', title: {i18n: 'international'}, name: 'international_index', component: () => import('@/views/international/international.vue') }
            { path: 'index', title: '多语言', name: 'international_index', component: () => import('@/views/international/international.vue') }
        ]
    },
    {
        path: '/component',
        icon: 'social-buffer',
        name: 'component',
        title: '组件',
        component: Main,
        children: [
            {
                path: 'split-pane-page',
                icon: 'ios-pause',
                name: 'split-pane-page',
                title: 'split-pane',
                component: () => import('@/views/blade-components/split-pane/split-pane-page.vue')
            }
        ]
    },
    {
        path: '/advanced-router',
        icon: 'ios-infinite',
        name: 'advanced-router',
        title: '高级路由',
        component: Main,
        children: [
            { path: 'mutative-router', title: '动态路由', name: 'mutative-router', icon: 'link', component: () => import('@/views/advanced-router/mutative-router.vue') },
            { path: 'argument-page', title: '带参页面', name: 'argument-page', icon: 'android-send', component: () => import('@/views/advanced-router/argument-page.vue') }
        ]
    }
]

//所有路由都要下载routers里
export const routers=[
    loginRouter,
    otherRouter,
    ...appRouter,
    page403,    
    page404
]