import Vue from 'vue'
import iView from 'iview'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cookies from 'js-cookie'
import {routers} from './router'

Vue.use(Router)

export default new Router({
  mode:'history',
  //routers:routers
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=> import('@/views/login.vue')
    },{
      path:'/*',
      name:'error404',
      component: ()=> import('@/views/error-page/404.vue')
    }
  ]
})
