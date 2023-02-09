<script setup>
const props = defineProps(['image'])
</script>
<template>
  <div
    class="aspect-square relative rounded-md hover:shadow-lg hover:-rotate-2 hover:scale-105 transition-all duration-200"
  >
    <img
      loading="lazy"
      v-lazy="{
        src: image,
        loading: '',
        error: 'your error image url',
      }"
      class="w-full h-full object-cover rounded-md"
      alt=""
    />
  </div>
</template>

<style scoped></style>
