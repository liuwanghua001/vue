<template>

    <div class="footer">        

        <van-button type="primary">主要按钮</van-button>      
        <van-cell is-link @click="showPopup">展示弹出层</van-cell>
        <van-popup v-model="show">内容</van-popup>
                
        <van-dialog v-model="model" title="跳转小程序"
        message="正在跳转小程序">           
        </van-dialog>
        <button @click="toastClick">Toast</button>
        <button @click="toastLoading">Toast Loading</button>
        

        <van-toast id="van-toast" />
    </div>  
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'vant',
  data () {
      return {
          show: false,
          model: false
      }
  },
  mounted() {
    // 自定义加载图标
     
  },
  methods: {
    showPopup() {
        this.show = true;
    },
    toastLoading: function() {
        
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner',
      }); 
    },
    toastClick: function() {  
      

      this.$toast('提示文案')
    }
  },
  mounted(){
      
  }
}
</script>

<style scoped>

</style>
