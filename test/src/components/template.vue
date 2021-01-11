<template>
    <div>
        <!-- 
              
         -->
        <h2 ref="info">{{ msg }}</h2>
        
    </div>  
</template>

<script>
export default {
  name: 'Cycle',
  data () {
      return {
          list: [
              {name:"123",scores:12}
          ],
          msg: "template"
      }
  },
  watch: {

  },
  methods: {
      say() {
          console.log("say")
      }
  },


 


}
</script>

<style>

</style>
