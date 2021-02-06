// 对共享数据进行过滤并计数操作
const getters = {
    doubleCity (state) {
        return state.city + ' ' + state.city
    }
}

export default getters