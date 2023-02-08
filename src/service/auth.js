import { http } from './http'

export function fetchBreeds () {
    return http.get('breeds/list/all')
}
export function fetchRandomImages (amount) {
    return http.get(`breeds/image/random/${amount}`)
}