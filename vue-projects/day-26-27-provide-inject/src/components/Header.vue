<template>
  <div class="container" :style="{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }">
    <h1>{{ language === 'en' ? 'Welcome!' : 'Bienvenido!' }}</h1>
    <h3>Theme: {{ theme }}</h3>
  </div>
</template>

<script setup>
import { inject     } from 'vue'

const theme = inject('theme')
const language = inject('language')
</script>

<style scoped>
h1{
    text-align: center;
    color: #42b883;
    font-weight: bold;
}
</style>