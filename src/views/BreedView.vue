<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const customStore = useStore('store')

const props = defineProps(['breed', '_id'])

const randomImages = computed(() => {
    return customStore.state.randomImages
 })
const findImage = computed(() => {
    return randomImages.value.find((el) => {
        return el.includes(props._id)
    })
})

onMounted(() => {

})

</script>
<template>
    <div>
        <img :src="findImage" alt="">
    </div>
</template>

<style></style>
