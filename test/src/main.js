// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.\
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import Vuex from 'vuex'
import apis from './api/api'
import { Button, Popup, Cell, Dialog, Toast } from 'vant'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index'
import VueQrcodeReader from 'vue-qrcode-reader'
import VueAMap from 'vue-amap'
import echarts from 'echarts' 
// 微信调试工具 
import VConsole from "vconsole"
new VConsole()
Vue.prototype.$echarts = echarts  


Vue.config.productionTip = false

Vue.prototype.$axios = axios

// 忽略标签
Vue.config.ignoredElements = [
  'wx-open-launch-weapp'
]


let usePlug = [Popup, Button, Cell, Dialog, Vuex, apis, ElementUI, VueQrcodeReader, Toast ]
usePlug.forEach(function(item,index) {  
  Vue.use(item)
})
Vue.use(VueAxios,axios)
Vue.use(VueAMap)
Vue.use(Toast)



VueAMap.initAMapApiLoader({
  key: '8e4658b6641d49f6d3a1ba78e27eb9d2',
  plugin: [
    // 插件
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor',
    "AMap.Geolocation" //定位控件，用来获取和展示用户主机所在的经纬度位置
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
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
