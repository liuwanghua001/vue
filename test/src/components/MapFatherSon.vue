<template>    
   <div>
       <!-- // 这个是地图显示  isditu 控制是否展示地图  -->
        <div class="box" v-show="isditu">
        <amap-son width="100%" height="100%" @location="location"></amap-son>
        </div>    
        <!-- // 这个是点击事件 触发 控制地图显示  -->
        <div class="dandee">
            <div class="danone">所在区域</div>
            <div class="dantwo">
                <el-input v-model="s_addr" placeholder="请选择所在区域" @click="xuanzeditu"></el-input>
            </div>
            <div class="xingxing"></div>
            <div @click="xuanzeditu" class="jinrud"></div>
        </div>    
        <div class="dandee">
            <div class="danone">详细地址</div>
            <div class="dantwo">
                <el-input v-model="s_house_number" @change="changedd" placeholder="请输入街道门牌号"></el-input>
            </div>
            <div class="xingxing"></div>
        </div>
   </div>
</template>

<script>
import AmapSon from './AmapSon'
export default {
  components: {
    AmapSon: AmapSon
  },
 
  data() {
    return {
      isditu: false,
      provinceValue: "",
      cityValue: "",
      regionValue: "",
      s_addr:"",
      s_house_number: "",
      s_latitude :"",
      s_longitude :"",
    };
  },
 
 methods: {
    // 这个是点击子组件里面的确定
     location(point, address) {
      this.isditu = false;
      this.s_latitude = point[1];       
      this.s_longitude = point[0];
      let s_addrs = address.split(",")[0];
      this.provinceValue = s_addrs.split("-")[0];  //省会
      this.cityValue = s_addrs.split("-")[1];   // 城市
      this.regionValue = s_addrs.split("-")[2]; // 区域
      this.s_addr = this.provinceValue + this.cityValue + this.regionValue; //省市区 拼接
      console.log(address.split(",")[1]);
      this.s_house_number = address.split(",")[1];   // 门牌号
    },
  // 这个是点击父组件选择区域 显示地图
    xuanzeditu() {
      this.isditu = true;
    },
 
   // 注意如果 客户修改具体的门牌号 那么我们需要重新获取经纬度   
      changedd() {
      axios
        .get("https://restapi.amap.com/v3/geocode/geo", {   //这个但是调用官方的方法  将地址解析成经纬度
          params: {
            key: "8e4658b6641d49f6d3a1ba78e27eb9d2",
            address:
              this.provinceValue +
              this.cityValue +
              this.regionValue +
              this.s_house_number
          }
        })
        .then(response => {
          console.log(response.data.geocodes[0].location.split(","));
          let shuzu = response.data.geocodes[0].location.split(",");
          this.s_latitude = shuzu[1];
          this.s_longitude = shuzu[0];
        })
        .catch(function(error) {
          // 请求失败处理
          console.log(error);
        });
    },
 
 
}
 
}
</script>
<style scoped>

</style>