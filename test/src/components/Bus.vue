<template>
    <div>
        <h2>事件总线测试</h2>
        <button @click="testBus">事件总线挂载测试</button>
        <Header></Header>
        <Main></Main>
    </div>  
</template>

<script>
import Header from "./Header"
import Main from "./Main"
export default {
  name: 'bus',
  data () {
      return {
         
      }
  },
  components: {
      Header,
      Main
  },
  methods: {      
      testBus: function(){
          console.log(this.$bus)
      }    
  },
}
</script>

<style>


</style>
