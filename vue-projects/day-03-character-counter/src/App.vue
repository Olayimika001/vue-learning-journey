<template>
  <div class="app">
    <h1>Character Counter</h1>
    <textarea 
      v-model="text" 
      placeholder="Start typing..."
      rows="10"
    ></textarea>
    <p>Character count: <strong>{{ text.length }}</strong></p>
  </div>
</template>


<script setup>
import { ref } from 'vue'

const text = ref('')
</script>


<style scoped>
.app {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #42b883;
  border-radius: 8px;
}

h1 {
  color: #42b883;
}

p {
  font-size: 18px;
  margin-top: 20px;
}
</style>