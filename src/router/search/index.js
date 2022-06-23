export const searchRoutes = {
  path: '/search',
  name: 'SearchRoot',
  component: () => import('@/layouts/search/Index.vue'),
  children: [
    {
      path: 'rcntView',
      name: 'SearchRcntView',
      meta: { appbarName: '최근 검색' },
      component: () => import('@/views/search/SearchRcntView.vue'),
    },
    {
      path: 'view',
      name: 'SearchView',
      meta: { appbarName: '검색 입력' },
      component: () => import('@/views/search/SearchView.vue'),
    },
  ],
};
