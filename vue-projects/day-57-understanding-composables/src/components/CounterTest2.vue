<template>
  <div>
    <h2>Counter Test</h2>
    <p>Count: {{ count }}</p>
    <p>Double: {{ doubleCount }}</p>
    
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script setup>
import { useCounter } from '@/composables/useCounter'

// Use the composable!
const { count, doubleCount, increment, decrement, reset } = useCounter(100)
</script>