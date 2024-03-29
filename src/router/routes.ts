import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: 
    [
      {
        path: '',
        component: () => import('src/pages/CommandsPage.vue'),
      },
      {
        path: '/channel/:id',
        name: 'Channel',
        component: () => import('src/pages/ChannelPage.vue')
      },
    ],
  },

  {
    path: '/login',
    component: () => import('pages/loginPage.vue'),
  },

  {
    path: '/register',
    component: () => import('pages/RegisterPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
