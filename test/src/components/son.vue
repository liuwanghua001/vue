<template>
    <div>        
         <h2>--------------------------------</h2>
        <h2 ref="info">子组件本身的值：{{ msg }}</h2>
        <h3>----------------son-------------</h3>
        <input type="text" v-model="msg">
        <button @click="click">按钮</button>
        <h2>--------------------------------</h2>
    </div>  
</template>

<script>
export default {
  name: 'son',
  data () {
      return {
          list: [
              {name:"123",scores:12}
          ],
          msg: "son"
      }
  },
  watch: {

  },
  methods: {      
      click() {
          // 子组件可以使用 $emit 触发父组件的自定义事件
          this.$emit('son', this.msg)
      }
  },
}
</script>

<style>

</style>
