<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style >
.card {
    /* border: 1px solid #ccc; */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    margin: auto;
    margin-bottom: 20px;
    background-color: #369870;
}

h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

p {
    margin-bottom: 10px;
}

h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px auto;
}

.button:hover {
    background-color: #369870;
}
</style>