<template>
  <form @submit.prevent="handleSignup">
    <div class="form-group">
      <label>Name</label>
      <input v-model="name" type="text" required>
    </div>
    <div class="form-group">
      <label>Email</label>
      <input v-model="email" type="email" required>
    </div>
    <div class="form-group">
      <label>Password</label>
      <input v-model="password" type="password" required>
    </div>
    <div class="form-group">
      <label>Confirm Password</label>
      <input v-model="confirmPassword" type="password" required>
    </div>
    <button type="submit">Sign Up</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleSignup = async () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords don't match!")
    return
  }

  // In a real app, you would call an API here
  const user = { name: name.value, email: email.value }
  const token = 'fake-jwt-token'

  store.dispatch('login', { user, token })
  router.push('/dashboard/home')
}
</script>

<style scoped>
/* Same as LoginForm styles */
</style>