<template>
  <div class="demo-container">
    <h2>Transition Demos</h2>
    
    <!-- Fade Demo -->
    <div class="demo-section">
      <button @click="showFade = !showFade">Toggle Fade</button>
      <Transition name="fade">
        <p v-if="showFade" class="demo-box">I fade in and out!</p>
      </Transition>
    </div>
    
    <!-- Slide Demo -->
    <div class="demo-section">
      <button @click="showSlide = !showSlide">Toggle Slide</button>
      <Transition name="slide">
        <p v-if="showSlide" class="demo-box">I slide in and out!</p>
      </Transition>
    </div>
    
    <!-- Zoom Demo -->
    <div class="demo-section">
      <button @click="showZoom = !showZoom">Toggle Zoom</button>
      <Transition name="zoom">
        <p v-if="showZoom" class="demo-box">I zoom in and out!</p>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showFade = ref(false)
const showSlide = ref(false)
const showZoom = ref(false)
</script>

<style scoped>
/* Your task: Add the CSS for all 3 transitions! */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  transform: translateX(-100px);  /* Start off-screen left */
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(100px);   /* Exit off-screen right */
  opacity: 0;
}

.zoom-enter-active,
.zoom-leave-active {
  transition: all 0.3s ease;
}

.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0);  /* Start/end at 0 size */
  opacity: 0;
}
</style>