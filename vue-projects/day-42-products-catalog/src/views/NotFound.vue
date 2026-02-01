<!-- views/NotFound.vue -->
<template>
  <div class="not-found-page">
    <div class="container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <router-link to="/products" class="btn-home">
        Go to Products
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found-page {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.container {
  text-align: center;
  color: white;
}

h1 {
  font-size: 8rem;
  margin: 0;
  font-weight: bold;
}

h2 {
  font-size: 2rem;
  margin: 1rem 0;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.btn-home {
  display: inline-block;
  padding: 1rem 2rem;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
}
</style>