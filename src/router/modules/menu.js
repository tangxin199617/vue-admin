import Layout from '@/layout'

const settingRouter = [
    {
        path: '/',
        name: 'root', 
        component: Layout,
        // redirect: '/home',
        meta: {
            title: '根目录',
            requiresAuth: true,
        },
        children: [
            // {
            //     path: '/home',
            //     name: 'home',
            //     component: () => import('@/views/home'),
            //     meta: {
            //         title: '首页',
            //         requiresAuth: true,
            //         icon: '',
            //     },
            //     hidden: true
            // }
        ]
    },
]

export default settingRouter