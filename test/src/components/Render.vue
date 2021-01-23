<template>
    <div class="render">        
        render
    </div>  
</template>

<script>

export default {
  name: 'render',
  data () {
      return {
          list: [
              
          ]
      }
  },
  methods: {
    /*单文件组件渲染，消息弹窗用render*/   
    // Vue 综合- render：https://juejin.cn/post/6877427874224635911
      renderVerifyStatus: function() {
          return ""
      }
  }
}
</script>

<style scoped>

</style>
