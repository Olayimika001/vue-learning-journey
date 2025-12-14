<template>
  <div class="container" :style="{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white', fontSize: fontSize + 'px' }">
    <h3 >Here the font size and theme changes</h3>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const fontSize = inject('fontSize')
const theme = inject('theme')
</script>

<style scoped>
.container{
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: auto;
}
</style>