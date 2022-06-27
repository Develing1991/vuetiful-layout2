import Vue from 'vue';
import VueRouter from 'vue-router';
import { mainRoutes1, mainRoutes2 } from '@/router/main/index';
import { productRoutes } from '@/router/product/index';
import { wishRoutes } from '@/router/wish/index';
import { searchRoutes } from '@/router/search/index';
import { categoryRoutes } from '@/router/category/index';
import { memberRoutes } from '@/router/member/index';
import { authRoutes } from '@/router/auth/index';
import { sendRoutes } from '@/router/send/index';
import { sampleRoutes } from '@/router/sample/index';

Vue.use(VueRouter);

const routes = [
	mainRoutes1,
	mainRoutes2,
	searchRoutes,
	categoryRoutes,
	productRoutes,
	wishRoutes,
	memberRoutes,
	authRoutes,
	sendRoutes,
	sampleRoutes,
	{
		path: '/test',
		name: 'test',
		component: () => import('../views/AboutView.vue'),
		beforeEnter: (to, from, next) => {
			console.log(to);
			console.log(from);
			next();
		},
	},
	{
		path: '*',
		name: 'ErrorRoot',
		component: () => import('@/views/error/ErrorView.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	// scrollBehavior(to, from, savedPosition) {
	//   console.log(to);
	//   console.log(from);
	//   console.log(savedPosition);
	//   return { x: 100, y: 300 };
	// },
});

//글로벌 비포 가드
// router.beforeEach((to, from, next) => {
//   if(to.name === 'My메뉴'){
//     로그인페이지 이동
// 메타 데이터를 이용한 로그인 분기처리 https://v3.router.vuejs.org/guide/advanced/meta.html
//     next({ path: '/login' })
//   }else{
//     next()
//   }
//   console.log(to);
//   console.log(from);
// });

//글로벌 애프터 가드
// router.afterEach((to, from) => {
//   // ...
// })

//루트별가드
// const router = new VueRouter({
//   routes: [
//     {
//       path: '/foo',
//       component: Foo,
//       beforeEnter: (to, from, next) => {
//         // ...
//       }
//     }
//   ]
// })

// router.onError((error) => {
//   // if (/청크 로드 \d* 실패./i.test(error.message)) {
//   //   window.location.reload();
//   // }
//   console.log(error);
//   window.location.reload();
// });
export default router;
