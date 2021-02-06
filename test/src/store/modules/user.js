const state = {
    user: {},
    login: false
}

const mutations = {
    userInfo: (statte, user) => {
        state.user = user
    },
    userLogin: (state, isLogin) => {
        state.login = isLogin
    }
}

export default {
    namespaced: true,
    state,
    mutations
}