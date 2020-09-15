import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import LostPassword from '../views/auth/LostPassword'
import Reservations from '../views/auth/Reservations'
import Dashboard from '../views/dashboard/dashboard'
import { auth, db } from 'firebase'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        autenticado: true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/reservations',
    name: 'reservations',
    component: Reservations
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/lost-password',
    name: 'lost-password',
    component: LostPassword
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    let user = auth.currentUser


    if (to.matched.some(record => record.meta.autenticado)) {
        if (!user) {
            next({ name: 'login' })
        }
    } else {
        next()
    }
})
export default router
