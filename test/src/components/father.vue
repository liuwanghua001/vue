<template>
    <div>
        <!-- 
              
         -->
        
        <h2 ref="info">函数接收到子组件传过来的值：{{ msg }}</h2>
        <Son @son="parentFn" :haha="msg"></Son>
        
    </div>  
</template>

<script>
import Son from './Son'
export default {
  name: 'father',  
  data () {
      return {
          list:['fatherdata','12father'],          
          msg: "msg-father-msg-father"
      }
  },
  watch: {

  },
  // 父组件可以使用 props 把数据传给子组件
  props: {
      title: {
          // type: Array,
          // default: "son default"
      }
  },
  methods: {
      parentFn(payload) {
          // 了组件接收过来的值
          this.msg = payload
      }
  },
  components: {
      Son
  },
 


}
</script>

<style>

</style>
