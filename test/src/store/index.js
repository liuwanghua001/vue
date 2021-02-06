import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// 开发环境开启严格模式
const debug = process.env.NODE_ENV !== 'prodycution'

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})