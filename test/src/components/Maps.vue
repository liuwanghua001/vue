<template>
    <div class="map">        
        <Header></Header>
        <h2>map2</h2>
        <Footer></Footer>
    </div>  
</template>

<script>
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
export default {
  name: 'maps',
  data () {
      return {
          peopleList: [
              {id:4,name:"李健"},{id:5,name:"李现"},{id:6,name:"李磊"}
          ],
          msg: "son"
      }
  },
  methods: {
    //   map场景：后端返回对象的键名需要改变
    peopleList: function() {
        this.peopleList.map(item => {
            console.log({label: item.name, value: item.id})
            return {label: item.name, value: item.id}
        })
    }
  },
  components: {
      Header,
      Footer
  }
}
</script>

<style scoped>
.map{
    width:100%;height:50px;background:#ccc;
}
</style>
