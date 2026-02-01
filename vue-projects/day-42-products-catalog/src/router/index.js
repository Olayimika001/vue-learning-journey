import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

import ProductsList from '../views/ProductsList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/products'
    },
    {
      path: '/products',
      name: 'ProductsList',
      component: ProductsList
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { requiresGuest: true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  
  // Redirect logged-in users away from login page
  if (to.meta.requiresGuest && userStore.isLoggedIn) {
    next('/products')
  } else {
    next()
  }
})

export default router