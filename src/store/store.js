import { createStore } from "vuex";
import { fetchBreeds, fetchRandomImages } from "../service/auth";

export default createStore({
    state: {
        age: 1,
        breeds: {},
        randomImages: []
    },
    getters: {
        breedList (state) {
            return Object.keys(state.breeds)
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
                let remainder;

                if (payload > 50) {
                    let iterate = Math.floor(payload / 50)
                    remainder = payload % 50
                    while (iterate > 0) {
                        const { data } = await fetchRandomImages(50)
                        context.state.randomImages = [...data.message]
                        iterate = iterate - 1
                    }
                }
                if (remainder <= 0) return
                const { data } = await fetchRandomImages(remainder)
                context.state.randomImages = [...context.state.randomImages, ...data.message]

            } catch (error) {
                console.log(error)
            }
        }
    }
})