<template>
  <div class="user-list-container">
    <h2 v-if="title">{{ title }}</h2>
    <div class="user-list">
      <div v-for="user in users" :key="user.id" class="user-item">
        <slot name="user" :user="user">
          <div class="default-user">
            <p>{{ user.name }}</p>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  users: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.user-list-container {
  margin-bottom: 40px;
}

.user-list-container h2 {
  margin-bottom: 20px;
  color: #333;
  font-size: 1.5rem;
}

.user-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.user-item {
  /* Let parent control the item styling through slot */
}

.default-user {
  padding: 10px;
  background: #f0f0f0;
  border-radius: 5px;
}
</style>