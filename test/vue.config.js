 // 这是vue.config.js 配置 将AMap作为全局变量
 
module.exports = {
 
    publicPath: "./",
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@components', resolve('src/components'))
            .set('@img', resolve('src/assets/imgs'))
    },
    configureWebpack: {
        externals: {
            'AMap': 'AMap'
        }
    }
}