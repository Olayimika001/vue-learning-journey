<template>
  <div class="blog-post-card">
    <h3 class="title">{{ title }}</h3>
    
    <div class="meta">
      <span class="category-badge" :class="categoryClass">{{ category }}</span>
      <span class="author">By {{ author }}</span>
    </div>
    
    <p class="content">{{ content }}</p>
    
    <div class="actions">
      <button @click="handleLike" class="like-btn">
        ❤️ Like ({{ likes }})
      </button>
      <span class="comments">💬 {{ comments }} Comments</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: {
    type: Number,
    default: 0
  }
});

// Define emits - what events this component can send
const emit = defineEmits(['like-post']);

// Handle like button click
const handleLike = () => {
  // Emit event to parent with the post ID
  emit('like-post', props.id);
};

// Computed property for dynamic category badge styling
const categoryClass = computed(() => {
  return `category-${props.category.toLowerCase()}`;
});
</script>

<style scoped>
.blog-post-card {
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

.blog-post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.title {
  font-size: 1.5rem;
  margin: 0 0 15px 0;
  color: #333;
}

.meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.category-badge {
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 600;
  color: white;
}

/* Different colors for different categories */
.category-tech {
  background-color: #2196F3;
}

.category-lifestyle {
  background-color: #FF9800;
}

.category-travel {
  background-color: #4CAF50;
}

.author {
  font-size: 0.9rem;
  color: #666;
}

.content {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
  flex-grow: 1;
}

.actions {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: auto;
}

.like-btn {
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.like-btn:hover {
  background-color: #ff5252;
  transform: scale(1.05);
}

.like-btn:active {
  transform: scale(0.95);
}

.comments {
  font-size: 0.9rem;
  color: #777;
}
</style>