<template>
  <div class="profile">
    <h1>User Profile</h1>
    <div class="profile-card">
      <h2>Makima</h2>
      <p><strong>Email:</strong> makima@example.com</p>
      <p><strong>Member since:</strong> January 2026</p>
      <p><strong>Bio:</strong> Web developer learning Vue.js and building awesome projects!</p>
    </div>
  </div>
</template>

<style scoped>
.profile {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profile h1 {
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.profile-card {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #42b983;
}

.profile-card h2 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.profile-card p {
  margin-bottom: 0.5rem;
  color: #666;
}
</style>
