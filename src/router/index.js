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
        component: () => import('@/views/wish/WishView.vue'),
      },
      {
        path: 'list',
        name: 'WishList',
        component: () => import('@/views/wish/WishList.vue'),
      },
    ],
  },
  {
    path: '/my',
    name: 'MyRoot',
    component: () => import('@/layouts/my/Index.vue'),
    children: [
      {
        path: 'view',
        name: 'My메뉴',
        component: () => import('@/views/my/MyMenuView.vue'),
      },
      {
        path: 'info',
        name: '내 정보',
        component: () => import('@/views/my/MyInfoView.vue'),
      },
      // {
      //   path: 'info',
      //   name: { title: '내 정보', direction: 'ss' },
      //   component: () =>
      //     import('@/views/my/MyInfoView.vue'),
      // },
    ],
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
});
router.onError((error) => {
  // if (/청크 로드 \d* 실패./i.test(error.message)) {
  //   window.location.reload();
  // }
  console.log(error);
  window.location.reload();
});
export default router;
