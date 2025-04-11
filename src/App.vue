<template>
  <router-view/>
</template>

<script setup>
import {onMounted} from 'vue'
import {useStore} from 'vuex'

const store = useStore()

onMounted(() => {
  store.dispatch('initializeAuth')
})
</script>

<style>
/* Add your global styles here */
</style>