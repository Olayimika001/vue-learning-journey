<template>
  <div class="search-bar">
    <input 
      @keyup.enter="handleSearch" 
      type="text" 
      v-model="movieTitle" 
      placeholder="Search for a movie..." 
    />
    <button 
      @click="handleSearch" 
      :disabled="loading"
    >
      {{ loading ? 'Searching...' : 'Search' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMovieSearch } from '../composables/useMovieSearch'

const movieTitle = ref('')
const { search, loading } = useMovieSearch()

function handleSearch() {
  if (movieTitle.value.trim()) {
    search(movieTitle.value)
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

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>