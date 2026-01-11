<template>
  <div class="dashboard">
    <h1>Lazy Loading Dashboard</h1>
    

    <div class="tabs">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="{ active: activeTab === tab.id }"
        class="tab-btn"
      >
        {{ tab.label }}
      </button>
    </div>

   
    <div class="content">
      <Suspense>
        <template #default>
          <HomeContent v-if="activeTab === 'home'" />
          <AnalyticsView v-if="activeTab === 'analytics'" />
          <SettingsView v-if="activeTab === 'settings'" />
        </template>
        <template #fallback>
          <LoadingSpinner />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';

// Eager loading (loads immediately)
import HomeContent from '../components/HomeContent.vue';

// Lazy loading (loads on demand)
const AnalyticsView = defineAsyncComponent({
  loader: () => import('../components/AnalyticsView.vue'),
  loadingComponent: LoadingSpinner,
  delay: 200,
  timeout: 10000
});

const SettingsView = defineAsyncComponent({
  loader: () => import('../components/SettingsView.vue'),
  loadingComponent: LoadingSpinner,
  delay: 200
});

// Tab state
const activeTab = ref('home');

const tabs = [
  { id: 'home', label: '🏠 Home' },
  { id: 'analytics', label: '📊 Analytics' },
  { id: 'settings', label: '⚙️ Settings' }
];
</script>

<style scoped>
.dashboard {
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #42b883;
  margin-bottom: 30px;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
}

.tab-btn {
  padding: 12px 24px;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #666;
  transition: all 0.3s;
}

.tab-btn:hover {
  color: #42b883;
}

.tab-btn.active {
  color: #42b883;
  border-bottom-color: #42b883;
}

.content {
  min-height: 400px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 12px;
}
</style>