<template>
    <div class="footer">        
      
        <van-button type="primary">主要按钮</van-button>      
        <van-cell is-link @click="showPopup">展示弹出层</van-cell>
        <van-popup v-model="show">内容</van-popup>

        <van-dialog v-model="model" title="跳转小程序"
        message="正在跳转小程序">
           
        </van-dialog>
    </div>  
</template>

<script>

export default {
  name: 'vant',
  data () {
      return {
          show: false,
          model: true
      }
  },
  mounted() {
    this.$dialog.alert({
      message: '弹窗内容',
    });
  },
  methods: {
    showPopup() {
        this.show = true;
    }
  },
  mounted(){
      
  }
}
</script>

<style scoped>

</style>
