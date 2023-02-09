import { createStore } from "vuex";
import { breedImages, fetchBreeds, fetchRandomImages } from "../service/auth";

export default createStore({
    state: {
        age: 1,
        breeds: {},
        randomImages: [],
        loading: false,
        images: [],
        subBreed: []
    },
    getters: {
        breedList (state) {
            return Object.keys(state.breeds)
        },

    },
    mutations: {
        provideSubBreed (state, breed) {
            console.log(state.breeds, breed)
            state.subBreed = []
            state.subBreed = state.breeds[breed.split('-')[0]]
        }
    },
    actions: {
        async getBreeds (context) {
            try {
                const { data } = await fetchBreeds()
                context.state.breeds = { ...data.message }
                console.log(data);
            } catch (error) {
                log(error)
            }
        },

        async getRamdomImages (context, payload) {
            console.log(payload)
            try {
                context.state.loading = true
                let remainder;

                if (payload > 50) {
                    let iterate = Math.floor(payload / 50)
                    remainder = payload % 50
                    while (iterate > 0) {
                        console.log(iterate);
                        const { data } = await fetchRandomImages(50)
                        context.state.randomImages = [...context.state.randomImages, ...data.message]
                        iterate = iterate - 1
                    }
                }
                if (remainder <= 0) return
                const { data } = await fetchRandomImages(remainder)
                context.state.randomImages = [...context.state.randomImages, ...data.message]
            } catch (error) {
                console.log(error)
            } finally {
                context.state.loading = false
                context.dispatch('filterImg', [])
            }
        },

        async getparticularBreed (context, payload) {
            try {
                context.state.loading = true
                const { data } = await breedImages(payload.breed, payload.amount)
                context.state.images = [...context.state.images, ...data.message]
                console.log(data.message)
            } catch (error) {
                console.log(error)
            } finally {
                context.state.loading = false
            }
        },

        filterImg (context, payload) {
            if (payload.length <= 0) {
                context.state.images = [...context.state.randomImages]
                return
            }
            context.state.images = []
            payload.forEach(link => {
                const result = context.state.randomImages.filter((img => {
                    return img.toLowerCase().includes(link.toLowerCase())
                }))
                if (result.length < 50) {
                    context.dispatch('getparticularBreed', { breed: link, amount: 2 })
                }
                context.state.images = [...context.state.images, ...result]
            });
            console.log(context.state.images);
        },
    }
})