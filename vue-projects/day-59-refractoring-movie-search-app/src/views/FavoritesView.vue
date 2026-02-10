<template>
  <div class="favorites">
    <h2>Favorites</h2>
    <p v-if="!favorites.length">No favorites yet. Add some from search results.</p>

    <ul v-if="favorites.length">
      <li v-for="movie in favorites" :key="movie.imdbID">
        <router-link :to="{ name: 'movie', params: { id: movie.imdbID } }">
          <img :src="movie.Poster" :alt="movie.Title" />
        </router-link>
        <div class="meta">
          <h3>{{ movie.Title }}</h3>
          <p>{{ movie.Year }}</p>
          <button @click="remove(movie.imdbID)">Remove</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFavoritesStore } from '@/stores/favorites'

const favStore = useFavoritesStore()
const favorites = computed(() => favStore.favorites)

function remove(id) {
  favStore.removeFavorite(id)
}
</script>

<style scoped>
.favorites ul{
  list-style:none;
  padding:0;
  display:flex;
  flex-wrap:wrap;
  gap:16px;
}
.favorites li{
  width:200px;
  display:flex;
  flex-direction:column;
  align-items:center;
}
.favorites img{ width:100%; height:auto }
.meta{ text-align:center }
</style>
