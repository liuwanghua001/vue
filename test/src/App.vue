<template>
  <div id="app">
    <button @click="mutations" >vuex...</button>
    <h2>{{ this.$store.state.count }}</h2>
    <!-- <router-view/> -->
    <h2>-----------------</h2>
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
      msg: "123gsdfgsdf"
    }
  },
  components: {
    "v-home": Home,
    "v-about": About
  },
  methods: {
    mutations(){
      let v = 10
      this.$store.commit("increment", v)
    }
  }
}
</script>

<style>

</style>
