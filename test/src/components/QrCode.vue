<template>
    <div>
        
        
        <h2>QrCode</h2>
        <div id="qrcode" ref="qrcode"></div>
        <button @click="qrCode('https://qr.alipay.com/s6x17270qbogsqjgxuykrb8')"
        class="btn"
        >show</button>
    </div>
</template>
<script>
import QRCode from 'qrcodejs2'
export default {
    data() {
        return {

        }
    },
    mounted: function() {
        // this.qrCode()
    },
    methods: {    
        qrCode: function(url) {
            console.log("我的参数：",url)
            let qrcode = new QRCode('qrcode', {
                width: 150, //图像宽度
                height: 150, //图像高度
                text:"https://wap.BalleMax.com",
                colorDark : "#000000", //前景色
                colorLight : "#ffffff", //背景色
                typeNumber:4, 
                correctLevel : QRCode.CorrectLevel.H //容错级别 容错级别有：（1）QRCode.CorrectLevel.L （2）QRCode.CorrectLevel.M （3）QRCode.CorrectLevel.Q （4）QRCode.CorrectLevel.H
            })
            console.log(qrcode)

            qrcode.clear() //清除二维码 
            let newCode = qrcode.makeCode(url) //生成另一个新的二维码
            console.log("新的二维码",newCode)
        }
    }
}
</script>
<style scoped>
.btn{margin-top:50px;}
</style>>

</style>

<!--、
// 微信小程序：https://fuwu.alipay.com/platform/index.htm

// 支付宝小程序生成短链接
// 支付宝小程序：https://qr.alipay.com/s6x17270qbogsqjgxuykrb8
-->
 
