<template>
  <div class="container">
    <h1>Scoped Slots Demo</h1>

    <div class="examples-grid">
      <!-- Example 1: Simple Card Design -->
      <div class="example-section">
        <h2 class="section-title">Simple Card Design</h2>
        <UserList :users="users">
          <template #user="{ user }">
            <div class="simple-card">
              <img :src="user.avatar" :alt="user.name" class="avatar" />
              <h3>{{ user.name }}</h3>
              <p class="role">{{ user.role }}</p>
            </div>
          </template>
        </UserList>
      </div>

      <!-- Example 2: Detailed Card Design -->
      <div class="example-section">
        <h2 class="section-title">Detailed Card Design</h2>
        <UserList :users="users">
          <template #user="{ user }">
            <div class="detailed-card">
              <div class="card-header">
                <img :src="user.avatar" :alt="user.name" class="avatar-large" />
                <div class="user-info">
                  <h3>{{ user.name }}</h3>
                  <p class="email">{{ user.email }}</p>
                </div>
                <span class="status-badge" :class="user.status.toLowerCase()">
                  {{ user.status }}
                </span>
              </div>
              <div class="card-body">
                <p><strong>Role:</strong> {{ user.role }}</p>
              </div>
            </div>
          </template>
        </UserList>
      </div>

      <!-- Example 3: Compact List Design -->
      <div class="example-section">
        <h2 class="section-title">Compact List Design</h2>
        <UserList :users="users">
          <template #user="{ user }">
            <div class="compact-list-item">
              <img :src="user.avatar" :alt="user.name" class="avatar-small" />
              <span class="name">{{ user.name }}</span>
              <span class="separator">•</span>
              <span class="role-tag">{{ user.role }}</span>
              <span class="separator">•</span>
              <span class="status-dot" :class="user.status.toLowerCase()"></span>
              <span class="status-text">{{ user.status }}</span>
            </div>
          </template>
        </UserList>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UserList from './components/UserList.vue';

const users = ref([
  {
    id: 1,
    name: "Jane Doe",
    email: "jane@example.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    role: "Developer",
    status: "Active"
  },
  {
    id: 2,
    name: "John Smith",
    email: "john@example.com",
    avatar: "https://i.pravatar.cc/150?img=2",
    role: "Designer",
    status: "Active"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
    role: "Manager",
    status: "Away"
  }
]);
</script>

<style scoped>
.container {
  padding: 40px 20px;
  /* max-width: 1400px; */
  width: auto;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: #333;
}

/* ========================================
   HORIZONTAL LAYOUT FOR EXAMPLES
   ======================================== */
.examples-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  align-items: start;
}

.example-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.section-title {
  font-size: 1.2rem;
  color: #666;
  margin: 0 0 10px 0;
  text-align: center;
  font-weight: 600;
}

/* ========================================
   EXAMPLE 1: SIMPLE CARD DESIGN
   ======================================== */
.simple-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  color: white;
  text-align: center;
  transition: transform 0.3s ease;
  margin-bottom: 15px;
}

.simple-card:hover {
  transform: translateY(-5px);
}

.simple-card .avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid white;
  margin-bottom: 15px;
  object-fit: cover;
}

.simple-card h3 {
  margin: 0 0 5px 0;
  font-size: 1.1rem;
}

.simple-card .role {
  margin: 0;
  opacity: 0.9;
  font-size: 0.9rem;
}

/* ========================================
   EXAMPLE 2: DETAILED CARD DESIGN
   ======================================== */
.detailed-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  margin-bottom: 15px;
}

.detailed-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  align-items: center;
  padding: 15px;
  background: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;
  gap: 12px;
}

.avatar-large {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.user-info {
  flex: 1;
  min-width: 0;
}

.user-info h3 {
  margin: 0 0 3px 0;
  font-size: 1rem;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-info .email {
  margin: 0;
  color: #666;
  font-size: 0.85rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.status-badge {
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  flex-shrink: 0;
}

.status-badge.active {
  background: #d4edda;
  color: #155724;
}

.status-badge.away {
  background: #fff3cd;
  color: #856404;
}

.card-body {
  padding: 15px;
}

.card-body p {
  margin: 0;
  color: #555;
  font-size: 0.9rem;
}

/* ========================================
   EXAMPLE 3: COMPACT LIST DESIGN
   ======================================== */
.compact-list-item {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  gap: 10px;
  transition: background 0.2s ease;
  margin-bottom: 15px;
}

.compact-list-item:hover {
  background: #f8f9fa;
}

.avatar-small {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.compact-list-item .name {
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.separator {
  color: #ccc;
  font-size: 0.8rem;
}

.role-tag {
  padding: 3px 8px;
  background: #e3f2fd;
  color: #1976d2;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  flex-shrink: 0;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.status-dot.active {
  background: #4caf50;
}

.status-dot.away {
  background: #ff9800;
}

.status-text {
  font-size: 0.85rem;
  color: #666;
}

/* ========================================
   RESPONSIVE DESIGN
   ======================================== */
@media (max-width: 1200px) {
  .examples-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .section-title {
    font-size: 1.4rem;
  }
}
</style>