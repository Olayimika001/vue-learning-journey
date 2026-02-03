import { defineStore } from 'pinia'
import { useUserStore } from './user'

export const useTodoStore = defineStore('todos', {
  state: () => ({
    todos: [],
    loading: false,
    error: null
  }),

  getters: {
    completedTodos: (state) => {
      return state.todos.filter((todo) => todo.completed)
    },
    activeTodos: (state) => {
      return state.todos.filter((todo) => !todo.completed)
    }
  },

  actions: {
    async fetchTodos() {
      this.loading = true
      this.error = null
      
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        const data = await res.json()
        this.todos = data
      } catch (error) {
        this.error = 'Failed to fetch todos'
      } finally {
        this.loading = false
      }
    },
    
    addTodo(title) {
      const userStore = useUserStore()
      
      if (!userStore.isLoggedIn) {
        alert('Please log in to add a todo.')
        return
      }
      
      const newTodo = {
        id: Date.now(),
        title,
        completed: false,
        userId: userStore.user.id
      }
      
      this.todos.push(newTodo)
    },
    
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    
    toggleComplete(id) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  },
  
  persist: {
       paths: ['todos']
     }
})