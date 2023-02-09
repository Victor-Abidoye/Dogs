<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import DogImage from '../components/DogImage.vue'
import { useRouter } from 'vue-router';

const customStore = useStore('store')
const router = useRouter()
const props = defineProps(['breed', '_id'])

const randomImages = computed(() => {
  return customStore.state.randomImages
})

const findImage = computed(() => {
  const result = randomImages.value.find((el) => {
    const chunck = el.split(/[/\s.]+/)
    return props._id.toString() == chunck[chunck.length - 2].toString()
  })
  if (result === undefined) {
    router.push({name: 'NotFound'})
  }
  return result
})

onMounted(() => {
  customStore.commit('provideSubBreed', props.breed)
})
</script>
<template>
  <div>
    <div @click="router.back(-1)" tabindex="1" class="hover:shadow-lg hover:scale-110 bg-white my-3 w-8  aspect-square rounded-full  flex justify-center items-center">
      <i class="fa-solid fa-arrow-left text-sm"></i>
    </div>
    <main
      class="py-8 grid gap-8 sm:grid-cols-[250px,_auto] md:grid-cols-[350px,_auto] grid-flow-dense auto-rows-auto"
    >
      <div class=" sm:order-1">
        <DogImage tabindex="1" :image="findImage" />
      </div>
      <div class="sm:order-3">
        <h1 class="font-semibold text-2xl capitalize">{{ props.breed }}</h1>
        <p>
          Breed: <span class="uppercase text-xs">{{ props.breed.split('-')[0] }}</span>
        </p>
        <p v-if="customStore.state.subBreed">
          Sub-breed:
          <template v-for="sub in customStore.state.subBreed">
            <span class="capitalize text-xs ">{{ sub }}, </span>
          </template>
        </p>
      </div>
      <div class="sm:order-2">
        <section>
          <ul class="flex ">
            <li
              class="px-4 rounded-full border border-[#217AFF] text-[#217AFF] font-medium text-sm"
            >
              confident
            </li>
          </ul>
          <div class="rounded-md bg-white p-4 text-sm mt-3 max-w-lg">
            <h2 class="font-semibold text-lg">About the Breed</h2>
            <p class="text-[#4B5563]">
              Loyal, curious, and famously amusing, this almost-human toy dog is
              fearless out of all proportion to his size. As with all great
              comedians, it's the Affenpinscher's apparent seriousness of purpose
              that makes his antics all the more amusing. The Affen's apish look
              has been described many ways. They've been called 'monkey dogs' and
              'ape terriers.' The French say diablotin moustachu ('mustached
              little devil'), and Star Wars fans argue whether they look more like
              Wookies or Ewoks. Standing less than a foot tall, these sturdy
              terrier-like dogs approach life with great confidence. 'This isn't a
              breed you train, 'a professional dog handler tells us, 'He's like a
              human. You befriend him.' The dense, harsh coat is described as
              'neat but shaggy' and comes in several colors; the gait is light and
              confident.
            </p>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style></style>
