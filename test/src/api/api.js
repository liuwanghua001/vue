import login from './login'
import home from './home'
import detail from './detail'

const apiList = {
    ...login,
    ...home,
    ...detail
}

const install = (Vue) => {
    if(install.installed) return
    install.installed = true
    
    // 每一个组件就可以通过this.$api.xxx(data) 去发送请求
    Object.defineProperties(Vue.prototype, {
        $api: {
            get() {
                return apiList
            }
        }
    })
}

export default {
    install
}