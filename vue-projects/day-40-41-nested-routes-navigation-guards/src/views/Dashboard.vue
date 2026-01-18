<!-- src/views/Dashboard.vue -->
<template>
  <div class="dashboard">
    <div class="dashboard-header">
      <h1>Dashboard</h1>
      <p>Welcome back, {{ username }}!</p>
    </div>
    
    <div class="dashboard-content">
      <div class="card">
        <h3>📊 Statistics</h3>
        <p>You have 5 new notifications</p>
      </div>
      
      <div class="card">
        <h3>📝 Recent Activity</h3>
        <p>Last login: {{ new Date().toLocaleDateString() }}</p>
      </div>
      
      <div class="card">
        <h3>⚙️ Quick Actions</h3>
        <router-link to="/profile" class="btn">View Profile</router-link>
      </div>
    </div>
    
    <button @click="handleLogout" class="btn-logout">Logout</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')

onMounted(() => {
  // Get username from localStorage
  username.value = localStorage.getItem('username') || 'User'
})

const handleLogout = () => {
  // Clear login state
  localStorage.removeItem('isLoggedIn')
  localStorage.removeItem('username')
  
  // Redirect to login
  router.push({ name: 'Login' })
}
</script>

<style scoped>
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.dashboard-header {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dashboard-header h1 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.dashboard-header p {
  color: #42b983;
  font-size: 1.1rem;
}

.dashboard-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.card p {
  color: #666;
}

.card .btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.3s;
}

.card .btn:hover {
  background: #35a372;
}

.btn-logout {
  padding: 0.75rem 2rem;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-logout:hover {
  background: #c0392b;
}
</style>