<template>
  <div class="container">
    <p>Count: {{ store.count }}</p>
    <p>Double: {{ store.doubleCount }}</p>
    <p>Squared: {{ store.squared }}</p>
    <p>Is Positive: {{ store.isPositive ? 'Yes' : 'No' }}</p>

    <div class="buttons">
        <button @click="store.increment">Increment</button>
        <button @click="store.decrement">Decrement</button>
        <button @click="store.reset">Reset</button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'

const store = useCounterStore()
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 2em auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  font-family: Arial, sans-serif;
}


.buttons {
  margin-top: 1em;
    display: flex;
    gap: 0.5em;
}

button {
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
}


</style>