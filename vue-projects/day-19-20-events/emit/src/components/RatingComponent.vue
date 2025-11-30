<template>
  <div class="rating-container">
    <button
      v-for="star in 5"
      :key="star"
      @click="selectRating(star)"
      @mouseenter="hoveredStar = star"
      @mouseleave="hoveredStar = 0"
      class="star-btn"
      :class="{ filled: star <= displayRating }"
    >
      {{ star <= displayRating ? "★" : "☆" }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["rating-selected"]);

const hoveredStar = ref(0);

// Show hovered rating if hovering, otherwise show actual rating
const displayRating = computed(() => {
  return hoveredStar.value > 0 ? hoveredStar.value : props.modelValue;
});

const selectRating = (star) => {
  emit("rating-selected", star);
};
</script>

<style scoped>
.rating-container {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.star-btn {
  font-size: 2.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #ddd;
  transition: all 0.2s ease;
  padding: 5px;
}

.star-btn:hover {
  transform: scale(1.2);
}

.star-btn.filled {
  color: #ffd700;
}
</style>