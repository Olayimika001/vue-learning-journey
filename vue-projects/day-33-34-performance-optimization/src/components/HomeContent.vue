<template>
  <div class="home">
    <h2>🏠 Welcome Home</h2>
    <p>This component loads immediately (not lazy loaded)</p>
    <div class="cards">
      <div class="card">
        <h3>📊 Analytics</h3>
        <p>View your data and insights</p>
      </div>
      <div class="card">
        <h3>⚙️ Settings</h3>
        <p>Configure your preferences</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  color: #42b883;
  margin-bottom: 30px;
}

h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card h3 {
  margin-bottom: 10px;
  color: #42b883;
}

.card p {
  color: #666;
}
</style>