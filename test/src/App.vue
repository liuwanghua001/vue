<template>
  <div id="app">
   
    <router-view/>
    <!-- 
       <button @click="mutations" >vuex...</button>
    <h2>{{ count }}</h2>
      <h2>-----------------</h2>
    <v-home></v-home>
    <v-about></v-about>
    <h2 ref="getDoms">获取dom</h2>
    <h2>-----------------</h2>
    <v-maps></v-maps>
     -->
    
  </div>
</template>

<script>
  import Home from './views/Home'
  import About from './views/About'
  import { mapState } from 'vuex'
  import Maps from '@/components/Maps'
export default {
  name: 'App',
  data() {
    return {
      msg: "123gsdfgsdf"
    }
  },
  created() {
    this.$nextTick(() => {
      // console.log(this.$refs.getDoms)
    })    
  },
  components: {
    "v-home": Home,
    "v-about": About,
    "v-maps": Maps
  },
  // computed: mapState({
  //   count: 'count',
  // })

  // computed: {
  //   countHeadel() {
  //     return this.$store.state.count
  //   }
  // },

  computed: {
    ...mapState({
      count: 'count'
    })
  },
  methods: {
    mutations(){
      let v = 6
      this.$store.commit("increment", v)
    }
  }
}
</script>

<style scoped>

</style>
