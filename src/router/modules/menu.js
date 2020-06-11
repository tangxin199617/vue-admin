import Layout from '@/layout'

const settingRouter = [
    {
        path: '/',
        name: 'root', 
        component: Layout,
        redirect: '/home',
		userName:'根目录',
        meta: {
            title: '根目录',
            requiresAuth: true,
        },
        children: [
            {
                path: '/home',
                name: 'root-home',
                component: () => import('@/views/home'),
				userName:'首页',
                meta: {
                    title: '首页',
                    requiresAuth: true,
                    icon: '',
                },
            }
        ]
    },
]

export default settingRouter