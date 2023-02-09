<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopNav from './components/TopNav.vue'
import Header from './components/Header.vue'
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex'

const customStore = useStore()

onMounted(() => {
  customStore.dispatch('getBreeds')
  customStore.dispatch('getRamdomImages', 125)
})
</script>

<template>
  <div >
    <TopNav class="xl:px-4 sticky top-0 shadow-sm z-10" />
    <main class="px-4 xl:px-9">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

</style>
