<template>
  <div class="cart-container">
    <h1>Shopping Cart</h1>
    
    <div v-for="item in items" :key="item.id" class="item">
      <span>{{ item.name }} - ${{ item.price }}</span>
      <span>Qty: {{ item.quantity }}</span>
    </div>

    <div class="summary">
      <p>Subtotal: ${{ subtotal }}</p>
      <p>Tax (10%): ${{ tax }}</p>
      <p class="total">Total: ${{ total }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const items = ref([
  { id: 1, name: 'Laptop', price: 1000, quantity: 1 },
  { id: 2, name: 'Mouse', price: 25, quantity: 3 },
  { id: 3, name: 'Keyboard', price: 75, quantity: 2 }
])

const subtotal = computed(() => {
  return items.value.reduce((sum, item) => 
    sum + (item.price * item.quantity), 0
  ).toFixed(2)
})

const tax = computed(() => {
  return (subtotal.value * 0.10).toFixed(2)
})

const total = computed(() => {
  return (parseFloat(subtotal.value) + parseFloat(tax.value)).toFixed(2)
})
</script>

<style scoped>
.cart-container {
  max-width: 800px;
  background-color: white;
  color: black;
  margin: 50px auto;
  padding: 40px;
  border-radius: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #42b983;
}

.item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.summary {
  margin-top: 20px;
  padding: 15px;
  background: #f5f5f5;
  color: #42b983;
  border-radius: 5px;
}

.total {
  font-size: 1.2em;
  font-weight: bold;
}
</style>