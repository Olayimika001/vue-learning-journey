<template>
  <div class="skeleton-container">
    <div class="skeleton-box skeleton-name"></div>
    <div class="skeleton-box skeleton-email"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.skeleton-container {
  padding: 20px;
}

.skeleton-box {
  background: #e0e0e0;
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

.skeleton-name {
  height: 30px;
  width: 200px;
  margin-bottom: 15px;
}

.skeleton-email {
  height: 20px;
  width: 250px;
}

@keyframes pulse {
  0%, 100% { 
    opacity: 1; 
  }
  50% { 
    opacity: 0.5; 
  }
}
</style>