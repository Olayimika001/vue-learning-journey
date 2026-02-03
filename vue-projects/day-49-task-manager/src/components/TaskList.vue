<template>
  <div class="task-list">
    <div v-if="tasksStore.filteredTasks.length === 0" class="empty-state">
      <p v-if="filterStore.currentFilter === 'all'">No tasks yet. Add one above! ✨</p>
      <p v-else-if="filterStore.currentFilter === 'active'">No active tasks! 🎉</p>
      <p v-else>No completed tasks yet.</p>
    </div>
    
    <ul v-else>
      <TaskItem
        v-for="task in tasksStore.filteredTasks"
        :key="task.id"
        :task="task"
      />
    </ul>
  </div>
</template>

<script setup>
import { useTasksStore } from '/src/stores/task'
import { useFilterStore } from '/src/stores/filter'
import TaskItem from './TaskItem.vue'

const tasksStore = useTasksStore()
const filterStore = useFilterStore()
</script>

<style scoped>
.task-list {
  margin-top: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

.empty-state {
  text-align: center;
  padding: 40px;
  color: #999;
  font-size: 18px;
}
</style>