import { getMoviessUrl } from "@/config/api.config"
import { IMovie } from "@/shared/types/newMovie.types"
import { axiosClassic } from "api/interceptors"
import axios  from "api/interceptors"
import { IMovieEditInput } from "@/components/screens/admin/movieEdit/movie-edit.interface"
    
export const MovieService = {
    async getAll(searchTerm?:string) {

        return axiosClassic.get<IMovie[]>(getMoviessUrl(''), {
            params: searchTerm ? {searchTerm} : {} 
        })
    },

    async getBySlug(slug: string) {
        return axiosClassic.get<IMovie>(getMoviessUrl(`by-slug/${slug}`))
    },

    async getByActor(actorId: string) {
        return axiosClassic.get<IMovie>(getMoviessUrl(`/by-actor/${actorId}`))
    },

    async getByGenres(genreIds: string[]) {
		return axiosClassic.post<IMovie[]>(getMoviessUrl(`by-geners`), {
			genreIds,
		})
	},

    async update(_id:string, data: IMovieEditInput) {
        return axios.put<string>(getMoviessUrl(`/${_id}`), data)
    },

    async getById(_id:string) {
        return axios.get<IMovieEditInput>(getMoviessUrl(`${_id}`))
    },

    async getMostPopularMovies() {
        const {data: movies} = await axiosClassic.get<IMovie[]>(getMoviessUrl('most-popular'));
        return movies;
    },

    async delete(_id:string) {
        return axios.delete<string>(getMoviessUrl(`${_id}`))
    },

    async create() {
        return axios.post<string>(getMoviessUrl(''))
    },

    async updateCountOpened(slug: string) {
        return axiosClassic.put<string>(getMoviessUrl(`update-count-opened`), {slug})
    },
}
