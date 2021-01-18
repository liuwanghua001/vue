<template>
  <div>    
    <h2>header</h2>
    <button @click="sendSj">事件总线</button>
  </div>
</template>

<script>
export default {
  name: 'header',
  data() {
      return {
          content: "linux"
      }
  },
  methods: {
      sendSj: function() {
          console.log(this.$bus.$emit('add2', this.content))
      }
  }
}
</script>

<style>

</style>
