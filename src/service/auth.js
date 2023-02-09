import { http } from './http'

export function fetchBreeds () {
    return http.get('breeds/list/all')
}
export function fetchRandomImages (amount) {
    return http.get(`breeds/image/random/${amount}`)
}
export function breedImages (breed, amount) {
    return http.get(`/breed/${breed}/images`)
}
export function subBreedImages (breed, sub, amount) {
    return http.get(`/breed/${breed}/${sub}/images/random/${3}`)
}