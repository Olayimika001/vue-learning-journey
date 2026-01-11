<template>
  <div class="settings">
    <h2>⚙️ Settings</h2>
    <p class="subtitle">This component was also lazy loaded!</p>

    <div class="settings-form">
      <div class="setting-group">
        <label>
          <input type="checkbox" v-model="settings.notifications">
          Enable notifications
        </label>
      </div>

      <div class="setting-group">
        <label>
          <input type="checkbox" v-model="settings.darkMode">
          Dark mode
        </label>
      </div>

      <div class="setting-group">
        <label>Theme Color</label>
        <select v-model="settings.theme">
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
        </select>
      </div>

      <div class="setting-group">
        <label>Language</label>
        <select v-model="settings.language">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>

      <button @click="saveSettings" class="save-btn">
        Save Settings
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';

const settings = reactive({
  notifications: true,
  darkMode: false,
  theme: 'green',
  language: 'en'
});

const saveSettings = () => {
  console.log('Settings saved:', settings);
  alert('Settings saved successfully!');
};

onMounted(() => {
  console.log('⚙️ Settings component mounted!');
});
</script>

<style scoped>
.settings {
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

.settings-form {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  max-width: 500px;
}

.setting-group {
  margin-bottom: 25px;
}

.setting-group label {
  display: block;
  color: #2c3e50;
  font-weight: 500;
  margin-bottom: 8px;
}

.setting-group input[type="checkbox"] {
  margin-right: 10px;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.setting-group select {
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
}

.setting-group select:focus {
  outline: none;
  border-color: #42b883;
}

.save-btn {
  width: 100%;
  padding: 12px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.save-btn:hover {
  background: #35a372;
}
</style>