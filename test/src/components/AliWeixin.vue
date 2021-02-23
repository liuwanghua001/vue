<template>
    <div class="content">
        <h2 class="title">稍等，正在跳转小程序中。。。。。</h2>
        <wx-open-launch-weapp
                   id="launch-btn"
                   :username="username"
                   :path="path"
                   @launch="handleLaunchFn"
                   @error="handleErrorFn"
           > 
           <script type="text/wxtag-template">
               <style>.btn {width:200px;height:40px;border:1px solid red;line-height:40px;display:block;}</style>
               <button class="btn">h5打开小程序</button>
           </script>
        </wx-open-launch-weapp>
    </div>
</template>


<script>
// <script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
// import wx from 'weixin-js-sdk' // 引入weixin JSDK
import wx from 'weixin-js-sdk'
// api 接口从后端获取微信jsdk授权信息
// import { getWechatJsConfig } from '../../../api/wechat'

export default {
    data () {
        return {
            username: 'gh_6a45f1123c22', // gh_ 开头的原始小程序ID
            path: 'pages/index/index', // 一定要以 .html 结尾
            btnText: "xxx体验版",
            id: '',
            appId:'wx7478d1edd78f42ad',
            htmlBag:'',
        }
    },
    mounted() {


            console.log("1111111111111111")
            this.axios.get("/api/othertool/wxjssdk",{
                params: { 
                    url: window.location.href.split("#")[0].toString(),
                    // appid: 'wx7478d1edd78f42ad'
                }
            }).then(({data}) => {
                console.log(data)
            })
            console.log("2222222222222222222")

        // 测试请求公众号授权参数
        // this.ToMiniapp();

        // alert("开始判断小程序");

        let platform = this.getPlatform();
        console.log('platform=', platform)
        if (platform === 'wx') {
            // 跳转微信小程序
            // this.ToMiniapp();
 
        //    var btn = document.getElementById("launch-btn");
        //    btn.addEventListener("launch", function (e) {
        //        console.log("success");
        //    });
        //    btn.addEventListener("error", function (e) {
        //         alert("小程序打开失败");
        //         console.log("fail", e.detail);
        //    });

            // location.href = 'https://www.ourvend.com';
            // 只能通过微信JSSDK操作

            // this.ToMiniapp();
        } else if (platform === 'zfb') {
            // 跳转支付宝小程序
            // location.href = 'https://mini.open.alipay.com/channel/miniIndex.htm';
            location.href = 'https://qr.alipay.com/s6x17270qbogsqjgxuykrb8';
        }
    },
    methods: {
        handleLaunchFn(e) {
            console.log(e)
        },
        handleErrorFn(e) {
            console.log(e)
        },

        // 支付宝或微信
        getPlatform() {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                return 'wx';
            } else if (ua.match(/alipayclient/i) == "alipayclient") {
                return "zfb";
            } else {
                if (ua.match(/android/i) == "android") {
                    return 'android'
                } else if (ua.match(/iphone/i) == "iphone" || ua.match(/ipad/i) == "ipad") {
                    return 'ios'
                }
            }
        },
        // 跳转微信小程序
        ToMiniapp() {
            // uni.request()
            // getWechatJsConfig({
            //     api: 'getLocation',
            //     'url': window.location.href
            // }).then(res => {
            //     res['openTagList'] = ['wx-open-launch-weapp'] // 微信小程序标签名加入 openTagList
            //     console.log(res)
            //     // wx.config(res);
            // })

            this.axios.get("/api/othertool/wxjssdk",{
                params: { 
                    url: window.location.href.split("#")[0].toString(),
                    // appid: 'wx7478d1edd78f42ad'
                }
            }).then((data) => { // {data}
                console.log(data)

                // wx.config({
                //     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                //     appId: '', // 必填，公众号的唯一标识
                //     timestamp: '', // 必填，生成签名的时间戳
                //     nonceStr: '', // 必填，生成签名的随机串
                //     signature: '',// 必填，签名
                //     jsApiList: [// 必填，需要使用的JS接口列表
                //         'updateAppMessageShareData',
                //         'updateTimelineShareData',
                //         'scanQRCode',
                //         'getLocation',
                //         'openLocation',
                //         'chooseImage', 
                //         'previewImage', 
                //         'getLocalImgData'
                //     ], 
                //     openTagList: [ // // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                //         "wx-open-launch-weapp"
                //     ]
                // })

                // wx.ready(function (res) {
                //     // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中
                //     console.log(res)
                // });

                // wx.error(function (res) {
                //     console.log(JSON.stringify(res))
                // });

            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
.content {
   
}

.title {
    font-size: 32rpx;
    color: #8f8f94;
}
</style>