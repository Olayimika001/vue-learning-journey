<!-- components/ProductCard.vue -->
<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
      <span v-if="cartStore.isInCart(product.id)" class="in-cart-badge">
        ✓ In Cart
      </span>
    </div>
    
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p class="category">{{ product.category }}</p>
      <p class="price">${{ product.price.toFixed(2) }}</p>
      
      <div class="actions">
        <router-link 
          :to="{ name: 'ProductDetail', params: { id: product.id } }" 
          class="btn-view"
        >
          View Details
        </router-link>
        
        <button 
          @click="handleAddToCart"
          class="btn-add"
          :disabled="cartStore.isInCart(product.id)"
        >
          {{ cartStore.isInCart(product.id) ? '✓ Added' : '+ Cart' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const handleAddToCart = () => {
  cartStore.addItem(props.product)
}
</script>

<style scoped>
.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: #f5f5f5;
  position: relative;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.in-cart-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #27ae60;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
}

.product-info {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-info h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 1.1rem;
}

.category {
  color: #7f8c8d;
  font-size: 0.9rem;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
}

.price {
  color: #27ae60;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5rem 0 1rem 0;
}

.actions {
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
}

.btn-view {
  flex: 1;
  display: inline-block;
  padding: 0.75rem;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;
  font-weight: 500;
  transition: background 0.3s;
}

.btn-view:hover {
  background: #2980b9;
}

.btn-add {
  padding: 0.75rem 1rem;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-add:hover:not(:disabled) {
  background: #229954;
}

.btn-add:disabled {
  background: #95a5a6;
  cursor: not-allowed;
}
</style>