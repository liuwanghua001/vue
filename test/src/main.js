// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Bus： 事件派发、监听和回调
class Bus {
  constructor() {
    this.callbacks = {}
  }
  helloping() {
    this.callback = {}
  }

  // 收集监听的回调函数
  $on(name, fn) {
    this.callbacks[name] = this.callbacks[name] || []
    this.callbacks[name].push(fn)
  }

  // 执行监听的回调函数
  $emit(name, args12) {
    if (this.callbacks[name]) {
      this.callbacks[name].forEach(cb => cb(args))
    }
  }
}
// 在main.js中这样使用
Vue.prototype.$bus = new Bus()

Vue.config.productionTip = false
console.log(this.$bus)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
