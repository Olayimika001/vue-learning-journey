<!-- src/views/Profile.vue -->
<template>
  <div class="profile">
    <h1>User Profile</h1>
    
    <div class="profile-card">
      <h2>{{ username }}</h2>
      <p><strong>Email:</strong> {{ username }}@example.com</p>
      <p><strong>Member since:</strong> January 2026</p>
      <p><strong>Status:</strong> ✅ Active</p>
    </div>
    
    <router-link to="/dashboard" class="back-link">← Back to Dashboard</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const username = ref('')

onMounted(() => {
  username.value = localStorage.getItem('username') || 'User'
})
</script>

<style scoped>
.profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.profile h1 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.profile-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #42b983;
}

.profile-card h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.profile-card p {
  color: #666;
  margin-bottom: 0.5rem;
}

.back-link {
  display: inline-block;
  margin-top: 1.5rem;
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}

.back-link:hover {
  text-decoration: underline;
}
</style>