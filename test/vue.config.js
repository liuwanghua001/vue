 // 这是vue.config.js 配置 将AMap作为全局变量
 
module.exports = {

    publicPath: "./",
    chainWebpack: (config) => {1
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@components', resolve('src/components'))
            .set('@img', resolve('src/assets/imgs'))
    },
    configureWebpack: {
        externals: {
            'AMap': 'AMap'
        }
    },    
    devServer: {
        proxy: {
            // '/api': {
            //     target: 'http://ydcfxt.hbwmxx.com',
            //     ws: true,
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^api': ''
            //     }
            //   }
            '/api': {
				target: 'http://test.ourvend.com',
				pathRewrite: {
					'^/api': ''
				}
			}
        }
    }
} 

console.log("111111111111111")
