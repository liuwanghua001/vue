<template>
  <div id="app">
    <button @click="mutations" >vuex...</button>
    <h2>{{ count }}</h2>
    <!-- <router-view/> -->
    <h2>-----------------</h2>
    <v-home></v-home>
    <v-about></v-about>
  </div>
</template>

<script>
  import Home from './views/Home'
  import About from './views/About'
  import { mapState } from 'vuex'
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
  // computed: mapState({
  //   count: 'count',
  // })

  computed: {
    countHeadel() {
      return this.$store.state.count
    }
  },

  computed: {
    ...mapState({
      count: 'count'
    })
  }
  ,
  methods: {
    mutations(){
      let v = 6
      this.$store.commit("increment", v)
    }
  }
}
</script>

<style>

</style>
