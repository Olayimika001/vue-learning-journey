<template>
  <div class="card" :style="{ background: theme === 'light' ? 'white' : '#2a2a2a', color: theme === 'light' ? '#333' : '#fff' }">
    <div class="recipe-header">
      <span class="emoji">{{ recipe.emoji }}</span>
      <h3>{{ recipe.name }}</h3>
    </div>
    
    <p class="category">Category: {{ recipe.category }}</p>
    <p class="description">{{ recipe.description }}</p>
    
    <div class="actions">
      <button @click="onFavoriteClick" class="fav-btn">
        {{ recipe.isFavorite ? '❤️' : '🤍' }} 
        {{ recipe.isFavorite ? 'Favorited' : 'Favorite' }}
      </button>
      <button @click="onDeleteClick" class="delete-btn">
        🗑️ Delete
      </button>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  recipe: Object
})

const emit = defineEmits(['toggle-favorite', 'delete-recipe'])

const theme = inject('theme')

const onFavoriteClick = () => {
  emit('toggle-favorite', props.recipe.id)
}

const onDeleteClick = () => {
  if (confirm(`Delete ${props.recipe.name}?`)) {
    emit('delete-recipe', props.recipe.id)
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.recipe-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.emoji {
  font-size: 40px;
}

h3 {
  margin: 0;
  font-size: 20px;
}

.category {
  color: #42b883;
  font-weight: bold;
  margin: 10px 0;
}

.description {
  margin: 10px 0;
  color: #666;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.fav-btn, .delete-btn {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.fav-btn {
  background: #42b883;
  color: white;
}

.fav-btn:hover {
  background: #35a372;
}

.delete-btn {
  background: #ff4444;
  color: white;
}

.delete-btn:hover {
  background: #cc0000;
}
</style>