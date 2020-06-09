/* 路由守卫 */
import router from '@/router'
import store from '@/store'

const getLastTime = (data) => {
    if(data.children) {
        return getLastTime(data.children[0])
    } else {
        return data.guard_name
    }
}


router.beforeEach((to, from, next) => {
    // 路由发生变化修改页面title
    if (to.meta.title) {
        document.title = to.meta.title
    }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 判断登录状态
        if (!store.state.user.adminInfo) {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next()
    }
})