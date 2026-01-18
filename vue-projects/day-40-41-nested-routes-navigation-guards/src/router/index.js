// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { 
        requiresGuest: true  // Only accessible if NOT logged in
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { 
        requiresAuth: true  // Requires authentication
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: { 
        requiresAuth: true
      }
    }
  ]
})

// Global navigation guard
router.beforeEach((to, from, next) => {
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  
  // If route requires authentication
  if (to.meta.requiresAuth && !isLoggedIn) {
    // Redirect to login
    next({ name: 'Login' })
  } 
  // If route is for guests only (like login page) and user is logged in
  else if (to.meta.requiresGuest && isLoggedIn) {
    // Redirect to dashboard
    next({ name: 'Dashboard' })
  } 
  // Allow navigation
  else {
    next()
  }
})

export default router