<template>
  <div class="form-container" :style="{ background: theme === 'light' ? 'white' : '#2a2a2a', color: theme === 'light' ? '#333' : '#fff' }">
    <h2>➕ Add New Recipe</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>Recipe Name:</label>
        <input 
          type="text" 
          v-model="recipeName" 
          placeholder="e.g., Chocolate Cake"
          required
        />
      </div>

      <div class="form-group">
        <label>Category:</label>
        <select v-model="category" required>
          <option value="">-- Select Category --</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <div class="form-group">
        <label>Description:</label>
        <input 
          type="text" 
          v-model="description" 
          placeholder="Brief description"
          required
        />
      </div>

      <div class="form-group">
        <label>Emoji:</label>
        <input 
          type="text" 
          v-model="emoji" 
          placeholder="🍰"
          maxlength="2"
          required
        />
      </div>

      <button type="submit" class="submit-btn">Add Recipe</button>
    </form>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'

const emit = defineEmits(['add-recipe'])

const theme = inject('theme')

const recipeName = ref('')
const category = ref('')
const description = ref('')
const emoji = ref('')

const handleSubmit = () => {
  const newRecipe = {
    id: Date.now(),
    name: recipeName.value,
    category: category.value,
    description: description.value,
    emoji: emoji.value,
    isFavorite: false
  }
  
  emit('add-recipe', newRecipe)
  
  // Reset form
  recipeName.value = ''
  category.value = ''
  description.value = ''
  emoji.value = ''
}
</script>

<style scoped>
.form-container {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-top: 0;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.submit-btn {
  padding: 10px 20px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
}

.submit-btn:hover {
  background: #35a372;
}
</style>