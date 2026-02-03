import { defineStore } from 'pinia'

export const useGreetingStore = defineStore('greet', {
  state: () => ({
    message: "Hello from Pinia!",
    userName: "Makima"
  })
})


