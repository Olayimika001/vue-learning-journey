<template>
  <li class="task-item" :class="{ completed: task.completed }">
    <input
      type="checkbox"
      :checked="task.completed"
      @change="tasksStore.toggleComplete(task.id)"
    />
    
    <span class="task-title">{{ task.title }}</span>
    
    <button class="delete-btn" @click="tasksStore.deleteTask(task.id)">
      ×
    </button>
  </li>
</template>

<script setup>
import { useTasksStore } from '../stores/task'

defineProps({
  task: {
    type: Object,
    required: true
  }
})

const tasksStore = useTasksStore()
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: all 0.3s;
}

.task-item:hover {
  border-color: #42b983;
  box-shadow: 0 2px 8px rgba(66, 185, 131, 0.1);
}

.task-item.completed {
  opacity: 0.6;
}

input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.task-title {
  flex: 1;
  font-size: 16px;
}

.task-item.completed .task-title {
  text-decoration: line-through;
  color: #999;
}

.delete-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: #ff4444;
  color: white;
  border-radius: 6px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.delete-btn:hover {
  background: #cc0000;
}
</style>