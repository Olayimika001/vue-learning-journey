<template>
  <div>
    <header class="app-header">
      <h1>Movie Search</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/favorites">Favorites</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.app-header{ display:flex; align-items:center; justify-content:space-between; padding:12px 20px; background:#222; color:#fff }
.app-header nav a{ color:#fff; margin-left:12px; text-decoration:none }
main{ padding:20px }
</style>