<template>
  <div>
    <button @click="toggle">Toggle Modal</button>
    <button @click="setTrue">Show Modal</button>
    <button @click="setFalse">Hide Modal</button>
    
    <div v-if="isOpen" class="modal">
      <p>Modal is open!</p>
      <button @click="setFalse">Close</button>
    </div>
  </div>
</template>

<script setup>
import { useToggle } from '../composables/useToggle'

const { value: isOpen, toggle, setTrue, setFalse } = useToggle(false)
</script>