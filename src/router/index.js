import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MainRoot',
    component: () => import('@/layouts/main/Index.vue'),
    children: [
      {
        path: 'index.html', //나중에 맨밑으로가게하기
        name: 'MainView',
        component: () => import('@/views/main/MainView.vue'),
        ////* webpackChunkName: "main" */
      },
      {
        path: '', //나중에 맨밑으로가게하기
        name: 'MainView',
        component: () => import('@/views/main/MainView.vue'),
      },
    ],
  },
  {
    path: '/main',
    name: 'MainRoot',
    component: () => import('@/layouts/main/Index.vue'),
    children: [
      {
        path: 'view', //나중에 맨밑으로가게하기
        name: 'MainView',
        component: () => import('@/views/main/MainView.vue'),
      },
    ],
  },
  {
    path: '/search',
    name: 'SearchRoot',
    component: () => import('@/layouts/search/Index.vue'),
    children: [
      {
        path: 'rcntView',
        name: 'SearchRcntView',
        component: () => import('@/views/search/SearchRcntView.vue'),
      },
      {
        path: 'view',
        name: 'SearchView',
        component: () => import('@/views/search/SearchView.vue'),
      },
    ],
  },
  {
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
  },
  {
    path: '/product',
    name: 'ProductRoot',
    component: () => import('@/layouts/product/Index.vue'),
    children: [
      {
        path: 'list',
        name: 'ProductList',
        component: () => import('@/views/product/ProductList.vue'),
      },
      {
        path: 'detail/:id',
        name: 'ProductDetail',
        component: () => import('@/views/product/ProductDetail.vue'),
      },
      {
        path: 'view',
        name: 'ProductView',
        component: () => import('@/views/product/ProductView.vue'),
      },
    ],
  },
  {
    path: '/wish',
    name: 'WishRoot',
    component: () => import('@/layouts/wish/Index.vue'),
    children: [
      {
        path: 'view',
        name: 'WishView',
        meta: { appbarName: '찜 리스트' },
        component: () => import('@/views/wish/WishView.vue'),
      },
      // {
      //   path: 'list',
      //   name: 'WishList',
      //   meta: { appbarName: '찜 리스트' },
      //   component: () => import('@/views/wish/WishList.vue'),
      // },
    ],
  },
  {
    path: '/my',
    name: 'MyRoot',
    component: () => import('@/layouts/my/Index.vue'),
    children: [
      {
        path: 'view',
        name: 'MyMenu',
        meta: { appbarName: 'My메뉴' },
        component: () => import('@/views/my/MyMenuView.vue'),
      },
      {
        path: 'info',
        name: 'MyInfo',
        meta: { appbarName: '내 정보' },
        component: () => import('@/views/my/MyInfoView.vue'),
      },
    ],
  },
  {
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
        path: 'signup',
        name: 'SignUpView',
        meta: { appbarName: '회원가입' },
        component: () => import('@/views/auth/SignUpView.vue'),
      },
    ],
  },
  {
    path: '*',
    name: 'ErrorRoot',
    component: () => import('@/views/error/ErrorView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
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
