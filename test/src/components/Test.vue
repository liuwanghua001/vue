<template>
    <div>
        <h2>异步创建标签加载</h2>
        <div class="mini-prog" v-html="htmls"></div>
        <button ref="autoclick" @click="autoClick">click event</button>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            htmls:""
        }
    },
    mounted(){
        this.$refs.autoclick.click();
        // console.log("mounted: ",this.$refs.autoclick)        
    },
    created() {
        
        setTimeout(function(){
            
        },3000)
        // this.autoClick()
        // this.$refs.refName.click();
    },
    methods: {        
        
        // click event
        autoClick: function() {
            this.$refs.autoclick.click();
            alert("---autoClick----")
        },
        fn: function() {
            let script = document.createElement('script')  
            // let miniProg = document.getElementById("mini-prog")
            script.type = 'text/wxtag-template' 
            // let id = "mini-prog"
            // let { image = '' } = item.material && item.material[0]; 
            // <img src="${image}" width="100%" height="70px" />  
            let item = {
                appid: "gh_6a45f1123c22", // 小程序原始id
                url:"pages/index/index.html" 
            }  
            script.text = `<div style="height:70px;width:100%; background:red;color:#fff;"> 
                                <button>跳转小程序</button>    
                            </div>` 
            let html = `<wx-open-launch-weapp style="width:100%;display:block;height:70px;" username="${item.appid}" path="${item.url}">
                            ${script.outerHTML}
                        </wx-open-launch-weapp>`
            this.htmls = html                        
            
            // document.getElementById(id).innerHTML = html;
            
        }
    }
}
</script>