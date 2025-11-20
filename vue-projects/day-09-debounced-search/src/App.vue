<template>
  <div class="search-container">
    <h1>Debounced Search</h1>
    <input
      v-model="searchInput"
      type="text"
      placeholder="Type to search..."
    />
    <h2 class="final">Final search value: <strong>{{ finalSearch }}</strong></h2>
    <p v-if="loading">Searching...</p>
    <div v-if="results.length" class="results">
      <h3>Results</h3>
      <ul>
        <li v-for="(result, index) in results" :key="index">
          {{ result }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const searchInput = ref('')
const finalSearch = ref('')
const loading = ref(false)
const results = ref([])

let timeoutId = null
const debounceTime = 1500

watch(searchInput, (newVal) => {
  if (timeoutId) clearTimeout(timeoutId)

  loading.value = true
  results.value = []

  timeoutId = setTimeout(() => {
    finalSearch.value = newVal

    setTimeout(() => {
      loading.value = false
      results.value = newVal
        ? [
            `You searched for "${newVal}"`,
            `Result related to "${newVal}"`,
          ]
        : []
    }, 1000)

  }, debounceTime)
})
</script>

<style scoped>
.search-container {
  background-color: white;
  color: black;
  border-radius: 20px;
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
}

h1 {
  color: #42b983;
  text-align: center;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px 10px;
  font-size: 15px;
  margin-bottom: 10px;
}

.results {
  margin-top: 15px;
  background: #f5f5f5;
  padding: 10px;
  border-radius: 8px;
}
</style>
