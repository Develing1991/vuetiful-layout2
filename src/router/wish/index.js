export const wishRoutes = {
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
  ],
};
