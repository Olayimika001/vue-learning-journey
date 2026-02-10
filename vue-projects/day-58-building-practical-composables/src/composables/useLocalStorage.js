import { ref, watch } from 'vue'

export function useLocalStorage(key, defaultValue) {
  // Try to read from localStorage
  const storedValue = localStorage.getItem(key)
  
  // If exists, parse it; otherwise use default
  const value = ref(storedValue ? JSON.parse(storedValue) : defaultValue)
  
  // Watch for changes and save to localStorage
  watch(value, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
  }, { deep: true })
  
  return value
}