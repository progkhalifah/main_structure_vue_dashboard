<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li>
          <router-link to="/dashboard/home">Home</router-link>
        </li>
        <li>
          <router-link to="/dashboard/about">About Us</router-link>
        </li>
        <li>
          <router-link to="/dashboard/contact">Contact Us</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
// No script needed for basic functionality
</script>

<style scoped>
.sidebar {
  width: 200px;
  background: #2c3e50;
  color: white;
  padding: 1rem;
  min-height: 100vh;
}
.sidebar nav ul {
  list-style: none;
  padding: 0;
}
.sidebar nav ul li {
  margin-bottom: 1rem;
}
.sidebar nav ul li a {
  color: white;
  text-decoration: none;
}
.sidebar nav ul li a.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
}
</style>