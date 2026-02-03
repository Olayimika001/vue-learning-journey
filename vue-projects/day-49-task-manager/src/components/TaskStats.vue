<template>
  <div class="task-stats">
    <div class="stat-card">
      <h3>{{ tasksStore.totalTasks }}</h3>
      <p>Total Tasks</p>
    </div>
    
    <div class="stat-card">
      <h3>{{ tasksStore.activeCount }}</h3>
      <p>Active</p>
    </div>
    
    <div class="stat-card">
      <h3>{{ tasksStore.completedCount }}</h3>
      <p>Completed</p>
    </div>
    
    <div class="stat-card">
      <h3>{{ completionRate }}%</h3>
      <p>Completion Rate</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTasksStore } from '../stores/task'

const tasksStore = useTasksStore()

const completionRate = computed(() => {
  if (tasksStore.totalTasks === 0) return 0
  return Math.round((tasksStore.completedCount / tasksStore.totalTasks) * 100)
})
</script>

<style scoped>
.task-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-bottom: 30px;
}

.stat-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
}

.stat-card h3 {
  font-size: 32px;
  margin: 0 0 8px 0;
}

.stat-card p {
  margin: 0;
  opacity: 0.9;
  font-size: 14px;
}
</style>