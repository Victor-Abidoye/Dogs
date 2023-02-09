<script setup>
import CustomSelect from '../components/CustomSelect.vue'
import Filter from '../components/Filter.vue'
import Header from '../components/Header.vue'
import BreedsList from '../pages/BreedsList.vue'

import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const customStore = useStore()

const randomImages = computed(() => {
  return customStore.state.randomImages
})
const images = computed(() => {
  return customStore.state.images
})
</script>

<template>
  <div>
    <Header />
    <main class="lg:grid lg:grid-cols-[300px,_auto] lg:gap-x-4">
      <section class="hidden lg:block shadow-sm">
        <Filter class="" />
      </section>
      <section>
        <div class="flex justify-between items-center">
          <h3 class="font-semibold text-lg">
            <span  v-if="images.length">
               1 - {{ images.length }}
            </span>
          </h3>
          <CustomSelect />
        </div>
        <div class="mt-4">
          <BreedsList :images="images" />
        </div>
      </section>
    </main>
  </div>
</template>
<style scoped>
.app-header {
  background: linear-gradient(98.41deg, #1d2b64 0%, #25020d 100%);
  border-radius: 12px;
}
</style>
