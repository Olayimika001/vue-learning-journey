import { ref } from 'vue'
import axios from 'axios'

export function useFetch(url, options = {}) {
  // State
  const data = ref(null)  // Changed to null
  const loading = ref(false)
  const error = ref(null)
  
  // Function to fetch
  async function fetchData() {
    loading.value = true
    error.value = null
    
    try {
      const response = await axios.get(url)
      data.value = response.data
    } catch (err) {
      error.value = err.message  // Better to use err.message
    } finally {
      loading.value = false
    }
  }
  
  // If options.immediate is true, fetch right away
  if (options.immediate) {
    fetchData()
  }
  
  return { data, loading, error, fetchData }
}