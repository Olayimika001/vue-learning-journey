import { defineStore } from 'pinia'
import { useFilterStore } from './filter'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: []
    // Each task: { id, title, completed, createdAt }
  }),
  
  getters: {
    // All tasks that are NOT completed
    activeTasks: (state) => {
      return state.tasks.filter(task => !task.completed)
    },
    
    // All tasks that ARE completed
    completedTasks: (state) => {
      return state.tasks.filter(task => task.completed)
    },
    
    // Filter tasks based on current filter
    filteredTasks: (state) => {
      const filterStore = useFilterStore()
      
      if (filterStore.currentFilter === 'active') {
        return state.tasks.filter(task => !task.completed)
      }
      
      if (filterStore.currentFilter === 'completed') {
        return state.tasks.filter(task => task.completed)
      }
      
      return state.tasks  // 'all'
    },
    
    // Statistics
    totalTasks: (state) => state.tasks.length,
    activeCount: (state) => state.tasks.filter(t => !t.completed).length,
    completedCount: (state) => state.tasks.filter(t => t.completed).length
  },
  
  actions: {
    addTask(title) {
      const newTask = {
        id: Date.now(),
        title,
        completed: false,
        createdAt: new Date().toISOString()
      }
      this.tasks.push(newTask)
    },
    
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    },
    
    toggleComplete(id) {
      const task = this.tasks.find(t => t.id === id)
      if (task) {
        task.completed = !task.completed
      }
    },
    
    clearCompleted() {
      this.tasks = this.tasks.filter(task => !task.completed)
    }
  },
  
  persist: {
    paths: ['tasks']  // Only persist tasks, not computed values
  }
})