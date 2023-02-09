<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import DogImage from '../components/DogImage.vue';
import Skeleton from '../components/Skeleton.vue';

const props = defineProps(['images'])

const customStore = useStore()
const router = useRouter()

const loading = computed(() => {
  return customStore.state.loading
})

const send = (img) => {
  const chunck = img.split('/')
  router.push({
    name: 'breed',
    params: {
      breed: chunck[chunck.length - 2],
      _id: chunck[chunck.length - 1].slice(
        0,
        chunck[chunck.length - 1].indexOf('.')
      ),
    },
  })
}
</script>
<template>
  <div
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4"
  >
    <Skeleton v-for="ske in 50" v-if="!props.images.length"/>
    <DogImage v-else @click="send(img)" v-for="img in props.images" :image="img" />
  </div>
</template>

<style scoped>

</style>
