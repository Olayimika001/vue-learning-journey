<template>
  <div class="container" :style="{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }">
    <h2>Settings Panel</h2>
    <h3>Theme: {{ theme }}</h3>
    <h3>Language: {{ language  }}</h3>  
    <h3>Font Size: {{ fontSize }}</h3>
    </div>
</template>

<script setup>
import { inject } from 'vue'

const theme = inject('theme')
const language = inject('language')
const fontSize = inject('fontSize')
</script>

<style scoped>
.container{
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: auto;
}
</style>