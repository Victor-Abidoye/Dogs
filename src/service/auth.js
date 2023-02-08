import { http } from './http'

export function fetchBreeds () {
    return http.get('breeds/list/all')
}