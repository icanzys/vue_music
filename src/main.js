import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import createRouter from './config/router'
import store from './store'
//解决300ms延迟问题
import fastclick from 'fastclick'
//懒加载
import VueLazyLoad from 'vue-lazyload'

fastclick.attach(document.body)
Vue.use(VueLazyLoad, {
  //懒加载配置项,默认图片
  loading: require('./common/images/default.png')
})

const router = createRouter()

import './common/stylus/index.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
