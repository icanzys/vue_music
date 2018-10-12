import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js'

Vue.use(Router)

export default () => {
  return new Router({
    routes,
    mode: 'history'
  })
}