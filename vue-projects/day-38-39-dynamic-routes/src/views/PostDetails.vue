<template>
  <div class="container">
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <p class="meta"><em>By {{ post.author }} on {{ post.date }}</em></p>
      
      <div class="content">
        {{ post.content }}
      </div>
      
      <!-- Previous/Next Navigation -->
      <div class="post-navigation">
        <router-link 
          v-if="previousPost"
          :to="{ name: 'PostDetail', params: { id: previousPost.id } }"
          class="nav-button prev"
        >
          ← {{ previousPost.title }}
        </router-link>
        <span v-else class="nav-button disabled">← No previous post</span>
        
        <router-link 
          v-if="nextPost"
          :to="{ name: 'PostDetail', params: { id: nextPost.id } }"
          class="nav-button next"
        >
          {{ nextPost.title }} →
        </router-link>
        <span v-else class="nav-button disabled">No next post →</span>
      </div>
      
      <router-link to="/blog" class="back-link">← Back to All Posts</router-link>
    </div>
    
    <div v-else class="not-found">
      <h2>Post not found</h2>
      <p>The post you're looking for doesn't exist.</p>
      <router-link to="/blog" class="back-link">← Back to Blog</router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'

const route = useRoute()

// Same posts data as Blog.vue
const posts = ref([
  {
    id: 1,
    title: "My First Week with Vue",
    excerpt: "Learning Vue has been an amazing journey. The reactive system just makes sense!",
    content: "Learning Vue has been an incredible experience. The way Vue handles reactivity is intuitive and powerful. Coming from vanilla JavaScript, I was amazed at how much easier it is to build interactive UIs. The component system makes code organization a breeze, and the documentation is fantastic. I can't wait to learn more advanced concepts like routing and state management. This first week has been challenging but rewarding, and I'm excited to continue this journey.",
    author: "Makima",
    date: "2026-01-10"
  },
  {
    id: 2,
    title: "Understanding Vue Router",
    excerpt: "Vue Router makes it easy to create dynamic routes and build single-page applications.",
    content: "Vue Router has completely changed how I think about navigation in web applications. The ability to create dynamic routes with parameters is incredibly powerful. I built a blog system where each post has its own URL, all handled by a single component! The concept of route params, named routes, and programmatic navigation opened up so many possibilities. Navigation guards will be next on my learning list. Single-page applications suddenly make so much more sense now.",
    author: "Makima",
    date: "2026-01-15"
  },
  {
    id: 3,
    title: "Vue Components and Props",
    excerpt: "Learn about Vue components and how to pass props for reusable, maintainable code.",
    content: "Components are the building blocks of Vue applications, and understanding props is crucial for creating reusable code. I learned how to pass data from parent to child components, validate prop types, and set default values. The emit system for child-to-parent communication is elegant and makes sense. Creating a component library taught me the importance of thinking about reusability from the start. Props and events are the foundation of component architecture in Vue.",
    author: "Makima",
    date: "2026-01-20"
  }
])

// Find the current post
const post = computed(() => {
  const id = Number(route.params.id)
  if (isNaN(id) || id < 1) {
    return null
  }
  return posts.value.find(p => p.id === id)
})

// Get current post index
const currentIndex = computed(() => {
  return posts.value.findIndex(p => p.id === Number(route.params.id))
})

// Get previous post
const previousPost = computed(() => {
  if (currentIndex.value > 0) {
    return posts.value[currentIndex.value - 1]
  }
  return null
})

// Get next post
const nextPost = computed(() => {
  if (currentIndex.value >= 0 && currentIndex.value < posts.value.length - 1) {
    return posts.value[currentIndex.value + 1]
  }
  return null
})
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  min-height: calc(100vh - 80px);
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.meta {
  color: #999;
  display: block;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #eee;
}

.content {
  margin: 2rem 0;
  line-height: 1.8;
  color: #333;
  font-size: 1.1rem;
}

.post-navigation {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 3rem 0 2rem 0;
  padding: 1.5rem 0;
  border-top: 2px solid #eee;
  border-bottom: 2px solid #eee;
}

.nav-button {
  flex: 1;
  padding: 0.75rem 1rem;
  background: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  transition: background 0.3s;
  display: block;
}

.nav-button:hover {
  background: #35a372;
}

.nav-button.disabled {
  background: #ccc;
  cursor: not-allowed;
}

.nav-button.prev {
  text-align: left;
}

.nav-button.next {
  text-align: right;
}

.back-link {
  display: inline-block;
  margin-top: 1rem;
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}

.back-link:hover {
  text-decoration: underline;
}

.not-found {
  text-align: center;
  padding: 4rem 2rem;
}

.not-found h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.not-found p {
  color: #666;
  margin-bottom: 2rem;
}
</style>