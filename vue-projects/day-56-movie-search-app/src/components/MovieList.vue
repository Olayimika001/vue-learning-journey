<template>
  <div class="movie-list">
    <p v-if="moviesStore.error" class="error">{{ moviesStore.error }}</p>

    <div v-if="moviesStore.loading" class="skeletons">
      <MovieSkeleton v-for="n in 6" :key="n" />
    </div>

    <ul v-if="!moviesStore.loading && moviesStore.movies.length">
      <li v-for="movie in moviesStore.movies" :key="movie.imdbID">
        <router-link :to="{ name: 'movie', params: { id: movie.imdbID } }">
          <img :src="movie.Poster" :alt="movie.Title" />
        </router-link>
        <h3>{{ movie.Title }}</h3>
        <p>{{ movie.Year }}</p>
        <div class="actions">
          <button @click="toggle(movie)">
            {{ favStore.isFavorite(movie.imdbID) ? 'Unfavorite' : 'Favorite' }}
          </button>
          <router-link :to="{ name: 'movie', params: { id: movie.imdbID } }">Details</router-link>
        </div>
      </li>
    </ul>

    <p v-if="!moviesStore.loading && !moviesStore.movies.length && !moviesStore.error">No results found.</p>
  </div>
</template>

<script setup>
import { useMoviesStore } from '@/stores/movies'
import { useFavoritesStore } from '@/stores/favorites'
import MovieSkeleton from './MovieSkeleton.vue'

const moviesStore = useMoviesStore()
const favStore = useFavoritesStore()

function toggle(movie) {
  favStore.toggleFavorite({ imdbID: movie.imdbID, Title: movie.Title, Year: movie.Year, Poster: movie.Poster })
}
</script>

<style scoped>
.movie-list{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.movie-list ul{
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.movie-list li{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
}

.movie-list img{
    width: 100%;
    height: auto;
}

.movie-list h3{
    margin: 10px 0 5px;
}

.movie-list p{
    margin: 0;
    color: #666;
}

.error{
    color: red;
    font-weight: bold;
}
.actions{ display:flex; gap:8px; margin-top:8px }
.skeletons{ display:flex; flex-wrap:wrap; gap:20px }
</style>