import { defineStore } from 'pinia'
import axios from 'axios'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [],
    loading: false,
    error: null
  }),
  
  actions: {
    async searchMovies(title) {
      this.loading = true
      this.error = null
      
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=28d9533d&s=${title}`)
        
        if (response.data.Response === "False") {
          this.error = response.data.Error
          this.movies = []
        } else {
          this.movies = response.data.Search
        }
      } catch (err) {
        this.error = "An error occurred while fetching movie data."
      } finally {
        this.loading = false
      }
    }
  }
})