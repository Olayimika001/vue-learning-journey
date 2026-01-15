<template>
  <div class="container">
    <h1>Blog Posts</h1>
    
    <div v-for="post in posts" :key="post.id" class="post-card">
      <h2>{{ post.title }}</h2>
      <p class="meta"><em>By {{ post.author }} on {{ post.date }}</em></p>
      <p class="excerpt">{{ post.excerpt }}</p>
      <router-link :to="{ name: 'PostDetail', params: { id: post.id } }" class="read-more">
        Read More →
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 1,
    title: "My First Week with Vue",
    excerpt: "Learning Vue has been an amazing journey. The reactive system just makes sense!",
    content: "Full blog post content here. Learning Vue has been an incredible experience. The way Vue handles reactivity is intuitive and powerful. Coming from vanilla JavaScript, I was amazed at how much easier it is to build interactive UIs. The component system makes code organization a breeze, and the documentation is fantastic. I can't wait to learn more advanced concepts like routing and state management. This first week has been challenging but rewarding, and I'm excited to continue this journey.",
    author: "Makima",
    date: "2026-01-10"
  },
  {
    id: 2,
    title: "Understanding Vue Router",
    excerpt: "Vue Router makes it easy to create dynamic routes and build single-page applications.",
    content: "Full blog post content here. Vue Router has completely changed how I think about navigation in web applications. The ability to create dynamic routes with parameters is incredibly powerful. I built a blog system where each post has its own URL, all handled by a single component! The concept of route params, named routes, and programmatic navigation opened up so many possibilities. Navigation guards will be next on my learning list. Single-page applications suddenly make so much more sense now.",
    author: "Makima",
    date: "2026-01-15"
  },
  {
    id: 3,
    title: "Vue Components and Props",
    excerpt: "Learn about Vue components and how to pass props for reusable, maintainable code.",
    content: "Full blog post content here. Components are the building blocks of Vue applications, and understanding props is crucial for creating reusable code. I learned how to pass data from parent to child components, validate prop types, and set default values. The emit system for child-to-parent communication is elegant and makes sense. Creating a component library taught me the importance of thinking about reusability from the start. Props and events are the foundation of component architecture in Vue.",
    author: "Makima",
    date: "2026-01-20"
  }
])
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

.post-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.post-card h2 {
  margin-top: 0;
  color: #2c3e50;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}

.meta {
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.excerpt {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.read-more {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.3s;
}

.read-more:hover {
  background: #35a372;
}
</style>