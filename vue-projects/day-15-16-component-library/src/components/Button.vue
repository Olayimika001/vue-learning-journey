<template>
  <div class="button-template">
    <button @click="displayAlert">Click Me</button>
  </div>
</template>

<script setup>
const displayAlert = () => {
  alert('This is a button from the component library!');
};
</script>

<style scoped>
button{
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}
</style>