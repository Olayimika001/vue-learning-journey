<template>
  <div class="container">
    <h1>Dropdown with Click Outside</h1>
    
    <div class="dropdown-wrapper">

      <button @click.stop="toggleDropdown" class="profile-btn">
        👤 Profile ▼
      </button>
      

      <div 
        v-if="isOpen"
        v-click-outside="closeDropdown"
        class="dropdown-menu"
      >
        <a @click="handleProfile" class="dropdown-item">
          👤 My Profile
        </a>
        <a @click="handleSettings" class="dropdown-item">
          ⚙️ Settings
        </a>
        <hr>
        <a @click="handleLogout" class="dropdown-item logout">
          🚪 Logout
        </a>
      </div>
    </div>
    

  </div>
</template>

<script setup>
import { ref } from 'vue';

// Dropdown state
const isOpen = ref(false);

// Toggle dropdown open/close
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Close dropdown
const closeDropdown = () => {
  isOpen.value = false;
};

// Menu item handlers
const handleProfile = () => {
  alert('Navigate to Profile');
  closeDropdown();
};

const handleSettings = () => {
  alert('Navigate to Settings');
  closeDropdown();
};

const handleLogout = () => {
  alert('Logged out!');
  closeDropdown();
};

// Custom Directive: v-click-outside
const vClickOutside = {
  mounted(el, binding) {
    // Event handler for document clicks
    const handleClick = (event) => {
      // Check if click was outside the element
      if (!el.contains(event.target)) {
        // Click was outside! Call the function passed to directive
        binding.value();
      }
    };
    
    // Listen for clicks on entire document
    document.addEventListener('click', handleClick);
    
    // Store handler on element for cleanup
    el._clickOutside = handleClick;
  },
  
  unmounted(el) {
    // Clean up event listener
    document.removeEventListener('click', el._clickOutside);
  }
};
</script>

<style scoped>
.container {
  padding: 50px;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #42b883;
  margin-bottom: 40px;
  font-size: 32px;
}

.hint {
  text-align: center;
  color: #666;
  margin-top: 30px;
  font-style: italic;
}

.dropdown-wrapper {
  position: relative;
  display: inline-block;
}

.profile-btn {
  padding: 12px 24px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.profile-btn:hover {
  background-color: #35a372;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 220px;
  overflow: hidden;
  z-index: 1000;
  animation: slideDown 0.2s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  color: #2c3e50;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 14px;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

.dropdown-item.logout {
  color: #e74c3c;
}

.dropdown-item.logout:hover {
  background-color: #fee;
}

hr {
  margin: 0;
  border: none;
  border-top: 1px solid #e0e0e0;
}
</style>