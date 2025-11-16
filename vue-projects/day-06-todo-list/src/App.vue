<template>
  <div class="app">
    <h1>Todo List</h1>
    <div class="add-lists">
      <input v-model="List" placeholder="Add List" />
      <button @click="addList">Add List</button>
    </div>
    <div class="lists" v-for="list in lists" :key="list.id">
      <h3>{{ list.name }}</h3>
      <button class="delete-list">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const List = ref('')
const lists = ref([])

const addList = () => {
  if (List.value) {
    lists.value.push({
      id: Date.now(),
      name: List.value,
    })
    List.value = ''
  }
  else{
    alert('Please type something')
  }
}

</script>

<style scoped>
.app {
  max-width: 600px;
  height: auto;
  margin: 20px auto;
  padding: 25px;
  text-align: center;
  background-color: White;
  border-radius: 20px;
}

h1{
  color: #42b883;
  font-weight: bold;
}

.add-lists {
  margin: 10px 0;
}

input{
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.lists {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  text-align: left;
  font-size: 15px;
  color: #333;
}

.delete-list{
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
}
</style>