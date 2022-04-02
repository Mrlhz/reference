const state = {
  msg: '2022-03-24 23:55:42',
  language: '',
}
const mutations = {
  set_language: (state, language) => {
    state.language = language
  },
}
const actions = {
  getLanguage({ commit }, language = 'zh') {
    console.log(arguments)
    commit('set_language', language)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
