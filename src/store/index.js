import Vue from 'vue'
import Vuex from 'vuex'

import state from './state.js'
import  mutations from './mutations.js'
import * as actions from './actions.js'
import * as getters from './getters.js'

//vuex修改日志
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

//vuex调试工具
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  mutations,
  getters,
  state,
  strict: debug, //开发坏境开启vuex严格模式
  plugins: debug ? [createLogger()] : []
})