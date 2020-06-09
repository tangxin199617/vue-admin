//登录，注册，国际化信息

const getAdminInfo = JSON.parse(sessionStorage.getItem('adminInfo'))
const getLanguage = JSON.parse(sessionStorage.getItem('language'))
const state = {
    age:'11',
    adminInfo: getAdminInfo ? getAdminInfo : '',
    language: getLanguage ? getLanguage : 'zh'
}

const mutations = {
    setAdminInfo(state, data) {
        sessionStorage.setItem('adminInfo', JSON.stringify(data))
        state.adminInfo = data
    },
    changeLanguage(state, data) {
        sessionStorage.setItem('language', JSON.stringify(data))
        state.language = data
    }
}
  
export default {
    state,
    mutations
}