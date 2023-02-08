<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopNav from './components/TopNav.vue'
import Header from './components/Header.vue'
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex'

const customStore = useStore()
const breedCategory = computed(() => {
  return customStore.dispatch('breedList')
})

onMounted(() => {
  customStore.dispatch('getBreeds')
  customStore.dispatch('getRamdomImages', 60)
})
</script>

<template>
  <div>
    <TopNav class="xl:px-4" />
    <main class="px-4 xl:px-9">
      <Header/>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-header {
  background: linear-gradient(98.41deg, #1d2b64 0%, #25020d 100%);
  border-radius: 12px;
}
</style>
