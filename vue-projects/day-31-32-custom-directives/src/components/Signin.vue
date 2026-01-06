<template>
  <div class="container">
    <h1>Login</h1>
    
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Email</label>
        <input
          v-model="email"
          v-focus
          v-highlight="'#fef3c7'"
          type="email"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label>Password</label>
        <input
          v-model="password"
          v-highlight="'#fef3c7'"
          type="password"
          placeholder="Enter your password"
        />
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Form data
const email = ref('');
const password = ref('');

// Handle form submission
const handleSubmit = () => {
  console.log('Login:', { email: email.value, password: password.value });
  alert('Form submitted!');
};

// Custom Directive 1: v-focus
// Auto-focuses the element when it appears
const vFocus = {
  mounted(el) {
    el.focus();
  }
};

// Custom Directive 2: v-highlight
// Highlights element on focus, removes on blur
const vHighlight = {
  mounted(el, binding) {
    // Get the color value passed to directive (or use default)
    const color = binding.value || '#fef3c7';
    
    // Create event handlers
    const handleFocus = () => {
      el.style.backgroundColor = color;
      el.style.transition = 'background-color 0.3s';
    };
    
    const handleBlur = () => {
      el.style.backgroundColor = '';
    };
    
    // Add event listeners
    el.addEventListener('focus', handleFocus);
    el.addEventListener('blur', handleBlur);
    
    // Store handlers on element for cleanup later
    el._handleFocus = handleFocus;
    el._handleBlur = handleBlur;
  },
  
  unmounted(el) {
    // Clean up event listeners
    el.removeEventListener('focus', el._handleFocus);
    el.removeEventListener('blur', el._handleBlur);
  }
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #42b883;
  margin-bottom: 30px;
  font-size: 32px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-weight: 600;
  color: #2c3e50;
}

input {
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #42b883;
}

button {
  padding: 12px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #35a372;
}
</style>