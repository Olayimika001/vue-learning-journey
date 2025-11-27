<template>
 <div class="card">
  <h3>{{ title }}</h3>
  <p>{{ description }}</p>
</div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<style scoped>
.card{
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    box-shadow: 2px 2px 12px rgba(0,0,0,0.1);
}

</style>