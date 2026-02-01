<!-- views/ShoppingCart.vue -->
<template>
  <div class="cart-page">
    <div class="container">
      <h1>Shopping Cart</h1>
      
      <div v-if="cartStore.items.length === 0" class="empty-cart">
        <p>Your cart is empty</p>
        <router-link to="/products" class="btn-shop">
          Continue Shopping
        </router-link>
      </div>
      
      <div v-else>
        <div class="cart-items">
          <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
            <img :src="item.image" :alt="item.name" class="item-image" />
            
            <div class="item-details">
              <h3>{{ item.name }}</h3>
              <p class="item-price">${{ item.price.toFixed(2) }}</p>
            </div>
            
            <div class="item-quantity">
              <button @click="cartStore.decreaseQuantity(item.id)" class="qty-btn">-</button>
              <span class="qty">{{ item.quantity }}</span>
              <button @click="cartStore.increaseQuantity(item.id)" class="qty-btn">+</button>
            </div>
            
            <div class="item-total">
              <p>${{ (item.price * item.quantity).toFixed(2) }}</p>
            </div>
            
            <button @click="cartStore.removeItem(item.id)" class="btn-remove">
              🗑️
            </button>
          </div>
        </div>
        
        <div class="cart-summary">
          <h2>Order Summary</h2>
          <div class="summary-row">
            <span>Subtotal:</span>
            <span>${{ cartStore.subtotal.toFixed(2) }}</span>
          </div>
          <div class="summary-row">
            <span>Tax (10%):</span>
            <span>${{ cartStore.tax.toFixed(2) }}</span>
          </div>
          <div class="summary-row total">
            <span>Total:</span>
            <span>${{ cartStore.total.toFixed(2) }}</span>
          </div>
          
          <button @click="handleCheckout" class="btn-checkout">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const userStore = useUserStore()
const router = useRouter()

const handleCheckout = () => {
  if (!userStore.isLoggedIn) {
    alert('Please login to checkout')
    router.push('/login')
    return
  }
  
  alert(`Order placed! Total: $${cartStore.total.toFixed(2)}`)
  cartStore.clearCart()
  router.push('/products')
}
</script>

<style scoped>
.cart-page {
  min-height: calc(100vh - 80px);
  background: #f5f5f5;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.empty-cart {
  text-align: center;
  background: white;
  padding: 4rem 2rem;
  border-radius: 8px;
}

.empty-cart p {
  color: #7f8c8d;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.btn-shop {
  display: inline-block;
  padding: 1rem 2rem;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.3s;
}

.btn-shop:hover {
  background: #2980b9;
}

.cart-items {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.cart-item {
  display: grid;
  grid-template-columns: 100px 1fr auto auto auto;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #ecf0f1;
}

.cart-item:last-child {
  border-bottom: none;
}

.item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.item-details h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.item-price {
  color: #27ae60;
  font-weight: bold;
  font-size: 1.1rem;
}

.item-quantity {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.qty-btn {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background 0.3s;
}

.qty-btn:hover {
  background: #ecf0f1;
}

.qty {
  font-weight: bold;
  min-width: 30px;
  text-align: center;
}

.item-total {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.2rem;
}

.btn-remove {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 1.2rem;
}

.btn-remove:hover {
  background: #c0392b;
}

.cart-summary {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  margin-left: auto;
}

.cart-summary h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #555;
}

.summary-row.total {
  border-top: 2px solid #ecf0f1;
  padding-top: 1rem;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
}

.btn-checkout {
  width: 100%;
  padding: 1rem;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background 0.3s;
}

.btn-checkout:hover {
  background: #229954;
}

@media (max-width: 768px) {
  .cart-item {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .item-image {
    margin: 0 auto;
  }
  
  .item-quantity {
    justify-content: center;
  }
}
</style>