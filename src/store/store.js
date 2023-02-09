import { createStore } from "vuex";
import { fetchBreeds, fetchRandomImages } from "../service/auth";

export default createStore({
    state: {
        age: 1,
        breeds: {},
        randomImages: [],
        loading: false,
        images: []
    },
    getters: {
        breedList (state) {
            return Object.keys(state.breeds)
        },
    },
    mutations: {
        filterImg (state, payload) {
            if (payload.length <= 0) {
                state.images = [...state.randomImages]
                return
            }
            state.images = []
            payload.forEach(link => {
                const result = state.randomImages.filter((img => {
                    return img.toLowerCase().includes(link.toLowerCase())
                }))
                state.images = [...state.images, ...result]
            });
            console.log(state.images);
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
                context.commit('filterImg', [])
            }
        },
        filterImg (context, payload) {
            context.commit('filterImg', payload)
        }
    }
})