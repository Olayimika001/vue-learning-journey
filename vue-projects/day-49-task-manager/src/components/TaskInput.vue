<template>
  <div class="task-input">
    <input
      v-model="newTaskTitle"
      @keyup.enter="addTask"
      placeholder="What needs to be done?"
      type="text"
    />
    <button @click="addTask">Add Task</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTasksStore } from '../stores/task'

const tasksStore = useTasksStore()
const newTaskTitle = ref('')

function addTask() {
  if (newTaskTitle.value.trim()) {
    tasksStore.addTask(newTaskTitle.value)
    newTaskTitle.value = ''
  }
}
</script>

<style scoped>
.task-input {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
}

input:focus {
  outline: none;
  border-color: #42b983;
}

button {
  padding: 12px 24px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

button:hover {
  background: #359268;
}
</style>