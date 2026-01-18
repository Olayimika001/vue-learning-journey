<!-- src/views/Home.vue -->
<template>
  <div class="home">
    <h1>Welcome to Our App</h1>
    <p>Please login to access your dashboard</p>
    
    <div class="actions">
      <router-link to="/login" class="btn">Login</router-link>
      <router-link v-if="isLoggedIn" to="/dashboard" class="btn btn-secondary">
        Go to Dashboard
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoggedIn = ref(false)

onMounted(() => {
  isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true'
})
</script>

<style scoped>
.home {
  text-align: center;
  padding: 4rem 2rem;
}

.home h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.home p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.3s;
}

.btn:hover {
  background: #35a372;
}

.btn-secondary {
  background: #3498db;
}

.btn-secondary:hover {
  background: #2980b9;
}
</style>