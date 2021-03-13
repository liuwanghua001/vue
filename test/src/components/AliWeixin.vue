<style>
	*{margin:0;padding:0;}
	/* template{width:100%;height:100%;padding:1px;}
	html,body{width:100%;height:100%;padding:0;margin:0;}
	.mini-pro{width:320px;height:152px;position:relative;background:#fff;border-radius:16px;margin:50% auto 0 auto;
	transform:translateY(76px)}
	.opacity{background:rgba(0,0,0,0.3);width:100%;height:100%;position:absolute;}	
	.mini-pro .title{color:#0f0f0f;padding-top: 26px;font-weight: 500;line-height: 24px;text-align: center;font-size:16px;}
	.mini-pro .message{text-align:center;padding-top: 8px;color: #646566;}
	.mini-pro .enter{color:#090;text-align:center;height:48px;margin-top:27px;}	 */

	/* .content{width:100%;height:700px;background:#090;padding:1px;} */

	/* script{width:100%;height:100%;}
	wx-open-launch-weapp{width:100%;height:100%;} */
</style>
<template> 
	<div class="content">

		<div class="opacity"></div>
		<!-- <div class="mini-pro"> 
			<h4 class="title">跳转小程序</h4>
			<p class="message">正跳转云数小程序</p>
			<div class="enter">确定</div>
		</div>		 -->
		
		<!-- <van-dialog v-model="aliVantDialog" 
			title="云数小店"
			confirmButtonColor="#009900"
            message="正在跳转小程序请确认...">           
        </van-dialog>		 -->
		
		<van-toast id="van-toast" />

		<!-- <div class="mini-prog" v-html="htmls"></div> -->
        <wx-open-launch-weapp				     
        username="gh_6a45f1123c22"
        path="pages/index/index.html?testOrder=pingzi"
		@launch="handleLaunchFn"
		@error="handleErrorFn">		 		
        <script type="text/wxtag-template">
			<style>					
				.mini-pro{width:320px;height:170px;position:relative;background:#fff;border-radius:16px;margin:40% auto 0 15px;
				transform:translateY(76px);border:4px solid #090;margin-bottom:200px;}				
				.mini-pro .title{color:#0f0f0f;font-weight: 500;line-height: 24px;text-align: center;font-size:16px;}
				.mini-pro .message{text-align:center;padding-top: 8px;color: #646566;}
				.mini-pro .enter{color:#090;text-align:center;height:48px;margin-top:27px;}	
				.content{width:100%;height:100%;background:#090;padding:1px;}				
			</style>			
			<!-- <div class="opacity"></div> -->
			<div class="mini-pro"> 
				<h4 class="title">云数小店</h4>
				<p class="message">小程序正在跳转请确认...</p>
				<div class="enter">确定</div>
			</div>	
		</script>		
        </wx-open-launch-weapp>
		<wx-open-launch-weapp				     
        username="gh_6a45f1123c22"
        path="pages/about/about.html"
		@launch="handleLaunchFn"
		@error="handleErrorFn">		 		
        <script type="text/wxtag-template">
			<style>					
				.mini-pro{width:320px;height:170px;position:relative;background:#fff;border-radius:16px;margin:40% auto 0 15px;
				transform:translateY(76px);border:4px solid #090;margin-bottom:200px;}				
				.mini-pro .title{color:#0f0f0f;font-weight: 500;line-height: 24px;text-align: center;font-size:16px;}
				.mini-pro .message{text-align:center;padding-top: 8px;color: #646566;}
				.mini-pro .enter{color:#090;text-align:center;height:48px;margin-top:27px;}	
				.content{width:100%;height:100%;background:#090;padding:1px;}				
			</style>			
			<!-- <div class="opacity"></div> -->
			<div class="mini-pro"> 
				<h4 class="title">云数小店</h4>
				<p class="message">小程序正在跳转请确认2...</p>
				<div class="enter">确定</div>
			</div>	
		</script>		
        </wx-open-launch-weapp>
	</div>
</template>

<script>	
	import { Toast } from 'vant'
	import wx from 'weixin-js-sdk' // 引入weixin JSDK		
	export default {
		data() {
			return {
				aliVantDialog: false,
				htmls:""
			}
		},
		mounted() {    			
			let platform = this.getPlatform();
			console.log('platform=', platform)
			if (platform === 'wx') {               
                // api 接口从后端获取微信jsdk授权信息				
				// 跳转微信小程序
				// location.href = 'https://www.ourvend.com';
				// 只能通过微信JSSDK操作
				this.ToMiniapp();
				// this.$refs.autoclick.click();
				// console.log("auto click success")
			} else if (platform === 'zfb') {  
				// this.aliVantDialog = true              
				Toast.loading({
					message: '加载中...',
					forbidClick: true,
					loadingType: 'spinner',
				}); 
				// 跳转支付宝小程序				
				location.href = 'https://qr.alipay.com/s6x17270qbogsqjgxuykrb8';
			}
			// this.$refs.autoclick.click();
		},
		methods: {			
			// 微信小程序成功回调
			handleLaunchFn (e) {
				// alert(e)
				// console.log(e)
			},
			// 微信小程序失败回调
			handleErrorFn(e){
				// console.log('fail', e.detail);
				// alert(e)
			},
			// 判断web环境
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
					} else {
                        return 'web'
                    }
				} 
			},
			// 跳转微信小诚信
			ToMiniapp() {
				// 异步跳转小程序按钮
				// let script = document.createElement('script')  				
				// script.type = 'text/wxtag-template' 				
				// let item = {
				// 	appid: "gh_6a45f1123c22", // 小程序原始id
				// 	url:"pages/index/index.html" 
				// }  
				// let styleWrap = "height:700px;width:100%; background:red;color:#fff;"
				// let buttonClick = "height:40px;width:200px;border-radius:14px;margin:200px auto 0 auto;"
				// script.text = `<div style="${styleWrap}"> 
				// 					<div ref="autoclick" style="${buttonClick}" @click="autoClick">跳转小程序16</div>    
				// 				</div>` 
				// let html = `<wx-open-launch-weapp style="width:100%;display:block;height:70px;" 
				// 			username="${item.appid}" 
				// 			path="${item.url}"
				// 			@launch="handleLaunchFn"
				// 			@error="handleErrorFn">
				// 				${script.outerHTML}
				// 			</wx-open-launch-weapp>`
				// this.htmls = html  				
				// setTimeout(function(){
				// 	alert("三秒倒计时结束，开始点击。。")
				// 	console.log("小程序点击按钮DOM：", this.$refs.autoclick)
				// 	this.$refs.autoclick.click();
				// },3000)	

				this.axios.post("/api/othertool/wxjssdk",{                    
                        url: window.location.href.split("#")[0].toString(),
                        // appid: "wx7a79ceb41a24b028"
                    }
                ).then( res => {					
					let data = res.data
                    wx.config({
						debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
						appId: data.appid, // 必填，企业号的唯一标识，此处填写企业号corpid
						timestamp: data.timestamp, // 必填，生成签名的时间戳
						nonceStr: data.noceStr, // 必填，生成签名的随机串
						signature: data.signature,// 必填，签名，见附录1
						jsApiList: ["startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "pauseVoice", "stopVoice", "onVoicePlayEnd", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "translateVoice", "getNetworkType", "openLocation", "getLocation"],//必须要不调用小程序标签渲染不出来
						openTagList: ['wx-open-launch-weapp'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
					});
					// ready接口处理异步接口
					wx.ready(function(res){						
						// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
						// console.log("验证ready方法：",res)
					});
					// 签名失败报错验证
					wx.error(function(res){
						// console.log("签名验证不通过：" ,res)
						// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
					});					
                }).catch( err => {
					// alert("微信接口请求失败:" ,err)                    
                })                
			}
		}
	}
</script>

<style scoped>
	.mini-prog{padding:1px;}
</style>
