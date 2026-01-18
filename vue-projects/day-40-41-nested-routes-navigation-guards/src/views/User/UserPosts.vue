<template>
  <div class="posts">
    <h1>My Posts</h1>
    
    <div v-for="post in posts" :key="post.id" class="post-item">
      <h3>{{ post.title }}</h3>
      <p>{{ post.excerpt }}</p>
      <div class="post-meta">
        <span>{{ post.date }}</span>
        <span>{{ post.views }} views</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 1,
    title: "My First Week with Vue",
    excerpt: "Learning Vue has been an amazing journey...",
    date: "2026-01-10",
    views: 150
  },
  {
    id: 2,
    title: "Understanding Vue Router",
    excerpt: "Vue Router makes it easy to create dynamic routes...",
    date: "2026-01-15",
    views: 203
  },
  {
    id: 3,
    title: "Vue Components and Props",
    excerpt: "Learn about Vue components and how to pass props...",
    date: "2026-01-20",
    views: 178
  }
])
</script>

<style scoped>
.posts {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.posts h1 {
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.post-item {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border-left: 4px solid #42b983;
}

.post-item h3 {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.post-item p {
  color: #666;
  margin-bottom: 0.5rem;
}

.post-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: #999;
}
</style>