export const sampleRoutes = {
  path: '/sample',
  name: 'SampleUIExample',
  component: () => import('@/layouts/sample/Index.vue'),
  children: [
    {
      path: 'list',
      name: 'SampleList',
      meta: { appbarName: '샘플목록' },
      component: () => import('@/views/sample/SampleList.vue'),
    },
    {
      path: 'button',
      name: 'SampleButtonView',
      // meta: { appbarName: '샘플버튼' },
      component: () => import('@/views/sample/ButtonSample.vue'),
    },
    {
      path: 'text',
      name: 'SampleTextView',
      // meta: { appbarName: '샘플텍스트' },
      component: () => import('@/views/sample/TextFieldSample.vue'),
    },
  ],
};

// {
//   path: '/sample',
//   name: 'SampleUIExample',
//   component: () => import('@/utils/SampleList.vue'),
// },
