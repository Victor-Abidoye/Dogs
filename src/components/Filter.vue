<script setup>
import { useStore } from 'vuex'
import { computed, ref, watch } from 'vue'

const customStore = useStore()
const emits = defineEmits(['closeModal'])

const search = ref('')
const selectedBreeds = ref([])

const breedCategory = computed(() => {
  return customStore.getters.breedList
})

const filterBreed = computed(() => {
  return breedCategory.value.filter((breed) =>
    breed.toLowerCase().includes(search.value.toLowerCase())
  )
})

watch(
  () => selectedBreeds.value,
  () => {
    console.log('sdkfjsa')
    customStore.dispatch('filterImg', selectedBreeds.value)
  }
)
</script>
<template>
  <div class="bg-white p-4">
    <div class="border-b border-[#D1D5DB] flex justify-between pb-2">
      <h3 class="font-bold">Filters</h3>

      <button class="text-[#217AFF] font-medium text-sm" @click="selectedBreeds = []">
        Clear all
      </button>
    </div>
    <div class="py-2">
      <h4 class="font-semibold text-sm">Breed({{ breedCategory.length }})</h4>
    </div>
    <input
    tabindex="1"
      type="text"
      v-model="search"
      class="w-full outline-none border h-8 border-[#E5E7EB] rounded-sm px-3 text-sm"
      placeholder="Search for breed e.g caucasian..."
    />
    <ul class="my-4 max-h-40 overflow-y-scroll lg:max-h-full lg:overflow-hidden">
      <li
        v-for="breed in filterBreed"
        class="flex justify-between items-center py-1 capitalize"
      >
        <p>{{ breed }}</p>
        <input
          name="selectedBreeds"
          :value="breed"
          v-model="selectedBreeds"
          type="checkbox"
        />
      </li>
    </ul>
    <p @click="$emit('closeModal')" class="text-red-700 font-medium text-sm lg:hidden hover:underline text-right" >Close filter</p>
  </div>
</template>

<style lang="scss" scoped></style>
