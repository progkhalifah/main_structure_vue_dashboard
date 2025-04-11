<template>
  <div class="dashboard-layout">
    <Sidebar />
    <main class="dashboard-content">
      <header class="dashboard-header">
        <h2>{{ currentRouteName }}</h2>
        <button @click="handleLogout">Logout</button>
      </header>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import Sidebar from '@/components/Dashboard/Sidebar.vue'

const router = useRouter()
const route = useRoute()
const store = useStore()

const currentRouteName = computed(() => {
  return route.name?.toString().toUpperCase() || 'DASHBOARD'
})

const handleLogout = () => {
  store.dispatch('logout')
  router.push('/auth')
}
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  min-height: 100vh;
}
.dashboard-content {
  flex: 1;
  padding: 1rem;
}
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}
</style>