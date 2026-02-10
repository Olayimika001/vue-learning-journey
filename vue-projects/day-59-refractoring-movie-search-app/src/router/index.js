import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import MovieDetails from '../views/MovieDetails.vue'

const routes = [
	{ path: '/', name: 'home', component: HomeView },
	{ path: '/favorites', name: 'favorites', component: FavoritesView },
	{ path: '/movie/:id', name: 'movie', component: MovieDetails, props: true }
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router
