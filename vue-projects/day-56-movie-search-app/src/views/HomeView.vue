<template>
  <div class="home">
    <SearchBar />
    <MovieList />
  </div>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue'
import MovieList from '@/components/MovieList.vue'
</script>

<style scoped>
.home{
  padding: 20px;
}
</style>
