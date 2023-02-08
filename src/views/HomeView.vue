<script setup>
import CustomSelect from '../components/CustomSelect.vue'
import Filter from '../components/Filter.vue'
import BreedsList from '../pages/BreedsList.vue'

import { useStore } from 'vuex'
import { computed,onMounted } from 'vue'

const customStore = useStore()

const randomImages = computed(() => {
  return customStore.state.randomImages
})
const images = computed(() => {
  return customStore.state.images
})

</script>

<template>
  <main class="lg:grid lg:grid-cols-[300px,_auto] lg:gap-x-4">
    <section class="hidden lg:block shadow-sm">
      <Filter class="" />
    </section>
    <section>
      <div class="flex justify-between items-center">
        <h3 class="font-semibold text-lg">1 - 100</h3>
        <CustomSelect />
      </div>
      <div class="mt-4">
        <BreedsList :images="images" />
      </div>
    </section>
  </main>
</template>
