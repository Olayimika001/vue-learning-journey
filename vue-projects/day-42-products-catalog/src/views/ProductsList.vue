<!-- views/ProductsList.vue -->
<template>
  <div class="products-page">
    <div class="container">
      <div class="page-header">
        <h1>{{ pageTitle }}</h1>
        <p class="subtitle">{{ productsStore.filteredProducts.length }} products available</p>
      </div>
      
      <div class="categories-filter">
        <button 
          v-for="cat in productsStore.categories" 
          :key="cat.name"
          @click="productsStore.setCategory(cat.name)"
          :class="['filter-btn', { active: productsStore.selectedCategory === cat.name }]"
        >
          {{ cat.icon }} {{ cat.label }}
        </button>
      </div>
      
      <div v-if="productsStore.filteredProducts.length === 0" class="no-products">
        <p>No products found in this category.</p>
      </div>
      
      <div v-else class="products-grid">
        <ProductCard 
          v-for="product in productsStore.filteredProducts" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { useProductsStore } from '@/stores/products'

const productsStore = useProductsStore()

const pageTitle = computed(() => {
  const cat = productsStore.categories.find(c => c.name === productsStore.selectedCategory)
  return cat ? `${cat.icon} ${cat.label}` : 'All Products'
})
</script>

<style scoped>
.products-page {
  min-height: calc(100vh - 80px);
  background: #f5f5f5;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #7f8c8d;
  font-size: 1.1rem;
}

.categories-filter {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  background: white;
  border: 2px solid #ecf0f1;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  color: #2c3e50;
  transition: all 0.3s;
}

.filter-btn:hover {
  border-color: #3498db;
  color: #3498db;
}

.filter-btn.active {
  background: #3498db;
  color: white;
  border-color: #3498db;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.no-products {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>