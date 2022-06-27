export const categoryRoutes = {
	path: '/category',
	name: 'CategoryRoot',
	component: () => import('@/layouts/category/Index.vue'),
	children: [
		{
			path: 'view',
			name: 'CategoryView',
			meta: { appbarName: '카테고리' },
			component: () => import('@/views/category/CategoryView.vue'),
		},
	],
};
