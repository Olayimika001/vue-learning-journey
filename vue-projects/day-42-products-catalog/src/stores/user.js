// stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true'
  }),
  
  getters: {
    username: (state) => state.user?.username || 'Guest',
    email: (state) => state.user?.email || ''
  },
  
  actions: {
    login(username, password) {
      // Simulate login (in real app, call API)
      const userData = {
        username,
        email: `${username}@example.com`,
        id: Date.now()
      }
      
      this.user = userData
      this.isLoggedIn = true
      
      localStorage.setItem('user', JSON.stringify(userData))
      localStorage.setItem('isLoggedIn', 'true')
    },
    
    logout() {
      this.user = null
      this.isLoggedIn = false
      
      localStorage.removeItem('user')
      localStorage.removeItem('isLoggedIn')
    }
  }
})