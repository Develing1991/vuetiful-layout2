export const productRoutes = {
  path: '/product',
  name: 'ProductRoot',
  component: () => import('@/layouts/product/Index.vue'),
  // beforeEnter: (to, from, next) => {
  //   console.log(to);
  //   console.log(from);
  //   next();
  // },
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
};
