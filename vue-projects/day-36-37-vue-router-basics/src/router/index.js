import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Project.vue'

const routes = [
  { 
    path: '/',        
    component: Home, 
    name: 'Home'  
  },
  { 
    path: '/about', 
    component: About,
    name: 'About' 
  },
  {
    path: '/projects',
    component: Projects,
    name: 'Projects',
  }
]

const router = createRouter({
  history: createWebHistory(),  
  routes
})

export default router
