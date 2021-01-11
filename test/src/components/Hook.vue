<template>
    <div>
        <!-- 
            路由的钩子函数就比较少，主要的有两种，第一种是在进入路由之前，第二种就是
            离开路由之前。
            主要有两种配置方式，第一种是在router.js中配置，第二种就是在模版中配置。
         -->
        hook    
        <router-link :to='{path: "/"}'>回到首页</router-link>
    </div>  
</template>

<script>
export default {
  name: 'Hook',
  data () {
      return {
          list: [
              {name:"123",scores:12}
          ]
      }
  },
  beforeRouteEnter: (to, from, next) => {
      // 在进入hook之前
      console.log(to)
      console.log(from)
      console.log(next)
      next(true)
      console.log("进入hook之前")
  },
  beforeRouteLeave: (to, from, next) => {
      // 在离开hook之前
      console.log(to)
      console.log(from)
      console.log(next)
      
      console.log("离开hook之前")
      if((confirm('请问你是否要离开这个页面'))) {
          next(true)
      } else {
          next(false)
      }
      
  }
}
</script>

<style>

</style>
