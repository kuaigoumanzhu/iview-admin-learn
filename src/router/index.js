import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import {routers} from './router'

Vue.use(Router)

export default new Router({
  mode:'history',
  //routers:routers
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: ()=> import('@/views/login.vue')
    }
  ]
})
