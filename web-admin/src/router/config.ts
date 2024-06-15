import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/index',
    component: () => import('@/views/home/Home.vue'),
  },
  {
    path: '/center',
    component: () => import('@/views/center/Center.vue'),
  },
  {
    path: '/user-manage/adduser',
    component: () => import('@/views/user-manage/UserAdd.vue'),
    meta: {
      requireAdmin: true
    }
  },
  {
    path: '/user-manage/userlist',
    component: () => import('@/views/user-manage/UserList.vue'),
    meta: {
      requireAdmin: true
    }
  },

  {
    path: '/news-manage/addnews',
    component: () => import('@/views/news-manage/NewsAdd.vue'),
  },
  {
    path: '/news-manage/newslist',
    component: () => import('@/views/news-manage/NewsList.vue'),
  },

  {
    path: '/product-manage/addproduct',
    component: () => import('@/views/product-manage/ProductAdd.vue'),
  },
  {
    path: '/product-manage/productlist',
    component: () => import('@/views/product-manage/ProductList.vue'),
  },
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Notfound',
    component: () => import('@/views/404.vue'),
  },
];

export default routes;
