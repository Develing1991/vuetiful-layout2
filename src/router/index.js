import Vue from 'vue';
import VueRouter from 'vue-router';
//import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MainRoot',
    component: () => import('@/layouts/main/Index.vue'),
    children: [
      {
        path: '/', //나중에 맨밑으로가게하기
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
        path: '/',
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
        path: '/',
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
        path: '/',
        name: 'ProductView',
        component: () =>
          import(
            /* webpackChunkName: "product" */ '@/views/product/ProductView.vue'
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
