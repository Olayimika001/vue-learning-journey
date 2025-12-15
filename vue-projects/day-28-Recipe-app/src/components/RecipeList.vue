<template>
  <div class="recipe-list">
    <h2>📖 All Recipes</h2>
    
    <div class="filter-buttons">
      <button 
        @click="selectedCategory = ''" 
        :class="{ active: selectedCategory === '' }"
      >
        All
      </button>
      <button 
        @click="selectedCategory = 'Breakfast'" 
        :class="{ active: selectedCategory === 'Breakfast' }"
      >
        Breakfast
      </button>
      <button 
        @click="selectedCategory = 'Lunch'" 
        :class="{ active: selectedCategory === 'Lunch' }"
      >
        Lunch
      </button>
      <button 
        @click="selectedCategory = 'Dinner'" 
        :class="{ active: selectedCategory === 'Dinner' }"
      >
        Dinner
      </button>
      <button 
        @click="selectedCategory = 'Dessert'" 
        :class="{ active: selectedCategory === 'Dessert' }"
      >
        Dessert
      </button>
    </div>

    <div class="recipes-grid">
      <RecipeCard
        v-for="recipe in filteredRecipes"
        :key="recipe.id"
        :recipe="recipe"
        @toggle-favorite="handleFavorite"
        @delete-recipe="handleDelete"
      />
    </div>

    <p v-if="filteredRecipes.length === 0" class="no-recipes">
      No recipes found in this category.
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import RecipeCard from './RecipeCard.vue'

const props = defineProps({
  recipes: Array
})

const emit = defineEmits(['toggle-favorite', 'delete-recipe'])

const selectedCategory = ref('')

const filteredRecipes = computed(() => {
  if (selectedCategory.value === '') {
    return props.recipes
  }
  return props.recipes.filter(recipe => recipe.category === selectedCategory.value)
})

const handleFavorite = (id) => {
  emit('toggle-favorite', id)
}

const handleDelete = (id) => {
  emit('delete-recipe', id)
}
</script>

<style scoped>
.recipe-list {
  margin-bottom: 30px;
}

.filter-buttons {
  display: flex;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.filter-buttons button {
  padding: 10px 20px;
  background: #e0e0e0;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-buttons button:hover {
  background: #42b883;
  color: white;
}

.filter-buttons button.active {
  background: #42b883;
  color: white;
}

.recipes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.no-recipes {
  text-align: center;
  font-size: 18px;
  color: #999;
  margin-top: 40px;
}
</style>