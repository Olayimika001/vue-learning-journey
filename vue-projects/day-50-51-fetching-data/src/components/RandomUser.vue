<template>
  <div class="container">
    <h1>Random User Generator</h1>
    <p class="subtitle">Click the button to generate a random user profile</p>
    
    <!-- Button -->
    <button 
      @click="fetchUser" 
      :disabled="loading"
      class="generate-btn"
    >
      {{ loading ? 'Loading...' : 'Get Random User' }}
    </button>
    
    <!-- Loading State -->
    <div v-if="loading" class="loading">
      <p>Fetching random user...</p>
    </div>
    
    <!-- Error State -->
    <div v-if="error" class="error">
      <p>❌ {{ error }}</p>
      <button @click="fetchUser">Try Again</button>
    </div>
    
    <!-- User Card -->
    <div v-if="user && !loading" class="user-card">
      <img :src="user.picture.large" :alt="user.name.first" class="avatar">
      
      <h2>{{ user.name.first }} {{ user.name.last }}</h2>
      
      <div class="user-info">
        <div class="info-item">
          <span class="label">Email:</span>
          <span class="value">{{ user.email }}</span>
        </div>
        
        <div class="info-item">
          <span class="label">Location:</span>
          <span class="value">{{ user.location.city }}, {{ user.location.country }}</span>
        </div>
        
        <div class="info-item">
          <span class="label">Age:</span>
          <span class="value">{{ user.dob.age }} years old</span>
        </div>
        
        <div class="info-item">
          <span class="label">Phone:</span>
          <span class="value">{{ user.phone }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const user = ref(null)
const loading = ref(false)
const error = ref(null)

async function fetchUser() {
  loading.value = true
  error.value = null
  
  try {
    const response = await axios.get('https://randomuser.me/api/')
    user.value = response.data.results[0] 
  } catch (err) {
    error.value = 'Failed to fetch user. Please try again.'
    console.error(err)
  } finally {
    loading.value = false
  }
}

// Fetch a user on component mount (optional - shows a user immediately)
// onMounted(() => {
//   fetchUser()
// })
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  color: #333;
  margin-bottom: 10px;
}

.subtitle {
  color: #666;
  margin-bottom: 30px;
}

.generate-btn {
  padding: 15px 40px;
  font-size: 18px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  margin-bottom: 30px;
}

.generate-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
}

.generate-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.loading {
  color: #667eea;
  font-size: 18px;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.error {
  background: #fee;
  border: 2px solid #fcc;
  padding: 20px;
  border-radius: 10px;
  color: #c00;
}

.error button {
  margin-top: 10px;
  padding: 10px 20px;
  background: #c00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.user-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.5s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #667eea;
  margin-bottom: 20px;
  object-fit: cover;
}

h2 {
  color: #333;
  margin: 0 0 30px 0;
  font-size: 28px;
}

.user-info {
  text-align: left;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.info-item:last-child {
  border-bottom: none;
}

.label {
  font-weight: 600;
  color: #667eea;
}

.value {
  color: #666;
}
</style>