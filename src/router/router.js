import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import AuthView from '../views/AuthView.vue'
import HomeView from '../components/Dashboard/HomeView.vue'
import AboutView from '../components/Dashboard/AboutView.vue'
import ContactView from '../components/Dashboard/ContactView.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    redirect: '/dashboard/home'
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    meta: { requiresAuth: false }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView
      },
      {
        path: 'about',
        name: 'about',
        component: AboutView
      },
      {
        path: 'contact',
        name: 'contact',
        component: ContactView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('initializeAuth')

  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth')
  } else if (to.path === '/auth' && store.getters.isAuthenticated) {
    next('/dashboard/home')
  } else {
    next()
  }
})

export default router






















/*
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AuthView.vue'),
    },
  ],
})

export default router
*/
