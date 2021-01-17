<template>
  <div id="app">
    
    <!-- <router-view/> -->

    <v-home></v-home>
    <v-about></v-about>
  </div>
</template>

<script>
  import Home from './views/Home'
  import About from './views/About'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    "v-home": Home,
    "v-about": About
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
