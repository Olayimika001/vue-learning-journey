<template>
  <Suspense>
  <!-- What to show when ready -->
  <template #default>
    <AsyncComponent />
  </template>
  
  <!-- What to show while loading -->
  <template #fallback>
    <UserSkeleton />
  </template>
</Suspense>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const AsyncComponent = defineAsyncComponent(() =>
  import('./components/UserProfile.vue')
);

import './components/UserSkeleton.vue';
import UserSkeleton from './components/UserSkeleton.vue';
</script>

<style>

</style>