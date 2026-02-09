<template>
  <div class="skeleton">
    <div class="skeleton-image"></div>
    <div class="skeleton-title"></div>
    <div class="skeleton-year"></div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.skeleton{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}
.skeleton-image{
    width: 200px;
    height: 300px;
    background-color: #ccc;
}
.skeleton-title{
    width: 200px;
    height: 20px;
    background-color: #ccc;
    margin-top: 10px;
}
.skeleton-year{
    width: 100px;
    height: 20px;
    background-color: #ccc;
    margin-top: 10px;
}
</style>