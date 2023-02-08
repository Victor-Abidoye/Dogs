<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

const customStore = useStore()

const selectedBreed = ref('all')

const breedCategory = computed(() => {
  return customStore.getters.breedList
})
</script>
<template>
  <select name="breeds" id="breeds" class="px-4 py-1" v-model="selectedBreed">
    <option value="all">-- select a breed --</option>
    <option :value="breed" v-for="breed in breedCategory">{{ breed }}</option>
  </select>
</template>

<style lang="scss" scoped></style>
