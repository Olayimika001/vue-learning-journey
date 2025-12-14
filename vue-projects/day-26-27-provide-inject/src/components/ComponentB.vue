<template>
  <div class="container" :style="{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }">
    <h1>I'm component B</h1>
    <h2>Using theme: {{ theme  }}</h2>
    <div class="box" :style="{ background: theme === 'light' ? 'black' : 'white'}"></div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const theme = inject('theme')
</script>

<style scoped>
.container {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* max-width: 500px; */
  /* margin: auto; */
  margin: 20px ;
  background: black;
  color: white;
}

.box {
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 5px;
}


</style>