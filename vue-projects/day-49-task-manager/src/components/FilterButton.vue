<template>
  <div class="filter-buttons">
    <button
      :class="{ active: filterStore.currentFilter === 'all' }"
      @click="filterStore.setFilter('all')"
    >
      All ({{ tasksStore.totalTasks }})
    </button>
    
    <button
      :class="{ active: filterStore.currentFilter === 'active' }"
      @click="filterStore.setFilter('active')"
    >
      Active ({{ tasksStore.activeCount }})
    </button>
    
    <button
      :class="{ active: filterStore.currentFilter === 'completed' }"
      @click="filterStore.setFilter('completed')"
    >
      Completed ({{ tasksStore.completedCount }})
    </button>
  </div>
</template>

<script setup>
import { useFilterStore } from '/src/stores/filter'
import { useTasksStore } from '../stores/task'

const filterStore = useFilterStore()
const tasksStore = useTasksStore()
</script>

<style scoped>
.filter-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

button {
  flex: 1;
  padding: 10px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

button.active {
  background: #42b983;
  color: white;
  border-color: #42b983;
}

button:hover {
  border-color: #42b983;
}
</style>