    import { computed } from 'vue'
import { useMoviesStore } from '../stores/movies'

export function useMovieSearch() {
  const moviesStore = useMoviesStore()
  
  // Computed properties for easier access
  const movies = computed(() => moviesStore.movies)
  const loading = computed(() => moviesStore.loading)
  const error = computed(() => moviesStore.error)
  const hasResults = computed(() => movies.value.length)  // True if movies.length > 0
  const hasNoResults = computed(() => movies.value.length === 0)  // True if searched but no results
  
  // Actions
  async function search(query) {
    clearResults()
    await moviesStore.searchMovies(query)
  }
  
  function clearResults() {
    moviesStore.movies = []
    moviesStore.error = null
  }
  
  return {
    // State
    movies,
    loading,
    error,
    hasResults,
    hasNoResults,
    
    // Actions
    search,
    clearResults
  }
}