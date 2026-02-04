<script setup>
import axios from 'axios'

const response = await axios.get('https://randomuser.me/api/?delay=3')
const user = response.data.results[0] 
</script>

<template>
  <div>
    <h2>{{ user.name.first }} {{ user.name.last }}</h2>
    <p>{{ user.email }}</p>
  </div>
</template>