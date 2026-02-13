<script setup>
import { useMovieSearch } from '../composables/useMovieSearch'
import { useFavoritesStore } from '@/stores/favorites'

const { movies, loading, error, hasResults, hasNoResults } = useMovieSearch()
const favStore = useFavoritesStore()

function toggle(movie) {
  favStore.toggleFavorite({
    imdbID: movie.imdbID,
    Title: movie.Title,
    Year: movie.Year,
    Poster: movie.Poster
  })
}
</script>

<template>
  <div class="movie-container">
    <p v-if="error" class="error">{{ error }}</p>

    <div v-if="loading">Loading...</div>
    <div v-else-if="hasNoResults">No movies found</div>

    <TransitionGroup name="movie" tag="ul" class="movie-list">
      <li v-for="movie in movies" :key="movie.imdbID" class="movie-card">
        <router-link :to="{ name: 'movie', params: { id: movie.imdbID } }">
          <img :src="movie.Poster" :alt="movie.Title" />
        </router-link>
        <h3>{{ movie.Title }}</h3>
        <p>{{ movie.Year }}</p>
        <div class="actions">
          <button @click="toggle(movie)">
            {{ favStore.isFavorite(movie.imdbID) ? 'Unfavorite' : 'Favorite' }}
          </button>
          <router-link :to="{ name: 'movie', params: { id: movie.imdbID } }">
            Details
          </router-link>
        </div>
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.movie-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.movie-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
}

.movie-card img {
  width: 100%;
  height: auto;
}

.movie-card h3 {
  margin: 10px 0 5px;
}

.movie-card p {
  margin: 0;
  color: #666;
}

.error {
  color: red;
  font-weight: bold;
}

.actions { 
  display: flex; 
  gap: 8px; 
  margin-top: 8px;
}

/* Transition styles - these are perfect! */
.movie-enter-active,
.movie-leave-active {
  transition: all 0.5s ease;
}

.movie-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.movie-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.movie-move {
  transition: transform 0.5s ease;
}
</style>
