<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const customStore = useStore('store')

const age = computed(() => customStore.state.age)
</script>
<template>
  <h1 class="">{{ age }}</h1>
</template>

<style></style>
