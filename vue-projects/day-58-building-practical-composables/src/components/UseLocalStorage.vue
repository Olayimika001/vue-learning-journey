<template>
  <div>
    <input v-model="username" placeholder="Enter username">
    <p>Stored: {{ username }}</p>
    <button @click="username = ''">Clear</button>
  </div>
</template>

<script setup>
import { useLocalStorage } from '../composables/useLocalStorage'

// Automatically syncs with localStorage!
const username = useLocalStorage('username', '')
</script>