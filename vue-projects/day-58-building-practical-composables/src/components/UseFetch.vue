<template>
  <div>
    <button @click="fetchData">Load Users</button>
    
    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>
    
    <ul v-if="data">
      <li v-for="user in data" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useFetch } from '../composables/useFetch'

const { data, loading, error, fetchData } = useFetch(
  'https://jsonplaceholder.typicode.com/users' 
)
</script>