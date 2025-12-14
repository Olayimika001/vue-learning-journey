<template>
  <div class="container">
    <h2>I'm component A</h2>
    <p>I'm just a wrapper</p>

     <ComponentB />
  </div>

</template>

<script setup>
import ComponentB from './ComponentB.vue'
</script>

<style scoped>
.container {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* max-width: 300px; */
  /* margin: auto; */
  margin-bottom: 10px;
}
</style>