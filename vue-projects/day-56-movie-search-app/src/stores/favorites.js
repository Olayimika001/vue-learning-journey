import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]')
  }),

  getters: {
    isFavorite: (state) => (imdbID) => {
      return state.favorites.some(m => m.imdbID === imdbID)
    }
  },

  actions: {
    addFavorite(movie) {
      if (!this.favorites.some(m => m.imdbID === movie.imdbID)) {
        this.favorites.push(movie)
        this._save()
      }
    },

    removeFavorite(imdbID) {
      this.favorites = this.favorites.filter(m => m.imdbID !== imdbID)
      this._save()
    },

    toggleFavorite(movie) {
      if (this.isFavorite(movie.imdbID)) {
        this.removeFavorite(movie.imdbID)
      } else {
        this.addFavorite(movie)
      }
    },

    _save() {
      try {
        localStorage.setItem('favorites', JSON.stringify(this.favorites))
      } catch (err) {
        // ignore storage errors
      }
    }
  }
})
