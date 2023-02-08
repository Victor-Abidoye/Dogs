<script setup>
const props = defineProps(['images'])

</script>
<template>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4" >
        <div v-for="image in props.images" class="aspect-square">
            <img  :src="image" class="w-full h-full object-cover" alt="">
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>