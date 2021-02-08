<template>
  <div class="map">
    
    <el-amap class="amap-box" vid="amapDemo" :zoom="zoom" :center="center" 
    :plugin="plugin">
      <!-- 标记点 -->
      <el-amap-marker :position="center" vid="marker"></el-amap-marker>
      <!-- 圆 -->
      <el-amap-circle
        vid="circle"
        :center="center"
        :radius="radius"
        fill-opacity="0.2"
        strokeColor="#38f"
        strokeOpacity="0.8"
        strokeWeight="1"
        fillColor="#38f"
      ></el-amap-circle>
    </el-amap>
  </div>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
      zoom: 14,
      center: [113.0928, 27.820375],//圆心位置
      radius:100,//圆半径，单位:米
      loaded: false,
      plugin: [{
            pName: 'Geolocation',
            showMarker:false,
            events: {
              init(o) {
                  console.log("取到的结果集：",o)
                //定位成功 自动将marker和circle移到定位点
              o.getCurrentPosition((status, result) => {
                 console.log("result:",result);
                 console.log("status:",status);
                 if (result && result.position) {
                  self.center=[result.position.lng,result.position.lat]
                  self.loaded = true; 
                }else{
                  console.log(`定位失败`)
                }
              });
              console.log("oooooooooooooooo:",o);
              }
            }
          }]
      
    };
  },
  methods:{},
  mounted(){
     console.log("------",window.sessionStorage.id)  //可以获取到经纬度
  }
};
</script>
<style scoped>
.map {
  width: 1200px;
  height: 400px;
  margin:100px auto;
  
  z-index: 100;
}
.amap-wrapper {
  width: 500px;
  height: 400px;
}
</style>