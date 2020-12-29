import Layout from '@/layout'

const plugunitRouter = [
	{
		path: '/plugunit',
		name: 'plugunit',
		component: Layout,
		redirect: '/plugunit/email',
		userName: '常用插件',
		meta: {
			title: '常用插件'
		},
		children: [{
			path: '/plugunit/echart',
			name: 'plugunit-echart',
			component: () => import('@/views/plugunit/echart'),
			userName: 'echart图表',
			meta: {
				title: 'echart图表',
				requiresAuth: true,
				icon: ''
			}
		},{
			path: '/plugunit/shakeThrot',
			name: 'plugunit-shakeThrot',
			component: () => import('@/views/plugunit/shakeThrot'),
			userName: '防抖节流',
			meta: {
				title: '防抖节流',
				requiresAuth: true,
				icon: ''
			}
		}]
	}
]

export default plugunitRouter
