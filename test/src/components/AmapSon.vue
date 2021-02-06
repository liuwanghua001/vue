
<template>
  <div class="map-box" :style="{ width: width, height: height }">
    <div id="amap" class="amap"></div>
    <div class="detail">
      <p>经度：{{point ? point[0] : '-'}}</p>
      <p>纬度：{{point ? point[1] : '-'}}</p>
      <p>地址：{{address}}</p>
      <button size="mini" class="btnmap" @click="commit">确定</button>
    </div>
  </div>
</template>
<script>
import AMap from "AMap";
export default {
  props: {
    width: { type: String, default: "100%" },
    height: { type: String, default: "400px" }
  },
  data() {
    return { address: "", point: this.lnglat, marker: "" };
  },
  mounted() {
    this.init(this.point);
  },
  methods: {
    // 初始化
    init() {
      // 地图实例对象 （amap 为容器的id）
      let amap = new AMap.Map("amap", {
        resizeEnable: true,
        zoom: 15
      });
 
      // 注入插件（定位插件，地理编码插件）
      amap.plugin(["AMap.Geolocation", "AMap.Geocoder"]);
      // 定位
 
      this.currentPosition(amap);
      let that = this;
      amap.on("click", function(e) {
        //地图被点击的时候
        amap.remove(that.marker);
        let lnglat = [e.lnglat.lng, e.lnglat.lat];
        amap.setCenter(lnglat);
        that.addMark(amap, lnglat);
        that.point = [e.lnglat.lng, e.lnglat.lat];
        that.getAddress([e.lnglat.lng, e.lnglat.lat]);
      });
    },
 
    // 定位
    currentPosition(map) {
      // 获取地图的位置
      // 没有传入坐标点，则定位到当前所在位置
      let geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,
        timeout: 10000,
        zoomToAccuracy: true,
        buttonPosition: "RB"
      });
      geolocation.getCurrentPosition((status, result) => {
        if (status === "complete") {
          let points = [result.position.lng, result.position.lat];
          map.setCenter(points); // 设置中心点
          this.addMark(map, points); // 添加标记
          // 存下坐标与地址
          this.point = points; // 复制给展示html页面
          this.getAddress(points); // 传入坐标  获取地址
        } else {
          console.log("定位失败", result);
        }
      });
    },
 
    // 添加标记  就是感叹号标记
    addMark(map, points) {
      this.marker = new AMap.Marker({
        map: map,
        position: points,
        draggable: true, // 允许拖动
        cursor: "move",
        raiseOnDrag: true,
        title: "中心"
      });
      this.marker.on("dragend", e => {
        console.log(e);
        let position = this.marker.getPosition();
        // 存下坐标与地址
        this.point = [position.lng, position.lat];
        this.getAddress([position.lng, position.lat]);
      });
    },
 
    // 根据坐标返回地址(逆地理编码)
    getAddress(points) {
      let geocoder = new AMap.Geocoder({ radius: 1000 });
      geocoder.getAddress(points, (status, result) => {
        if (status === "complete" && result.regeocode) {
          let s_addr =
            result.regeocode.addressComponent.province +
            "-" +
            result.regeocode.addressComponent.city +
            "-" +
            result.regeocode.addressComponent.district;
          let addreesd = result.regeocode.formattedAddress; // 全部地址名称
          let houzhi = addreesd.substring(s_addr.length); // 获取具体街道
          console.log(s_addr);
          console.log(houzhi);
          console.log(addreesd);
          this.address = s_addr + "," + houzhi;
        }
      });
    },
 
    commit() {
      this.$emit("location", this.point, this.address);
    }
  }
};
</script>
 
<style>
/* .map-box {
  box-sizing: border-box;
  background-color: #ddd;
  padding-top: 10px;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
  .amap,
  .detail {
    float: left;
    height: 100%;
  }
  .amap {
    width: 100%;
  }
 
  .detail {
    width: 100%;
    background-color: #fff;
    padding: 0 15px;
    border-left: 1px solid #eee;
    box-sizing: border-box;
    word-wrap: break-word;
    height: 20%;
    top: 0px;
    position: absolute;
    p {
      margin-top: 10px;
    }
  }
  .btnmap {
    width: 100%;
    padding: 5px 0;
    color: #fff;
    cursor: pointer;
    background-color: #409eff;
    border: none;
    border-radius: 3px;
    margin-top: 5px;
    &:hover {
      background-color: #66b1ff;
    }
  }
} */
</style>