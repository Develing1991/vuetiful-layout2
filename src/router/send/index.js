export const sendRoutes = {
	path: '/send',
	name: 'SendRoot',
	component: () => import('@/layouts/send/Index.vue'),
	children: [
		{
			path: 'view',
			name: 'SendBulkMsgView',
			meta: { appbarName: '메시지 보내기' },
			component: () => import('@/views/send/SendBulkMsgView.vue'),
		},
	],
};
