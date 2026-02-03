import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    user: null 
  }),
  
  actions: {
    login(name) {
      this.isLoggedIn = true
      this.user = {
        id: Date.now(),
        name: name
      }
    },
    
    logout() {
      this.isLoggedIn = false
      this.user = null
    }
  },

   persist: true
})