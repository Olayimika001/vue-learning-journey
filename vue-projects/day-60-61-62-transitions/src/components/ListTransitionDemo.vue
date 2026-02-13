<template>
  <div>
    <button @click="addItem">Add Item</button>
    <button @click="removeItem">Remove Random</button>
    
    <TransitionGroup name="list" tag="ul">
      <li v-for="item in items" :key="item" class="list-item">
        {{ item }}
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([1, 2, 3, 4, 5])
const nextNum = ref(6)

function addItem() {
  const randomIndex = Math.floor(Math.random() * items.value.length)
  items.value.splice(randomIndex, 0, nextNum.value++)
}

function removeItem() {
  if (items.value.length > 0) {
    const randomIndex = Math.floor(Math.random() * items.value.length)
    items.value.splice(randomIndex, 1)
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-move {
  transition: transform 0.5s ease;
}

.list-leave-active {
  position: absolute;
}
</style>