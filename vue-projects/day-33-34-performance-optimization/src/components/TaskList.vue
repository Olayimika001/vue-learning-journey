<template>
  <div class="container">
    <!-- Static header with v-once -->
    <div v-once class="header">
      <h1>{{ appTitle }}</h1>
      <p>{{ appDescription }}</p>
    </div>

    <!-- Stats -->
    <div class="stats">
      <p>Total Tasks: {{ tasks.length }}</p>
      <p>Completed: {{ completedCount }}</p>
    </div>

    <!-- Task list with v-memo -->
    <div class="tasks">
      <div 
        v-for="task in tasks" 
        :key="task.id"
        v-memo="[task.completed, task.title]"
        class="task"
        @click="logRender(task.id)"
      >
        <input 
          type="checkbox" 
          v-model="task.completed"
          @click.stop
        >
        <span :class="{ completed: task.completed }">
          {{ task.title }}
        </span>
      </div>
    </div>

    <button @click="addTask" class="add-btn">Add Task</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Static data (for v-once)
const appTitle = ref('Tasks');
const appDescription = ref('v-once and v-memo');

// Dynamic data
const tasks = ref([
  { id: 1, title: 'Learn v-once', completed: false },
  { id: 2, title: 'Learn v-memo', completed: false },
  { id: 3, title: 'Build optimized app', completed: false },
]);

// const globalCounter = ref(0);
let taskIdCounter = 6;

// Computed
const completedCount = computed(() => 
  tasks.value.filter(t => t.completed).length
);

// Methods
const addTask = () => {
  tasks.value.push({
    id: taskIdCounter++,
    title: `New Task ${taskIdCounter}`,
    completed: false
  });
};

const logRender = (taskId) => {
  console.log(`Task ${taskId} rendered at`, new Date().toLocaleTimeString());
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 10px;
    border: 1px solid #ddd;
    border-radius: 12px;
}

.header {
  text-align: center;
  /* margin-bottom: 30px; */
  padding: 20px;
  background: linear-gradient(135deg, #42b883 0%, #35a372 100%);
  color: white;
  border-radius: 12px;
}

.header h1 {
  margin: 0 0 10px 0;
}

.header p {
  margin: 0;
  opacity: 0.9;
}

.stats {
  background: #f5f5f5;
  padding: 15px;
  /* border-radius: 8px; */
  /* margin-bottom: 20px; */
}

.stats p {
  margin: 5px 0;
}

.stats button {
  margin-top: 10px;
  padding: 8px 16px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.stats button:hover {
  background: #35a372;
}

.tasks {
  margin-bottom: 20px;
}

.task {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.task:hover {
  background-color: #f9f9f9;
}

.task input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.task span {
  flex: 1;
  transition: all 0.3s;
}

.task span.completed {
  text-decoration: line-through;
  color: #999;
}

.add-btn {
  width: 100%;
  padding: 12px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.add-btn:hover {
  background: #35a372;
}
</style>