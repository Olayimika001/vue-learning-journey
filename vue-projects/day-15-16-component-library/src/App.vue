<template>
  <div class="container">
  <Badge />
  <Badge />

  <Card />

  <Button />
  <Button />
  </div>

</template>

<script setup>
import Button from './components/Button.vue';
import Card from './components/Card.vue';
import Badge from './components/Badge.vue';
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-top: 20px;
}
</style>