<template>
  <div class="search-bar">
    <input @keyup.enter="search" type="text" v-model="movieTitle" placeholder="Search for a movie..." />
    <button @click="search" :disabled="moviesStore.loading">{{ moviesStore.loading ? 'Searching...' : 'Search' }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMoviesStore } from '@/stores/movies'

const movieTitle = ref('')
const moviesStore = useMoviesStore()

function search() {
  if (movieTitle.value.trim()) {
    moviesStore.searchMovies(movieTitle.value)
  }
}
</script>

<style scoped>
input {
  padding: 10px;
  font-size: 16px;
  width: 300px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
}


</style>