<template>
  <div class="app">
    <h1>Login Toggle</h1>

    <!-- Logged Out State -->
    <div v-if="!isLoggedIn">
      <input v-model="username" placeholder="Username">
      <button @click="login">Login</button>
    </div>

    <!-- Logged In State -->
    <div v-else>
      <h2>Welcome, {{ username }}!</h2>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isLoggedIn = ref(false)
const username = ref('')

const login = () => {
  if (username.value) {
    isLoggedIn.value = true
  }
}

const logout = () => {
  isLoggedIn.value = false
  username.value = ''
}
</script>

<style scoped>
.app {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  text-align: center;
}

input {
  padding: 10px;
  margin: 10px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #35495e;
}
</style>