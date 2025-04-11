<template>
  <form @submit.prevent="handleLogin">
    <div class="form-group">
      <label>Email</label>
      <input v-model="email" type="email" required>
    </div>
    <div class="form-group">
      <label>Password</label>
      <input v-model="password" type="password" required>
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const email = ref('')
const password = ref('')

const handleLogin = async () => {
  // In a real app, you would call an API here
  const user = { email: email.value }
  const token = 'fake-jwt-token'

  store.dispatch('login', { user, token })
  router.push('/dashboard/home')
}
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}
.form-group input {
  width: 100%;
  padding: 0.5rem;
}
button {
  width: 100%;
  padding: 0.75rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>