<template>
  <div>
    <h1>{{ greetingStore.message }}</h1>
    <p>User: {{ greetingStore.userName }}</p>
  </div>
</template>

<script setup>
import { useGreetingStore } from '../stores/greeting'

const greetingStore = useGreetingStore()
</script>