import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementLocale  from 'element-ui/lib/locale'
import store from '@/store'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import zhLang from './zh'
import enLang from './en'
Vue.use(VueI18n)

// 拼接element组件语言包
zhLang.el = zhLocale.el
enLang.el = enLocale.el

const i18n = new VueI18n({
    locale: store.state.user.language,
    messages: {
        'zh': zhLang,
        'en': enLang
    }
})

ElementLocale.i18n((key, value) => i18n.t(key, value)) // 实现element组件的多语言切换

export default i18n