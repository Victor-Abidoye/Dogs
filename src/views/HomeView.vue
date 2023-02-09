<script setup>
import CustomSelect from '../components/CustomSelect.vue'
import Filter from '../components/Filter.vue'
import Header from '../components/Header.vue'
import BreedsList from '../pages/BreedsList.vue'

import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'

const customStore = useStore()

const randomImages = computed(() => {
  return customStore.state.randomImages
})
const images = computed(() => {
  return customStore.state.images
})

const showMobileSearch = ref(false)
</script>

<template>
  <div>
    <Header />

    <main class="lg:grid lg:grid-cols-[300px,_auto] lg:gap-x-4">
      <section
        class="lg:block shadow-sm relative"
        :class="[showMobileSearch ? 'block ' : 'hidden']"
      >
        <Filter   :class="[showMobileSearch ? 'absolute w-full z-10' : '']" class="" @close-modal="showMobileSearch = false" />
      </section>
      <section>
        <div class="flex justify-between items-center">
          <h3 class="font-semibold text-lg">
            <span v-if="images.length"> 1 - {{ images.length }} </span>
          </h3>
          <div>
            <p  class="lg:hidden text-sm flex items-center gap-x-4" @click="showMobileSearch = true">
              search <i class="fa-solid fa-magnifying-glass"></i>
            </p>
          </div>
          <!-- <CustomSelect /> -->
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
