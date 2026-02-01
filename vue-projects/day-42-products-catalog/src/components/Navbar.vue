<!-- components/Navbar.vue -->
<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="nav-brand">
        🛒 Vue Shop
      </router-link>
      
      <div class="nav-links">
        <router-link to="/products" class="nav-link">
          Products
        </router-link>
        
        <router-link v-if="!userStore.isLoggedIn" to="/login" class="nav-link">
          Login
        </router-link>
        
        <span v-else class="user-greeting">
          👋 {{ userStore.username }}
        </span>
        
        <router-link to="/cart" class="nav-link cart-link">
          🛒 Cart
          <span v-if="cartStore.totalItems > 0" class="cart-badge">
            {{ cartStore.totalItems }}
          </span>
        </router-link>
        
        <button v-if="userStore.isLoggedIn" @click="handleLogout" class="btn-logout">
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const userStore = useUserStore()
const router = useRouter()

const handleLogout = () => {
  userStore.logout()
  cartStore.clearCart()
  router.push('/login')
}
</script>

<style scoped>
.navbar {
  background: #2c3e50;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #3498db;
}

.user-greeting {
  color: #3498db;
  font-weight: 500;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -12px;
  background: #e74c3c;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
}

.btn-logout {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
}

.btn-logout:hover {
  background: #c0392b;
}
</style>