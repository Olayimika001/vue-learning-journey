<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>The page you're looking for doesn't exist.</p>
    <router-link to="/blog" class="home-link">← Go to Blog</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 4rem 2rem;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
}

.not-found h1 {
  font-size: 8rem;
  color: #42b983;
  margin: 0;
  font-weight: bold;
}

.not-found h2 {
  color: #2c3e50;
  margin: 1rem 0;
  font-size: 2rem;
}

.not-found p {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.home-link {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.3s;
}

.home-link:hover {
  background: #35a372;
}
</style>