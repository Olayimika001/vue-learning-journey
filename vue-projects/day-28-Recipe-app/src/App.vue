<template>
  <div class="app" :style="{ background: theme === 'light' ? '#f5f5f5' : '#1a1a1a', color: theme === 'light' ? '#333' : '#fff' }">
    <div class="header">
      <h1>🍳 Recipe App</h1>
      <button @click="toggleTheme" class="theme-btn">
        {{ theme === 'light' ? '🌙' : '☀️' }} Toggle Theme
      </button>
    </div>

    <AddRecipeForm @add-recipe="addRecipe" />
    
    <RecipeList 
      :recipes="recipes" 
      @toggle-favorite="toggleFavorite"
      @delete-recipe="deleteRecipe"
    />

    <FavoriteList :recipes="recipes" />
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from 'vue'
import AddRecipeForm from './components/AddRecipeForm.vue'
import RecipeList from './components/RecipeList.vue'
import FavoriteList from './components/FavoriteList.vue'

const recipes = ref([
  { id: 1, name: "Pizza", category: "Lunch", description: "Cheese pizza", emoji: "🍕", isFavorite: false },
  { id: 2, name: "Pancakes", category: "Breakfast", description: "Fluffy pancakes", emoji: "🥞", isFavorite: false },
  { id: 3, name: "Pasta", category: "Dinner", description: "Italian pasta", emoji: "🍝", isFavorite: false },
  { id: 4, name: "Ice Cream", category: "Dessert", description: "Sweet treat", emoji: "🍦", isFavorite: false },
])

const theme = ref('light')

provide('theme', theme)

const addRecipe = (newRecipe) => {
  recipes.value.push(newRecipe)
  saveToLocalStorage()
}

const deleteRecipe = (id) => {
  recipes.value = recipes.value.filter(recipe => recipe.id !== id)
  saveToLocalStorage()
}

const toggleFavorite = (id) => {
  const recipe = recipes.value.find(r => r.id === id)
  if (recipe) {
    recipe.isFavorite = !recipe.isFavorite
    saveToLocalStorage()
  }
}

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const saveToLocalStorage = () => {
  localStorage.setItem('recipes', JSON.stringify(recipes.value))
}

onMounted(() => {
  const savedRecipes = localStorage.getItem('recipes')
  if (savedRecipes) {
    recipes.value = JSON.parse(savedRecipes)
  }
})
</script>

<style scoped>
.app {
  min-height: 100vh;
  padding: 20px;
  transition: all 0.3s;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

h1 {
  margin: 0;
}

.theme-btn {
  padding: 10px 20px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.theme-btn:hover {
  background: #35a372;
}
</style>