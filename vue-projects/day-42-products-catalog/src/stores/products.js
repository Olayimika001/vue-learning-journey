import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: "Wireless Headphones",
        price: 79.99,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        description: "High-quality wireless headphones with active noise cancellation and 30-hour battery life.",
        specs: ["Bluetooth 5.0", "30h Battery", "Noise Cancelling", "Foldable"]
      },
      {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
        description: "Feature-rich smartwatch with fitness tracking and heart rate monitoring.",
        specs: ["Heart Rate Monitor", "GPS", "Waterproof", "7-Day Battery"]
      },
      {
        id: 3,
        name: "Running Shoes",
        price: 89.99,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
        description: "Comfortable running shoes with excellent cushioning and support.",
        specs: ["Breathable", "EVA Cushioning", "Lightweight", "Non-Slip"]
      },
      {
        id: 4,
        name: "Laptop Backpack",
        price: 49.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
        description: "Durable laptop backpack with USB charging port and water-resistant material.",
        specs: ["USB Port", "Water Resistant", "Laptop Compartment", "Multiple Pockets"]
      },
      {
        id: 5,
        name: "Vue.js Book",
        price: 29.99,
        category: "books",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop",
        description: "Complete guide to mastering Vue.js from beginner to advanced.",
        specs: ["400+ Pages", "Code Examples", "Advanced Patterns", "Project-Based"]
      },
      {
        id: 6,
        name: "Mechanical Keyboard",
        price: 129.99,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop",
        description: "RGB mechanical keyboard with Cherry MX switches.",
        specs: ["Cherry MX", "RGB Backlight", "Programmable", "Aluminum Frame"]
      },
      {
        id: 7,
        name: "Cotton T-Shirt",
        price: 19.99,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
        description: "Premium 100% cotton t-shirt in multiple colors.",
        specs: ["100% Cotton", "Machine Washable", "Pre-Shrunk", "Multiple Colors"]
      },
      {
        id: 8,
        name: "Phone Case",
        price: 14.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=300&fit=crop",
        description: "Protective phone case with military-grade drop protection.",
        specs: ["Shockproof", "Slim", "Wireless Charging", "Raised Edges"]
      }
    ],
    categories: [
      { name: 'all', label: 'All Products', icon: '🛍️' },
      { name: 'electronics', label: 'Electronics', icon: '💻' },
      { name: 'clothing', label: 'Clothing', icon: '👕' },
      { name: 'accessories', label: 'Accessories', icon: '🎒' },
      { name: 'books', label: 'Books', icon: '📚' }
    ],
    selectedCategory: 'all'
  }),
  
  getters: {
    // Get filtered products by category
    filteredProducts: (state) => {
      if (state.selectedCategory === 'all') {
        return state.products
      }
      return state.products.filter(p => p.category === state.selectedCategory)
    },
    
    // Get product by ID
    getProductById: (state) => {
      return (id) => state.products.find(p => p.id === Number(id))
    },
    
    // Get products by category
    getProductsByCategory: (state) => {
      return (category) => {
        if (category === 'all') return state.products
        return state.products.filter(p => p.category === category)
      }
    }
  },
  
  actions: {
    // Set selected category
    setCategory(category) {
      this.selectedCategory = category
    }
  }
})