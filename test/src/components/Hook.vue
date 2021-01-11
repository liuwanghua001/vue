<template>
    <div>
        <!-- 
            路由的钩子函数就比较少，主要的有两种，第一种是在进入路由之前，第二种就是
            离开路由之前。
            主要有两种配置方式，第一种是在router.js中配置，第二种就是在模版中配置。
         -->
        hook    
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
      console.log(to)
      console.log(from)
      console.log(next)
      next(true)
  }
}
</script>

<style>

</style>
