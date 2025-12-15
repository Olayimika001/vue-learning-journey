<template>
  <div class="favorites-section">
    <h2>❤️ My Favorites ({{ favoriteRecipes.length }})</h2>
    
    <div v-if="favoriteRecipes.length === 0" class="no-favorites">
      <p>No favorite recipes yet. Click the heart on any recipe to add it here!</p>
    </div>

    <div v-else class="favorites-grid">
      <div 
        v-for="recipe in favoriteRecipes" 
        :key="recipe.id"
        class="favorite-card"
        :style="{ background: theme === 'light' ? 'white' : '#2a2a2a', color: theme === 'light' ? '#333' : '#fff' }"
      >
        <span class="emoji">{{ recipe.emoji }}</span>
        <h4>{{ recipe.name }}</h4>
        <p>{{ recipe.category }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  recipes: Array
})

const theme = inject('theme')

const favoriteRecipes = computed(() => {
  return props.recipes.filter(recipe => recipe.isFavorite)
})
</script>

<style scoped>
.favorites-section {
  margin-top: 40px;
  padding-top: 40px;
  border-top: 2px solid #ccc;
}

.no-favorites {
  text-align: center;
  color: #999;
  padding: 40px;
  font-size: 16px;
}

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.favorite-card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.favorite-card:hover {
  transform: scale(1.05);
}

.emoji {
  font-size: 50px;
  display: block;
  margin-bottom: 10px;
}

h4 {
  margin: 10px 0;
  color: #42b883;
}

p {
  margin: 5px 0;
  color: #666;
}
</style>