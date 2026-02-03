import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', {
  state: () => ({
    currentFilter: 'all'  // 'all', 'active', 'completed'
  }),
  
  actions: {
    setFilter(filter) {
      this.currentFilter = filter
    }
  },
  
  persist: true  // Remember selected filter
})