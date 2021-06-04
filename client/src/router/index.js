import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
// const All = ['ADMIN', 'ACCOUNT']

Vue.use(VueRouter)

const routes = [
  {
    path: '/page-not-found',
    name: 'PageNotFound',
    component: () => import('@/pages/404NotFound.vue')
  },
  {
    path: '/',
    redirect: '/dashboard',
    name: 'home',
    component: () => import('@/layouts/LayoutDashboard.vue'),
    children: [
      { path: 'dashboard', component: () => import('@/layouts/Index.vue') },
      { path: 'users', component: () => import('@/pages/User/Index.vue') },
      { path: 'create', component: () => import('@/pages/User/Create.vue') },
      { path: 'product', component: () => import('@/pages/Product/Index.vue') },

    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login/Login.vue'),

  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/About.vue'),

  },

  { path: "/*", redirect: "/page-not-found" },

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let routerAuthCheck = store.getters.isAuthenticated
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (routerAuthCheck) {
      next();
    }
    else {
      router.replace('/login');
    }
  }
  else {
    next();
  }
})


export default router
