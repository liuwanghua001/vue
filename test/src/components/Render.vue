<template>
    <div class="render">        
        render
        <div class="around"></div>
        <button @click="renderVerifyStatus">renderVerifyStatus</button>
        <div>------------</div>
        <AnchoredHeading :level="1">
            <span>Render</span> Vue
        </AnchoredHeading>
        <strong>{{ this.createH1 }}</strong>
        <h3>----------------</h3>
    
    </div>  
</template>

<script>
import AnchoredHeading from '@/components/AnchoredHeading'
export default {
  name: 'render',
  data () {
      return {
          list: [
              
          ],
          renderTit: "标签名称",
          createH1: "h1"
      }
  },
  methods: {
    /*单文件组件渲染，消息弹窗用render*/   
    // Vue 综合- render：https://juejin.cn/post/6877427874224635911
      renderVerifyStatus: function() {
                           
      }
  },
  components: {
      AnchoredHeading
  },
  props: {
      type: Number,
      required: true
  }
}
</script>

<style scoped>
.around{width:60px;height:60px;border-radius:50%;background:#000;margin-bottom:20px;}
</style>
