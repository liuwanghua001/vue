<template>
    <div>
        <!-- 
            https://www.bilibili.com/video/BV1854y1S7ND?p=2
            
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
        <h2 ref="info">{{ msg }}</h2>        
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
      
  },


  // 1、创建期间的生命周期方法

  beforeCreate: function() {
      // 实例被刚刚创建出来，此时还没有初始化好data和methods属性
      // resoult: undefined
      // console.log(this.msg)
      // resoult: undefined
      // console.log(this.say)
  },
  created: function(){
      // 初始化完vue中的实例和方法
      // 这里是最早能够访问Vue实例中保存的数据和方法的地方      
      // console.log(this.msg)     
      // console.log(this.say)
  },
  beforeMount: function(){
      // 调用的时候，表示vue已经编译好了最终模版，但是还没有将最终的模板渲染到界面上
      // 这里dom也获取不到
      // console.log("beforeMount:",this.$refs.info)
  },
  mounted: function() {
      // 将已经编译好的模版，挂载到页面指定的容器中显示,可以拿到页面上渲染的内容
      // 这里可以取到dom
      // console.log("beforeMount:",this.$refs.info)
  },

  // 运行期间的生命周期

  beforeUpdate: function() {
      // 只有数据发生了变化，才会调用beforeUpdate
      // 数据被更新了，但是页面模版中的数据没有同步
      // 在调用beforeUpdate的时候，表示Vue实例中保存的数据被修改了，界面还没有更新
      // console.log("数据修改就触发我")
      // console.log("data中的数据：",this.msg)
      // console.log("数据修改了吗？----",this.$refs.info)
      // 数据被渲染了，但界面确实没有渲染
      // console.log(document.querySelector("h2").innerText);
  },
  updated: function(){
      /*在调用updated的时候，表示Vue实例中保存的数据被修改了，并且界面也同步修改数据了
      也就是说数据和界面都同步更新之后就会调用updated*/
      // console.log("---------updated---------")
      // console.log(this.msg)
      // console.log("data中的数据：",this.msg)
      // console.log("数据修改了吗？----",this.$refs.info)
      // 数据被渲染了，界面也同步数据啦
      // console.log(document.querySelector("h2").innerText);
  }

  // 
}
</script>

<style>

</style>
