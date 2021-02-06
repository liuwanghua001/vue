// 里面存放所有的types，用来action和mutations的匹配
import * as TYPES from './types'
// 解决异步改变共享数据（异步）
const actions = {
    // 直接调用mutations中的方法改变city
    changeCity(ctx, city) {
        ctx.commit('changeCity2', city)
    },
    ADD1000(vuex) {
        vuex.commit(TYPES.SET_COUMT_ADD, 1000)
    },
    REDUCE1000(vuex) {
        vuex.commit(TYPES.SET_COUMT_REDUCE, 1000)
    }
}
export default actions