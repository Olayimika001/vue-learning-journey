<template>
  <div class="container">
    <button @click="displayAlert">
  {{ label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  label: String
})
</script>

<style scoped>
button{
    background-color: green;
    color: white;
    border: none;
    padding: 15px;
    border-radius: 20px;
    margin:20px;
}
</style>