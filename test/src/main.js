// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.\
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import { Button, Popup, Cell  } from 'vant'

Vue.config.productionTip = false
Vue.use(Vuex)

// Vue.use({Popup,Button,Cell})
Vue.use(Popup)
Vue.use(Button)
Vue.use(Cell)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, v) {
      state.count+=v
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
