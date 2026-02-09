<template>
  <div class="details">
    <button @click="$router.back()">Back</button>

    <div v-if="loading">Loading...</div>
    <p v-if="error" class="error">{{ error }}</p>

    <div v-if="movie && !loading" class="content">
      <img :src="movie.Poster" :alt="movie.Title" />
      <div class="info">
        <h2>{{ movie.Title }} ({{ movie.Year }})</h2>
        <p>{{ movie.Genre }}</p>
        <p>{{ movie.Plot }}</p>
        <p><strong>Actors:</strong> {{ movie.Actors }}</p>
        <button @click="toggleFav">{{ isFav ? 'Remove Favorite' : 'Add to Favorites' }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useFavoritesStore } from '@/stores/favorites'

const props = defineProps({ id: String })
const movie = ref(null)
const loading = ref(false)
const error = ref(null)

const favStore = useFavoritesStore()

const isFav = computed(() => (movie.value ? favStore.isFavorite(movie.value.imdbID) : false))

async function fetchDetails() {
  loading.value = true
  error.value = null
  try {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=28d9533d&i=${props.id}&plot=full`)
    if (res.data.Response === 'False') {
      error.value = res.data.Error
    } else {
      movie.value = res.data
    }
  } catch (err) {
    error.value = 'Failed to load movie details.'
  } finally {
    loading.value = false
  }
}

function toggleFav() {
  if (movie.value) favStore.toggleFavorite({
    imdbID: movie.value.imdbID,
    Title: movie.value.Title,
    Year: movie.value.Year,
    Poster: movie.value.Poster
  })
}

onMounted(() => {
  fetchDetails()
})
</script>

<style scoped>
.details{ padding:20px }
.content{ display:flex; gap:20px }
.content img{ width:300px }
.error{ color:red }
</style>
