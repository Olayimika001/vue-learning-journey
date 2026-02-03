<template>
  <div class="container">
    <!-- Login/Logout Section -->
    <div class="log-in-out">
      <div v-if="!userStore.isLoggedIn" class="login">
        <input
          type="text"
          v-model="loginName"
          placeholder="Enter your name"
        />
        <button @click="handleLogin">Log In</button>
      </div>
      
      <div v-else class="logout">
        <p>Welcome, {{ userStore.user.name }}!</p>
        <button @click="userStore.logout()">Log Out</button>
      </div>
    </div>

    <!-- Todo App Section -->
    <div class="todoapp">
      <h1>Todo App</h1>
      
      <!-- Fetch Todos Button -->
      <button @click="todoStore.fetchTodos()">Fetch Todos</button>
      
      <!-- Loading State -->
      <p v-if="todoStore.loading">Loading todos...</p>
      
      <!-- Error State -->
      <p v-if="todoStore.error" class="error-message">{{ todoStore.error }}</p>
      
      <!-- Add Todo -->
      <div class="add-todo">
        <input
          type="text"
          v-model="newTodoTitle"
          placeholder="What needs to be done?"
          @keyup.enter="addNewTodo"
        />
        <button @click="addNewTodo">Add Todo</button>
      </div>
      
      <!-- Todo List -->
      <ul class="todo-list">
        <li v-for="todo in todoStore.todos" :key="todo.id">
          <input
            type="checkbox"
            :checked="todo.completed"
            @change="todoStore.toggleComplete(todo.id)"
          />
          <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
          <button @click="todoStore.deleteTodo(todo.id)">Delete</button>
        </li>
      </ul>
      
      <!-- Stats -->
      <div class="stats">
        <p>Active: {{ todoStore.activeTodos.length }}</p>
        <p>Completed: {{ todoStore.completedTodos.length }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user.js'
import { useTodoStore } from '../stores/todos.js'

const userStore = useUserStore()
const todoStore = useTodoStore()

// Local component state
const loginName = ref('')
const newTodoTitle = ref('')

function handleLogin() {
  if (loginName.value.trim()) {
    userStore.login(loginName.value)
    loginName.value = ''  // Clear input
  }
}

function addNewTodo() {
  if (newTodoTitle.value.trim()) {
    todoStore.addTodo(newTodoTitle.value)
    newTodoTitle.value = ''  // Clear input
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.log-in-out {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.login input {
  margin-right: 10px;
  padding: 5px;
}

.logout {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todoapp {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
}

.add-todo {
  margin: 20px 0;
}

.add-todo input {
  width: 70%;
  padding: 8px;
  margin-right: 10px;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 10px;
}

.completed {
  text-decoration: line-through;
  color: #888;
}

.error-message {
  color: red;
  padding: 10px;
  background: #fee;
  border-radius: 4px;
}

.stats {
  margin-top: 20px;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 4px;
}

button {
  padding: 8px 15px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #359268;
}

.logout button {
  background: #f44336;
}

.logout button:hover {
  background: #d32f2f;
}
</style>