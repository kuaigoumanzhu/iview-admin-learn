import Vue from 'vue'
import iView from 'iview'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cookies from 'js-cookie'
import {routers, otherRouter, appRouter} from './router'
import util from '../libs/util';


Vue.use(Router)
// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: routers
}

export const router = new Router(RouterConfig);

// 全局前置守卫
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  util.title(to.meta.title); // 设置标题
  // 判断是否已经登录，且前往的页面不是登录页（转向登录页）
  if(!Cookies.get('user') && to.name !== 'login') {
    next({
      name: 'login'
    });
  } else if (Cookies.get('user') && to.name === 'login') {
    util.title();
    next({
      name: 'home_index'
    });
  } else {
    //最简单的权限过滤相关(先不判断,后续后端映射前端，在vuex中维护权限数组【菜单，按钮、数据等】) 直接通过
    util.toDefaultPage([...routers], to.name, router, next);    
  }
});

// 全局后置钩子函数 (不会接受 next函数也不会改变导航本身)
router.afterEach((to, from ) => {
  util.openNewPage(router.app, to.name, to.params, to.query);
  iView.LoadingBar.finish();
  window.scrollTo(0,0);
});

// export default new Router({
//   mode:'history',
//   //routers:routers
//   routes: [
//     {
//       path: '/',
//       name: 'login',
//       component: ()=> import('@/views/login.vue')
//     },{
//       path:'/*',
//       name:'error404',
//       component: ()=> import('@/views/error-page/404.vue')
//     }
//   ]
// })
