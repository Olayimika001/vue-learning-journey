<template>
  <div class="home">
    <h1>Hello, I'm Makima</h1>
    <p>Web developer learning Vue.js and building real-world projects. Welcome to my portfolio where I showcase my progress.</p>
    <button @click="goToProjects">View my projects</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToAbout = () => {
  router.push({ path: '/about' })
}

const goToProjects = () => {
  router.push({ name: 'Projects' })
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}

button {
  padding: 0.5rem 1rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>