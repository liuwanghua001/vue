import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hook from '@/components/Hook'
import Cycle from '@/components/Cycle'
import Template from '@/components/Template'
import Father from '@/components/Father'
import Son from '@/components/Son'
import Bus from '@/components/Bus'
import Maps from '@/components/Maps'
import Render from '@/components/Render'
import Vant from '@/components/Vant'
import Request from '@/components/Request'
import Vuex from '@/components/Vuex'
import QrCode from '@/components/QrCode'
import Amap from '@/components/Amap'
import MapFatherSon from '@/components/MapFatherSon'
import Tab from '@/components/Tab'
import NavTo from '@/components/NavTo/NavTo'
import vcharts from '@/components/vcharts'
import AliWeixin from '@/components/aliweixin'

import TabSon from '@/views/TabSon'
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
    },
    {
      path: "/maps",
      name: "Maps",
      component: Maps
    },
    {
      path: "/render",
      name: "render",
      component: Render
    },
    {
      path: "/vant",
      name: "Vant",
      component: Vant
    },
    {
      path: "/request",
      name: "Request",
      component: Request
    },
    {
      path: "/vuex",
      name: "Vuex",
      component: Vuex
    },
    {
      path: "/qrcode",
      name: "QrCode",
      component: QrCode
    },
    {
      path: "/amap",
      name: "Amap",
      component: Amap
    },
    {
      path: "/mapfatherSon",
      name: "MapFatherSon",
      component: MapFatherSon
    },
    {
      path: "/tab",
      name: "Tab",
      component: Tab
    },
    {
      path: "/tabson",
      name: "TabSon",
      component: TabSon
    },
    {
      path: "/NavTo",
      name: "NavTo",
      component: NavTo
    },
    {
      path: "/Vcharts",
      name: "Vcharts",
      component: vcharts
    },
    {
      path: "/AliWeixin",
      name: "AliWeixin",
      component: AliWeixin
    }
  ]
})
