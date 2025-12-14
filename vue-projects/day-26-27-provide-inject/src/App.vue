<template :style="{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }">
  <div class="container" :style="{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }">
    <h1>Settings Dashboard</h1>
    <button @click="changeTheme">Change Theme</button>
    <button @click="changeLanguage">Change Language</button>
    <button @click="changeFont">Increase Font Size</button>
    <button @click="reset">Reset</button>
  </div>

 <div class="components" :style="{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }">
  <Header />

  <div class="flex">
      <Sidebar />
  <Content />
  </div>
  
 </div>
  

</template>

<script setup>
import { provide, ref } from 'vue'

import Settings from './components/Settings.vue'
import Content from './components/Content.vue'
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'

const theme = ref('light')
const language = ref('en')
const fontSize = ref(14)

provide('theme', theme)
provide('language', language)
provide('fontSize', fontSize)

const changeTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
const changeLanguage = () => {
  language.value = language.value === 'en' ? 'es' : 'en'
}
const changeFont = () => {
  fontSize.value += 2
}
const reset = () => {
  theme.value = 'light'
  language.value = 'en'
  fontSize.value = 14
}
</script>

<style scoped>
button{
  padding: 10px 20px;
  font-size: 16px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
}

.flex{
  display: flex;
  justify-content: space-between;
}

.container{
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* max-width: 300px; */
  margin: 10px auto;
}

.components{
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* max-width: 300px; */
  margin: 10px;
}
</style>

<!-- <template>
  <div class="app">
    <h1>Theme Provider</h1>

    <h2>Current Theme: {{ theme }}</h2>
    <button @click="change">Change Theme</button>

    <ComponentA />
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'

import ComponentA from './components/ComponentA.vue'

const theme = ref('light')
provide('theme', theme)

const change = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<style scoped>
.app {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* max-width: 300px; */
  margin: auto;
}

button{
  padding: 10px 20px;
  font-size: 16px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}
</style> -->