<script setup >
import VLazyImage from "v-lazy-image";
import { ref } from "vue";

const props = defineProps(['image'])

const log = () => {
  showSkeleton.value = true
}

const showSkeleton = ref(false)

</script>

<template>
  <div
    class="aspect-square relative rounded-md hover:shadow-lg hover:-rotate-2 hover:scale-105 transition-all duration-200"
  >
  <v-lazy-image :src="props.image" loading="lazy" :class="{'skeleton' : showSkeleton
}"  @intersect="log()" class="w-full h-full object-cover rounded-md"/>
    <!-- <img
      v-lazy-image data-src="https://images.dog.ceo/breeds/entlebucher/n02108000_398.jpg"
      alt="Your Image"
      class="w-full h-full object-cover rounded-md"
    /> -->
    <!-- <img
      loading="lazy"
      v-lazy="{
        src: image,
        loading: '',
        error: 'your error image url',
      }"
      class="w-full h-full object-cover rounded-md"
      alt=""
    /> -->
  </div>
</template>

<style scoped></style>
