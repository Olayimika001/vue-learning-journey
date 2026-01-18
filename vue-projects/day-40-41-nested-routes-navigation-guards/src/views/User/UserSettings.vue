<template>
  <div class="settings">
    <h1>Settings</h1>
    
    <div class="settings-section">
      <h3>Account Settings</h3>
      <form @submit.prevent="saveSettings">
        <div class="form-group">
          <label>Username:</label>
          <input v-model="username" type="text" />
        </div>
        
        <div class="form-group">
          <label>Email:</label>
          <input v-model="email" type="email" />
        </div>
        
        <div class="form-group">
          <label>
            <input v-model="notifications" type="checkbox" />
            Enable email notifications
          </label>
        </div>
        
        <button type="submit" class="btn-save">Save Changes</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('Makima')
const email = ref('makima@example.com')
const notifications = ref(true)

const saveSettings = () => {
  alert('Settings saved!')
}
</script>

<style scoped>
.settings {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.settings h1 {
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.settings-section {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
}

.settings-section h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
  font-weight: bold;
}

.form-group input[type="text"],
.form-group input[type="email"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-group input[type="checkbox"] {
  margin-right: 0.5rem;
}

.btn-save {
  padding: 0.75rem 2rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-save:hover {
  background: #35a372;
}
</style>