<template>
  <div class="container">
    <h1>Posts</h1>
    <div class="form">
      <h2 v-if="!editingPost">Title</h2>
      <h2 v-else>Edit Post</h2>
      <input type="text" v-model="newPostTitle">
      <h2>Body</h2>
      <textarea v-model="newPostBody"></textarea>
      <div style="display:flex; gap:8px; align-items:center;">
        <button @click="savePost">{{ editingPost ? 'Save Post' : 'Add Post' }}</button>
        <button v-if="editingPost" @click="cancelEdit" style="background:#ef4444;color:#fff;border:none;padding:8px 12px;border-radius:6px;">Cancel</button>
      </div>
    </div>

    <div class="loading">
        <p v-if="loading">Loading posts...</p>
        <p v-else-if="error" class="error">{{ error }}</p>
    </div>

    <div class="posts" v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
        <div class="buttons">
            <button @click="startEdit(post)">Edit</button>
            <button @click="deletePost(post.id)">Delete</button>
        </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'

const posts = ref([])
const loading = ref(false)
const error = ref(null)

const newPostTitle = ref('')
const newPostBody = ref('')

async function fetchPosts() {
    loading.value = true
    error.value = null
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
        posts.value = response.data
    } catch (err) {
        error.value = err.message
    } finally {
        loading.value = false
    }
}

async function createPost() {
  const newPost = {
    title: newPostTitle.value,
    body: newPostBody.value,
    userId: 1
  }
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
    posts.value.unshift(response.data)
    newPostTitle.value = ''
    newPostBody.value = ''
  } catch (err) {
    error.value = err.message
  }
}

async function deletePost(id) {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    posts.value = posts.value.filter(post => post.id !== id)
  } catch (err) {
    error.value = err.message
  }
}

const editingPost = ref(null)

function startEdit(post) {
  editingPost.value = post
  newPostTitle.value = post.title
  newPostBody.value = post.body
}

async function savePost() {
  loading.value = true
  error.value = null
  try {
    if (editingPost.value) {
      const updatedPost = {
        ...editingPost.value,
        title: newPostTitle.value,
        body: newPostBody.value
      }
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${editingPost.value.id}`, updatedPost)
      const index = posts.value.findIndex(p => p.id === editingPost.value.id)
      if (index !== -1) {
        posts.value[index] = response.data
      } else {
        posts.value.unshift(response.data)
      }
      editingPost.value = null
      newPostTitle.value = ''
      newPostBody.value = ''
    } else {
      await createPost()
    }
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

function cancelEdit() {
  editingPost.value = null
  newPostTitle.value = ''
  newPostBody.value = ''
}

onMounted(() => {
    fetchPosts()
})
</script>

<style scoped>
  .container {
    max-width: 900px;
    margin: 22px auto;
    padding: 16px;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    color: #1f2937;
  }

  .loading {
    text-align: center;
    margin-bottom: 12px;
  }

  .error {
    color: #b91c1c;
  }

  .form {
    background: #ffffff;
    border: 1px solid #e6e9ee;
    padding: 14px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(16,24,40,0.04);
    margin-bottom: 16px;
    display: grid;
    gap: 8px;
  }

  .form h2 {
    font-size: 13px;
    margin: 0;
    color: #374151;
  }

  .form input,
  .form textarea {
    width: 90%;
    padding: 8px 10px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 14px;
    color: #111827;
  }

  .form textarea {
    min-height: 84px;
    resize: vertical;
  }

  .form button {
    justify-self: start;
    padding: 8px 12px;
    background: #3b82f6;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  .form button:hover {
    background: #2563eb;
  }

  .posts {
    background: #ffffff;
    border: 1px solid #e6e9ee;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .posts h3 {
    margin: 0 0 6px 0;
    font-size: 16px;
    color: #0f172a;
  }

  .posts p {
    margin: 0 0 8px 0;
    color: #374151;
  }

  .buttons {
    display: flex;
    gap: 8px;
  }

  .buttons button {
    padding: 6px 10px;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
    background: #f9fafb;
    cursor: pointer;
  }

  .buttons button:first-child {
    background: #fef3c7;
    border-color: #facc15;
  }

  .buttons button:hover {
    transform: translateY(-1px);
  }

  @media (max-width: 520px) {
    .container { padding: 10px; }
    .form, .posts { padding: 12px; }
  }
</style>