<template>
  <div class="auth-container">
    <div class="auth-tabs">
      <button
          @click="activeTab = 'login'"
          :class="{ active: activeTab === 'login' }"
      >
        Login
      </button>
      <button
          @click="activeTab = 'signup'"
          :class="{ active: activeTab === 'signup' }"
      >
        Sign Up
      </button>
    </div>

    <LoginForm v-if="activeTab === 'login'" />
    <SignupForm v-else />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginForm from '@/components/Auth/LoginForm.vue'
import SignupForm from '@/components/Auth/SignupForm.vue'

const activeTab = ref('login')
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.auth-tabs {
  display: flex;
  margin-bottom: 1rem;
}
.auth-tabs button {
  flex: 1;
  padding: 0.5rem;
  border: none;
  background: #eee;
  cursor: pointer;
}
.auth-tabs button.active {
  background: #42b983;
  color: white;
}
</style>