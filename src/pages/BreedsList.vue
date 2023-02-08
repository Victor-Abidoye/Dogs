<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const props = defineProps(['images'])

const customStore = useStore()

const loading = computed(() => {
  return customStore.state.loading
})

</script>
<template>
  <div
    :class="{ 'skeleton h-full': loading}"
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4"
  >
    <div
      v-for="image in props.images"
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
  </div>
</template>

<style scoped>
.skeleton {
  animation: skeleton-loading 1.3s linear infinite alternate;
}

img[lazy='loading'] {
  animation: skeleton-loading 1.3s linear infinite alternate;
}
@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
  }
}
</style>
