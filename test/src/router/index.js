import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hook from '@/components/Hook'
import Cycle from '@/components/Cycle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/hook",
      name: "Hook",
      component: Hook,
     /*
      beforeEnter: (to, from, next) => {
        console.log(to)
        console.log(from)
        console.log(next)
        next(true)
      }
     */
    },
    {
      path: "/cycle",
      name: "Cycle",
      component: Cycle
    }
  ]
})
