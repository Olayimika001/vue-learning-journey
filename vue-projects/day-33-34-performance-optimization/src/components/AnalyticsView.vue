<template>
  <div class="analytics">
    <h2>📊 Analytics Dashboard</h2>
    <p class="subtitle">This component was lazy loaded!</p>
    
    <div class="stats">
      <div class="stat-card">
        <h3>{{ data.length }}</h3>
        <p>Data Points</p>
      </div>
      <div class="stat-card">
        <h3>{{ avgValue.toFixed(2) }}</h3>
        <p>Average Value</p>
      </div>
      <div class="stat-card">
        <h3>{{ maxValue.toFixed(2) }}</h3>
        <p>Max Value</p>
      </div>
    </div>

    <div class="chart-placeholder">
      <p>📈 Chart would go here</p>
      <p class="info">Check Network tab to see this component was loaded on demand!</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const data = ref([]);

// Simulate heavy computation
const avgValue = computed(() => {
  if (data.value.length === 0) return 0;
  return data.value.reduce((sum, item) => sum + item.value, 0) / data.value.length;
});

const maxValue = computed(() => {
  if (data.value.length === 0) return 0;
  return Math.max(...data.value.map(item => item.value));
});

onMounted(async () => {
  console.log('📊 Analytics component mounted!');
  
  // Simulate loading delay (remove in production)
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Generate heavy dataset
  data.value = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    value: Math.random() * 100,
    label: `Data ${i}`
  }));
  
  console.log('📊 Analytics data loaded!');
});
</script>

<style scoped>
.analytics {
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

h2 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.subtitle {
  color: #42b883;
  font-style: italic;
  margin-bottom: 30px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
}

.stat-card h3 {
  font-size: 36px;
  color: #42b883;
  margin-bottom: 10px;
}

.stat-card p {
  color: #666;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.chart-placeholder {
  background: white;
  padding: 60px;
  border-radius: 12px;
  text-align: center;
  border: 2px dashed #ddd;
}

.chart-placeholder p:first-child {
  font-size: 24px;
  margin-bottom: 10px;
}

.info {
  color: #666;
  font-size: 14px;
  font-style: italic;
}
</style>