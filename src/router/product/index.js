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
      meta: { appbarName: '상품 리스트' },
      component: () => import('@/views/product/ProductList.vue'),
    },
    {
      path: 'detail/:id',
      name: 'ProductDetail',
      meta: { appbarName: '상품 상세정보' },
      component: () => import('@/views/product/ProductDetail.vue'),
    },
    {
      path: 'view',
      name: 'ProductView',
      meta: { appbarName: '상품 뷰' },
      component: () => import('@/views/product/ProductView.vue'),
    },
  ],
};
