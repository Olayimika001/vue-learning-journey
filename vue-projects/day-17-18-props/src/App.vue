<template>
  <div class="container">
    <ProductCard
      name="Laptop"
      :price="1500"
      :rating="4.5"
      :image="laptopImg"
    />

    <ProductCard
      name="Phone"
      :price="800"
      :rating="4.8"
      :image="phoneImg"
    />

    <ProductCard
      name="Headphones"
      :price="200"
      :rating="4.2"
      :image="headphoneImg"
    />
  </div>
</template>

<script setup>
import ProductCard from './components/ProductCard.vue'

import laptopImg from './assets/laptop.jpeg'
import phoneImg from './assets/phone.jpeg'
import headphoneImg from './assets/headphone.jpeg'
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>