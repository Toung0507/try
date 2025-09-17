import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/Test',
      name: 'test',
      component: () => import('../views/TestOne.vue'),
    },
    {
      path: '/TodoView',
      name: 'TodoView',
      component: () => import('../views/TodoView.vue'),
    },
    {
      path: '/SeconView',
      name: 'SeconView',
      component: () => import('../views/SeconView.vue'),
    },
    {
      path: '/ReviewView',
      name: 'ReviewView',
      component: () => import('../views/ReviewView.vue'),
    },
    {
      path: '/SpView',
      name: 'SpView',
      component: () => import('../views/SpView.vue'),
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/FifthView',
      name: 'FifthView',
      component: () => import('../views/FifthView.vue'),
    },
    {
      path: '/WeekThree',
      name: 'WeekThree',
      component: () => import('../views/WeekThree.vue'),
    },
    {
      path: '/ToDoListView',
      name: 'ToDoListView',
      component: () => import('../views/ToDoListView.vue'),
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
    },
    // 未定義路由跳轉
    { path: '/:pathMatch(.*)*', redirect: '/' },

  ],
})

router.onError((error, to) => {
  if (
    error.message.includes('Failed to fetch dynamically imported module') ||
    error.message.includes('Importing a module script failed')
  ) {
    if (!to?.fullPath) {
      window.location.reload();
    } else {
      window.location = to.fullPath;
    }
  }
});

console.log('BASE_URL:', import.meta.env.BASE_URL)

export default router
