const loginRouter = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index'),
        meta: {
            title: '登录',
        },
        hidden: true,
    },
    {
        path: '/404',
        component: () => import('@/views/404/index'),
        hidden: true
    }
]

export default loginRouter