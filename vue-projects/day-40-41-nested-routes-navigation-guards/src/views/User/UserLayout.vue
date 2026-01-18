<template>
  <div class="user-layout">
    <aside class="sidebar">
      <div class="user-info">
        <h2>User Dashboard</h2>
        <p>Welcome, Makima!</p>
      </div>
      
      <nav class="nav-menu">
        <RouterLink :to="{ name: 'UserProfile' }" class="nav-link">
          Profile
        </RouterLink>
        <RouterLink :to="{ name: 'UserSettings' }" class="nav-link">
          Settings
        </RouterLink>
        <RouterLink :to="{ name: 'UserPosts' }" class="nav-link">
          My Posts
        </RouterLink>
      </nav>
    </aside>
    
    <main class="main-content">
      <!-- Child routes render here -->
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.user-layout {
  display: flex;
  min-height: calc(100vh - 80px);
  background: #f5f5f5;
}

.sidebar {
  width: 250px;
  background: #2c3e50;
  color: white;
  padding: 2rem 1rem;
}

.user-info {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.user-info h2 {
  margin-bottom: 0.5rem;
}

.user-info p {
  color: #42b983;
  font-size: 0.9rem;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-link {
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.3s;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-active {
  background: #42b983;
}

.main-content {
  flex: 1;
  padding: 2rem;
}
</style>