import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  
  getters: {
    doubleCount: (state) => state.count * 2,
    squared: (state) => state.count * state.count,
    isPositive: (state) => state.count > 0
  },

  actions: {
    increment() {
      this.count++
    }, 
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    }
  }
})