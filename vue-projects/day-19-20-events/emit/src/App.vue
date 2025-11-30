<template>
  <div class="container">
    <h1>Rate Our Service</h1>

    <RatingComponent :modelValue="rating" @rating-selected="rating = $event" />

    <p v-if="rating > 0" class="result">
      Your Rating: {{ rating }} out of 5 stars
    </p>
    <p v-else class="result">Click to rate!</p>

    <button v-if="rating > 0" @click="rating = 0" class="clear-btn">
      Clear Rating
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import RatingComponent from "./components/RatingComponent.vue";

const rating = ref(0);
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
  font-family: Arial, sans-serif;
  color: white;
}

h1 {
  /* color: #333; */
  margin-bottom: 30px;
}

.result {
  font-size: 1.2rem;
  margin-top: 20px;
  /* color: #555; */
}

.clear-btn {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.clear-btn:hover {
  background-color: #ff5252;
}
</style>