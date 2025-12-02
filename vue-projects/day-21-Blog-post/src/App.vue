<template>
  <div class="container">
    <h1>My Blog</h1>

    <!-- Filter Buttons -->
    <div class="filter-buttons">
      <button 
        @click="currentFilter = 'All'" 
        :class="{ active: currentFilter === 'All' }"
      >
        All
      </button>
      <button 
        @click="currentFilter = 'Tech'" 
        :class="{ active: currentFilter === 'Tech' }"
      >
        Tech
      </button>
      <button 
        @click="currentFilter = 'Lifestyle'" 
        :class="{ active: currentFilter === 'Lifestyle' }"
      >
        Lifestyle
      </button>
      <button 
        @click="currentFilter = 'Travel'" 
        :class="{ active: currentFilter === 'Travel' }"
      >
        Travel
      </button>
    </div>

    <div class="blog-grid">
      <BlogPost 
        v-for="post in filteredPosts" 
        :key="post.id" 
        v-bind="post"
        @like-post="handleLike"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BlogPost from './components/BlogPost.vue';

// All blog posts data
const posts = ref([
  {
    id: 1,
    title: 'My journey with Vue',
    author: 'Jane Doe',
    category: 'Tech',
    content: 'Vue.js has been an amazing framework to work with. The learning curve is gentle and the documentation is excellent!',
    likes: 0,
    comments: 3
  },
  {
    id: 2,
    title: 'Understanding Reactivity in Vue',
    author: 'John Doe',
    category: 'Tech',
    content: 'Reactivity is one of the core features of Vue.js that makes building interactive UIs so much easier.',
    likes: 0,
    comments: 5
  },
  {
    id: 3,
    title: 'Building a Blog with Vue',
    author: 'Jane Smith',
    category: 'Lifestyle',
    content: 'Building a blog with Vue.js is a great way to learn the framework while creating something useful.',  
    likes: 0,
    comments: 2
  },
  {
    id: 4,
    title: 'My Travel Adventures in Europe',
    author: 'Mike Johnson',
    category: 'Travel',
    content: 'Last summer I visited 5 different countries in Europe. Each had its own unique charm and culture!',  
    likes: 0,
    comments: 8
  },
  {
    id: 5,
    title: 'Healthy Living Tips',
    author: 'Sarah Williams',
    category: 'Lifestyle',
    content: 'Here are my top 10 tips for maintaining a healthy lifestyle in our busy modern world.',  
    likes: 0,
    comments: 12
  }
]);

// Current selected filter
const currentFilter = ref('All');

// Computed property - filters posts based on selected category
const filteredPosts = computed(() => {
  if (currentFilter.value === 'All') {
    return posts.value; // Return all posts
  }
  // Return only posts that match the selected category
  return posts.value.filter(post => post.category === currentFilter.value);
});

// Handle like button click from child component
const handleLike = (postId) => {
  // Find the post with this ID
  const post = posts.value.find(p => p.id === postId);
  // If found, increment its likes count
  if (post) {
    post.likes++;
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
  color: #333;
}

/* Filter Buttons Styling */
.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.filter-buttons button {
  padding: 10px 20px;
  border: 2px solid #ddd;
  background-color: white;
  color: #555;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.filter-buttons button:hover {
  border-color: #4CAF50;
  color: #4CAF50;
}

.filter-buttons button.active {
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

/* Blog Posts Grid */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
</style>