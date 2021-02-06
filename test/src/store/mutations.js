import * as TYPES from './types'
// 注册改变数据状态（同步）
const mutations = {
    changeCity2(state, city) {
        state.city = city
    },
    [TYPES.SET_COUMT](state, v) {
        state.count = v
    },
    [TYPES.SET_COUMT_ADD](state, v) {
        if(v) {
            state.count += v
        } else {
            state.count ++
        }
    },
    [TYPES.SET_COUMT_REDUCE](state, v) {
        if(v) {
            state.count -= v
        } else {
            state.count --
        }
    }
}
export default mutations