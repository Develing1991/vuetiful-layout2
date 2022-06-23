export const mainRoutes1 = {
  path: '/',
  name: 'MainRoot',
  component: () => import('@/layouts/main/Index.vue'),
  // beforeEnter: (to, from, next) => {
  //   console.log(to);
  //   console.log(from);
  //   next();
  // },
  children: [
    {
      path: 'index.html', //나중에 맨밑으로가게하기
      name: 'MainView',
      meta: { appbarName: '메인 페이지' },
      component: () => import('@/views/main/MainView.vue'),
    },
    {
      path: '', //나중에 맨밑으로가게하기
      name: 'MainView',
      meta: { appbarName: '메인 페이지' },
      component: () => import('@/views/main/MainView.vue'),
    },
  ],
};
export const mainRoutes2 = {
  path: '/main',
  name: 'MainRoot',
  component: () => import('@/layouts/main/Index.vue'),
  children: [
    {
      path: 'view', //나중에 맨밑으로가게하기
      name: 'MainView',
      meta: { appbarName: '메인 페이지' },
      component: () => import('@/views/main/MainView.vue'),
    },
  ],
};
