<template>
  <div class="container">
    <h1>Auto-Save Notes</h1>

    <NoteApp v-if="showNotes" />

    <button @click="toggleNotes">
      {{ showNotes ? "Hide Notes" : "Show Notes" }}
    </button>

  </div>
</template>

<script setup>
import { ref } from "vue";
import NoteApp from "./components/NoteApp.vue";

const showNotes = ref(true);

const toggleNotes = () => {
  showNotes.value = !showNotes.value;
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
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
</style>








<!-- <template>
    <div class="app">
        <h1>Lifecycle Hooks</h1>
        <lifecycleDemo v-if="showComponent" :messages="messages" />
        <h2 v-for="message in messages" :key="message">{{ message }}</h2>
        <button @click="hide">Toggle</button>
    </div>
  
</template>

<script setup>
import { ref } from 'vue'

import lifecycleDemo from './components/lifecycleDemo.vue';

const showComponent = ref(true)
const messages = ref([])

const hide = () => {
  showComponent.value = !showComponent.value
}
</script>

<style scoped>
.app{
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}
button{
    padding: 10px 20px;
    font-size: 16px;
    background: #42b883;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style> -->


