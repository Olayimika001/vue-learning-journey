<template>
  <div class="container">
    <h1>My Projects</h1>
    <div class="projects">
        <div class="project-card">
            <h2>Todo List Application</h2>
            <p>A task management app with add, delete, and complete functionality. Features local storage persistence and filter options.</p>
            <p>Technologies:
                <span>Vue.js, JavaScript, CSS</span>
            </p>
        </div>
        <div class="project-card">
            <h2>Weather Dashboard</h2>
            <p>A weather application that fetches data from a public API to display current weather conditions and a 5-day forecast for any city.</p>
            <p>Technologies:
                <span>Vue.js, Axios, CSS</span>
            </p>
        </div>
        <div class="project-card">
            <h2>Quiz Application</h2>
            <p>Interactive quiz app with multiple-choice questions, score tracking, and instant feedback. Includes restart functionality and percentage calculation</p>
            <p>Technologies:
                <span>Vue.js, Computed Properties, Conditional Rendering</span>
            </p>
    </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped>
.container {
  padding: 2rem;
  text-align: center;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
}

.project-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.project-card h2 {
  margin-top: 0;
  color: #42b983;
}

.project-card p {
  margin: 0.5rem 0;
}

.project-card span {
  font-weight: bold;
}


</style>