<template>
    <div class="map">        
        <Head></Head>
        <h2>map2</h2>
        <button @click="peopleListEach">peopleListEach</button>
        <button @click="cityListEach">cityListEach</button>
        <Foot></Foot>
    </div>  
</template>

<script>
import Head from '@/components/common/head'
import Foot from '@/components/common/foot'
export default {
  name: 'maps',
  data () {
      return {
          peopleList: [
              {id:4,name:"李健"},{id:5,name:"李现"},{id:6,name:"李磊"}
          ],
          cityList: [
            {
                childrenList: [{ id: 211, name: "福州", provinceName: "福建省" }, { id: 212, name: "厦门", provinceName: "福建省" }],
                provinceName: "福建省"
            },
            {
                childrenList: [{ id: 253, name: "拉萨", provinceName: "西藏自治区" }],
                provinceName: "西藏自治区"
            },
            {
                childrenList: [{ id: 222, name: "上海", provinceName: "上海市" }],
                provinceName: "上海市"
            }
          ]
      }
  },
  methods: {
    //   map场景：后端返回对象的键名需要改变
    peopleListEach: function() {
        this.peopleList.map(item => {
            console.log({label: item.name, value: item.id})
            return {label: item.name, value: item.id}
        })
    },
    //  provinceName转为label，id转为value，name转为label，就需要多层map
    cityListEach: function() {
        this.cityList.map(items => {
            let childrenList = items.childrenList.map(item => {
                return {value: item.id, label: item.name, countrys: item.provinceName}
            })
            console.log({label: items.provinceName, childrenList})
            return {label: items.provinceName, childrenList}
        })
    }
  },
  components: {
      Head,
      Foot
  }
}
</script>

<style scoped>
.map{
    width:100%;height:50px;background:#ccc;
}
</style>
