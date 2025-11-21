<template>
  <div class="container">
    <div class="icon" @click="toggleTheme">
      <p :class="{ active: !isDark }">☀️ Light mode</p>
      <p :class="{ active: isDark }">🌙 Dark mode</p>
    </div>
    <div class="card" :class="isDark ? 'dark-theme' : 'light-theme'">
      <h1>Theme Switcher</h1>
      <p>Click the toggle to switch theme</p>
      <h3>Current Theme: <b> {{ isDark ? 'Dark' : 'Light' }} </b> </h3>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const isDark = ref(false)
const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<style scoped>
.container {
background-color: #eaebed;
color: black;
padding: 40px;
border-radius: 10px;
}

.icon {
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: #5e6163;
  padding: 6px;
  border-radius: 20px;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 10000;
}

.icon p {
  opacity: 0.5;
}

.icon p.active {
  opacity: 1;
  font-weight: bold;
}

.light-theme {
  background-color: #ffffff;
  color: #000000;
}

.dark-theme {
  background-color: #1a1a1a;
  color: #ffffff;
}

.card{
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  align-items: center;
  line-height: 50px;
}
</style>