<template>
    <div>
        <h2>Main</h2>
        <ul>
            <li v-for="(item,index) in list" :key="index"></li>
        </ul>
    </div>  
</template>

<script>
export default {
  name: 'main',
  data () {
      return {
         content: "",
         list: [
            {name:pingzi,age:22},
            {name:pingzi,age:22},
            {name:pingzi,age:22}
         ]
      }
  },
  methods: {      
      add2(content){
          console.log(content)
      }
  },
}
</script>

<style>

</style>
