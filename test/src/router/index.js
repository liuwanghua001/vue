import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hook from '@/components/Hook'
import Cycle from '@/components/Cycle'
import Template from '@/components/Template'
import Father from '@/components/Father'
import Son from '@/components/Son'
import Bus from '@/components/Bus'

import About from '@/views/About' 
import Home from '@/views/Home'

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
    },
    {
      path: "/template",
      name: "Template",
      component: Template
    },
    {
      path: "/father",
      name: "Father",
      component: Father
    },
    {
      path: "/son",
      name: "Son",
      component: Son
    }, 
    {
      path: "/bus",
      name: "Bus",
      component: Bus
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    }
  ]
})
