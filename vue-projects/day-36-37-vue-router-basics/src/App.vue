<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink :to="{ name: 'About' }">About</RouterLink>
      <RouterLink :to="{ name: 'Projects' }">Projects</RouterLink>
    </nav>
    
    <RouterView />
  </div>
</template>

<script setup>

</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background: #f0f0f0;
}

a {
  text-decoration: none;
  color:#35495e ;
  font-weight: bold;
}

a.router-link-active {
  color: #42b983;
}

nav a:hover {
  text-decoration: underline;
}


</style>