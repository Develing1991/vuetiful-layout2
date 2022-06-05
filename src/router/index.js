import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/main',
    name: 'MainRoot',
    component: () => import('@/layouts/main/Index.vue'),
    children: [
      {
        path: 'view', //나중에 맨밑으로가게하기
        name: 'MainView',
        component: () =>
          import(/* webpackChunkName: "main" */ '@/views/main/MainView.vue'),
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
        component: () =>
          import(
            /* webpackChunkName: "search" */ '@/views/search/SearchRcntView.vue'
          ),
      },
      {
        path: 'view',
        name: 'SearchView',
        component: () =>
          import(
            /* webpackChunkName: "search" */ '@/views/search/SearchView.vue'
          ),
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
        component: () =>
          import(
            /* webpackChunkName: "category" */ '@/views/category/CategoryView.vue'
          ),
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
        component: () =>
          import(
            /* webpackChunkName: "product" */ '@/views/product/ProductList.vue'
          ),
      },
      {
        path: 'detail/:id',
        name: 'ProductDetail',
        component: () =>
          import(
            /* webpackChunkName: "product" */ '@/views/product/ProductDetail.vue'
          ),
      },
      {
        path: 'view',
        name: 'ProductView',
        component: () =>
          import(
            /* webpackChunkName: "product" */ '@/views/product/ProductView.vue'
          ),
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
        component: () =>
          import(/* webpackChunkName: "wish" */ '@/views/wish/WishView.vue'),
      },
      {
        path: 'list',
        name: 'WishList',
        component: () =>
          import(/* webpackChunkName: "wish" */ '@/views/wish/WishList.vue'),
      },
    ],
  },
  {
    path: '/myInfo',
    name: 'MyInfoRoot',
    component: () => import('@/layouts/myInfo/Index.vue'),
    children: [
      {
        path: 'view',
        name: 'MyInfoView',
        component: () =>
          import(
            /* webpackChunkName: "myInfo" */ '@/views/myInfo/MyInfoView.vue'
          ),
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
