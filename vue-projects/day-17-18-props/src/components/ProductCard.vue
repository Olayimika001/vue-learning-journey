<template>
  <div class="card">
    <img :src="image" :alt="name" class="product-image" />
    <h3>{{ name }}</h3>
    <p><b>Price:</b> ${{ price.toFixed(2) }}</p>
    <p><b>Rating:</b> {{ rating }} / 5</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  /* padding: 15px; */
  margin: 10px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: black;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
}

p{
    margin: 0;
}
</style>