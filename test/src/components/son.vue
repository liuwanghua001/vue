<template>
    <div>        
        <h2>--------------------------------</h2>
        <h2 ref="info">子组件本身的值：{{ msg }}</h2>
        <h3>----------------son-------------</h3>
        <input type="text" v-model="msg">
        <button>按钮</button>
        <h2>--------------------------------</h2>
        <h2>414</h2>
    </div>  
</template>

<script>
export default {
  name: 'Son',
  data () {
      return {
          list: [
              
          ],
          msg: "son"
      }
  }
}
</script>

<style>

</style>
