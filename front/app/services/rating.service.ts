import { getRatingssUrl } from "@/config/api.config"
import axios  from "api/interceptors"

export const RatingService = {

    async seRating(movieId: string, value: number) {
        return axios.post<string>(getRatingssUrl('/set-rating'), {
            movieId, value
        })
    },

    async getByUserMovie (movieId: string) {
        return axios.get<number>(getRatingssUrl(`/${movieId}`))
    },

}