
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

const isLoggedIn = ref(false)

const checkLoginStatus = () => {
  isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true'
}

onMounted(() => {
  checkLoginStatus()
  
  // Listen for storage changes to update nav
  window.addEventListener('storage', checkLoginStatus)
})
</script>

<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/">🏠 Home</RouterLink>
        <RouterLink v-if="!isLoggedIn" to="/login">🔐 Login</RouterLink>
        <RouterLink v-if="isLoggedIn" to="/dashboard">📊 Dashboard</RouterLink>
        <RouterLink v-if="isLoggedIn" to="/profile">👤 Profile</RouterLink>
      </nav>
    </header>

    <RouterView @vue:mounted="checkLoginStatus" />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f5f5f5;
}

#app {
  min-height: 100vh;
}

header {
  background: #2c3e50;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  gap: 2rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: color 0.3s;
}

nav a:hover {
  color: #42b983;
}

nav a.router-link-active {
  color: #42b983;
}
</style>
```

---

## **📁 File Structure**
```
src/
├── views/
│   ├── Home.vue
│   ├── Login.vue
│   ├── Dashboard.vue
│   └── Profile.vue
├── router/
│   └── index.js
├── App.vue
└── main.js
```

---

## **🧪 Testing Navigation Guards**

**Test these scenarios:**

1. ✅ **Not logged in:**
   - Visit `/` - works
   - Try to visit `/dashboard` - redirects to `/login`
   - Try to visit `/profile` - redirects to `/login`

2. ✅ **Login:**
   - Go to `/login`
   - Enter any username/password
   - Should redirect to `/dashboard`

3. ✅ **Logged in:**
   - Visit `/dashboard` - works
   - Visit `/profile` - works
   - Try to visit `/login` - redirects to `/dashboard`

4. ✅ **Logout:**
   - Click "Logout" button
   - Should redirect to `/login`
   - Try to visit `/dashboard` - redirects to `/login`

5. ✅ **Direct URL access:**
   - Type `/dashboard` in address bar (not logged in) - redirects to `/login`
   - Type `/login` in address bar (logged in) - redirects to `/dashboard`

---

## **💡 Key Concepts to Understand**

### **1. The Guard Lifecycle:**
```
User clicks link
    ↓
beforeEach runs
    ↓
Check conditions
    ↓
Call next() with result
    ↓
Navigation completes or redirects