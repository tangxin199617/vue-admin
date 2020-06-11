import Layout from '@/layout'

const settingRouter = [
    {
        path: '/',
        name: 'root', 
        component: Layout,
        redirect: '/home',
		title:'根目录',
        meta: {
            title: '根目录',
            requiresAuth: true,
        },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home'),
				title:'首页',
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