<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <p class="bg-red-500">dfs</p>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
