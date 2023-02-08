import { createStore } from "vuex";
import { fetchBreeds } from "../service/auth";

export default createStore({
    state: {
        age: 1,
        breeds: {}
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
                context.state.breeds = {...data.message}
                console.log(data);
            } catch (error) {
                log(error)
            }
        }
    }
})