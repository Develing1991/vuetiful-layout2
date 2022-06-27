export const authRoutes = {
	path: '/auth',
	name: 'AuthRoot',
	component: () => import('@/layouts/auth/Index.vue'),
	children: [
		{
			path: 'signin',
			name: 'SignInView',
			meta: { appbarName: '로그인' },
			component: () => import('@/views/auth/SignInView.vue'),
		},

		{
			path: 'signup-terms',
			name: 'SignUpTermsView',
			meta: { appbarName: '이용약관' },
			component: () => import('@/views/auth/SignUpTermsView.vue'),
		},
		{
			path: 'signup-biz',
			name: 'SignUpBizChkView',
			meta: { appbarName: '사업자번호' },
			component: () => import('@/views/auth/SignUpBizChkView.vue'),
		},
		{
			path: 'signup',
			name: 'SignUpView',
			meta: { appbarName: '회원가입' },
			component: () => import('@/views/auth/SignUpView.vue'),
		},
		{
			path: 'find-id',
			name: 'FindIdView',
			meta: { appbarName: '아이디 찾기' },
			component: () => import('@/views/auth/private/FindIdView.vue'),
		},
		{
			path: 'find-pass',
			name: 'FindPassView',
			meta: { appbarName: '비밀번호 재설정' },
			component: () => import('@/views/auth/private/FindPassView.vue'),
		},
	],
};
