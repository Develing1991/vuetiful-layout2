export const memberRoutes = {
  path: '/my',
  name: 'MyRoot',
  component: () => import('@/layouts/member/Index.vue'),
  children: [
    {
      path: 'view',
      name: 'MyMenu',
      meta: { appbarName: 'My 메뉴' },
      component: () => import('@/views/my/MyMenuView.vue'),
    },
    {
      path: 'info',
      name: 'MyInfo',
      meta: { appbarName: '내 정보' },
      component: () => import('@/views/my/MyInfoView.vue'),
    },
  ],
};
