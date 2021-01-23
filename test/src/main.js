// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.\
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import Vuex from 'vuex'
import apis from './api/api'
import { Button, Popup, Cell  } from 'vant'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false

let usePlug = [Popup, Button, Cell, Vuex, apis, ElementUI]
usePlug.forEach(function(item,index) {  
  Vue.use(item)
})
Vue.use(VueAxios,axios)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, v) {
      state.count += v
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  apis,
  router,
  components: { App },
  template: '<App/>'
})
