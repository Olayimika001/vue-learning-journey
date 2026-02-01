<!-- views/ProductDetail.vue -->
<template>
  <div class="product-detail-page">
    <div class="container">
      <router-link to="/products" class="back-link">
        ← Back to Products
      </router-link>
      
      <div v-if="product" class="product-detail">
        <div class="product-image-large">
          <img :src="product.image" :alt="product.name" />
        </div>
        
        <div class="product-content">
          <h1>{{ product.name }}</h1>
          
          <p class="category">
            Category: <span>{{ product.category }}</span>
          </p>
          
          <p class="price">${{ product.price.toFixed(2) }}</p>
          
          <p class="description">{{ product.description }}</p>
          
          <div class="specs">
            <h3>Specifications:</h3>
            <ul>
              <li v-for="spec in product.specs" :key="spec">
                ✓ {{ spec }}
              </li>
            </ul>
          </div>
          
          <div v-if="cartStore.isInCart(product.id)" class="already-in-cart">
            <p>✓ This item is in your cart ({{ cartStore.getItemQuantity(product.id) }}x)</p>
            <router-link to="/cart" class="btn-view-cart">
              View Cart
            </router-link>
          </div>
          
          <div v-else class="actions">
            <button @click="handleAddToCart" class="btn-add-cart">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
      
      <div v-else class="not-found">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <router-link to="/products" class="btn-back">
          Browse Products
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'

const route = useRoute()
const productsStore = useProductsStore()
const cartStore = useCartStore()

const product = computed(() => {
  return productsStore.getProductById(route.params.id)
})

const handleAddToCart = () => {
  cartStore.addItem(product.value)
}
</script>

<style scoped>
.product-detail-page {
  min-height: calc(100vh - 80px);
  background: #f5f5f5;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.back-link {
  display: inline-block;
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 2rem;
}

.product-detail {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 2rem;
}

.product-image-large {
  width: 100%;
  height: 500px;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
}

.product-image-large img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-content h1 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.category {
  color: #7f8c8d;
  margin-bottom: 1rem;
}

.category span {
  color: #3498db;
  text-transform: capitalize;
  font-weight: 500;
}

.price {
  font-size: 2.5rem;
  color: #27ae60;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.description {
  color: #555;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.specs {
  margin-bottom: 2rem;
}

.specs h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.specs ul {
  list-style: none;
  padding: 0;
}

.specs li {
  color: #555;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
}

.already-in-cart {
  background: #d5f4e6;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.already-in-cart p {
  color: #27ae60;
  font-weight: bold;
  margin-bottom: 1rem;
}

.btn-view-cart {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #27ae60;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background 0.3s;
}

.btn-view-cart:hover {
  background: #229954;
}

.btn-add-cart {
  width: 100%;
  padding: 1rem 2rem;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-add-cart:hover {
  background: #229954;
}

.not-found {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 8px;
}

@media (max-width: 968px) {
  .product-detail {
    grid-template-columns: 1fr;
  }
}
</style>