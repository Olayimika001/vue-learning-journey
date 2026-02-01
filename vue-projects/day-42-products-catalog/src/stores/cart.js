// stores/cart.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart')) || []
  }),
  
  getters: {
    // Total number of items in cart
    totalItems: (state) => {
      return state.items.reduce((sum, item) => sum + item.quantity, 0)
    },
    
    // Subtotal (before tax)
    subtotal: (state) => {
      return state.items.reduce((sum, item) => {
        return sum + (item.price * item.quantity)
      }, 0)
    },
    
    // Tax (10%)
    tax: (state) => {
      return state.items.reduce((sum, item) => {
        return sum + (item.price * item.quantity)
      }, 0) * 0.1
    },
    
    // Total (subtotal + tax)
    total() {
      return this.subtotal + this.tax
    },
    
    // Check if product is in cart
    isInCart: (state) => {
      return (productId) => {
        return state.items.some(item => item.id === productId)
      }
    },
    
    // Get item quantity
    getItemQuantity: (state) => {
      return (productId) => {
        const item = state.items.find(item => item.id === productId)
        return item ? item.quantity : 0
      }
    }
  },
  
  actions: {
    // Add item to cart
    addItem(product) {
      const existingItem = this.items.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        })
      }
      
      this.saveToLocalStorage()
    },
    
    // Remove item from cart
    removeItem(productId) {
      this.items = this.items.filter(item => item.id !== productId)
      this.saveToLocalStorage()
    },
    
    // Increase quantity
    increaseQuantity(productId) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        item.quantity++
        this.saveToLocalStorage()
      }
    },
    
    // Decrease quantity
    decreaseQuantity(productId) {
      const item = this.items.find(item => item.id === productId)
      if (item && item.quantity > 1) {
        item.quantity--
        this.saveToLocalStorage()
      }
    },
    
    // Clear cart
    clearCart() {
      this.items = []
      this.saveToLocalStorage()
    },
    
    // Save to localStorage
    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.items))
    }
  }
})