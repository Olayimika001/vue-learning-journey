<template>
  <div class="app">
    <div class="container">
    <button @click="increment">increment</button>
    <h3>Count: {{ count }}</h3>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'

const props = defineProps(['messages'])
const count = ref(0)

const increment = () => {
  count.value++
  props.messages.push("Count updated to " + count.value)
}

onMounted(() => {
  props.messages.push("Component has mounted")
})

onUnmounted(() => {
  props.messages.push("Component has unmounted")
})
</script>

<style scoped>
button{
    padding: 10px 20px;
    font-size: 16px;
    background: #42b883;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>