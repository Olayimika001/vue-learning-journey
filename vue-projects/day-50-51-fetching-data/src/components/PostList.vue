<template>
  <div class="container">
    <div class="loading" v-if="loading">
        <p>Loading posts...</p>
    </div>
    <div class="error" v-if="error">
        <p>Error: {{ error }}</p>
    </div>
    <div class="controls">
  <button @click="fetchPosts" :disabled="loading">
    {{ loading ? 'Loading...' : 'Refresh Posts' }}
  </button>
</div>
    <ul v-if="!loading && !error && posts.length">
        <li v-for="post in posts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const posts = ref([]);
const loading = ref(false);
const error = ref(null);

const fetchPosts = async () => {
  loading.value = true;
  error.value = null;
  
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
    posts.value = response.data;
  } catch (err) {
    error.value = 'Failed to fetch posts. Please try again.';
    console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.loading, .error {
  text-align: center;
  margin: 20px 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
}

h3 {
  margin: 0 0 10px 0;
}

p {
  margin: 0;
}

.error {
  color: red;
}

.loading {
  color: gray;
}

.controls {
  text-align: center;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background: #359268;
}
</style>