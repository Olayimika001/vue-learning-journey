<template>
  <div class="app">
    <header>
      <h1>📝 Task Manager</h1>
      <p>Manage your tasks.</p>
    </header>
    
    <main class="container">
      <TaskStats />
      <TaskInput />
      <FilterButtons />
      <TaskList />
      
      <button
        v-if="tasksStore.completedCount > 0"
        class="clear-completed"
        @click="tasksStore.clearCompleted()"
      >
        Clear Completed ({{ tasksStore.completedCount }})
      </button>
    </main>
  </div>
</template>

<script setup>
import { useTasksStore } from './stores/task'
import TaskStats from './components/TaskStats.vue'
import TaskInput from './components/TaskInput.vue'
import FilterButtons from './components/FilterButton.vue'
import TaskList from './components/TaskList.vue'

const tasksStore = useTasksStore()
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.app {
  min-height: 100vh;
  padding: 20px;
}

header {
  text-align: center;
  color: white;
  margin-bottom: 40px;
}

header h1 {
  margin: 0;
  font-size: 48px;
}

header p {
  margin: 10px 0 0;
  opacity: 0.9;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: #f5f5f5;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.clear-completed {
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  background: #ff4444;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.clear-completed:hover {
  background: #cc0000;
}
</style>