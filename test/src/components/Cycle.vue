<template>
    <div>
        <!-- 
            生命周期钩子 = 生命周期函数 = 生命周期事件

            Vue生命周期分类：
            1、创建期间的生命周期方法
                beforeCreate:
                created:
                beforeMount:
                mounted:
            2、运行期间的生命周期方法
                beforeUpdate:
                updated:
            3、销毁期间的生命周期方法
                beforeDestroy:
                destroyed:        
         -->
      Cycle 
        
    </div>  
</template>

<script>
export default {
  name: 'Cycle',
  data () {
      return {
          list: [
              {name:"123",scores:12}
          ],
          msg: "授人渔"
      }
  },
  watch: {

  },
  methods: {
      say() {
          console.log("say")
      }
  }
}
</script>

<style>

</style>
