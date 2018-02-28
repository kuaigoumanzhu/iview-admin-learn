// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { router } from './router/index'
import {appRouter} from './router/router';
import store from './store'
import iView from 'iview'
import VueI18n from 'vue-i18n';
import util from './libs/util';
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(VueI18n);
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data: {
    currentPageName: ''
  },
  mounted () {
    this.currentPageName = this.$route.name;
    // 显示打开的页面的列表
    this.$store.commit('setOpenedList');
    this.$store.commit('initCachepage');
    // 权限菜单过滤相关
    this.$store.commit('updateMenulist');
},
created () {
  let tagsList = [];
  appRouter.map((item) => {
      if (item.children.length <= 1) {
          tagsList.push(item.children[0]);
      } else {
          tagsList.push(...item.children);
      }
  });
  this.$store.commit('setTagsList', tagsList);
}
})
