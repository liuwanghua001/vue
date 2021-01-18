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

</style>
