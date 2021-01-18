<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function(){
    console.log(this.$bus)
  }
}
</script>

<style>

</style>
