import { getGanresUrl } from "@/config/api.config"
import { IGenre } from "@/shared/types/newMovie.types"
import { axiosClassic } from "api/interceptors"
import axios  from "api/interceptors"
import { IGenreEditInput } from "@/components/screens/admin/genreEdit/genre-edit.interface"
import { ICollection } from "@/components/screens/collecions/collection.interface"

export const GenreService = {
    async getAll(searchTerm?:string) {
        return axiosClassic.get<IGenre[]>(getGanresUrl(''), {
            params: searchTerm ? {searchTerm} : {} 
        })
    },

    async getBySlug (slug: string) {
        return axiosClassic.get<IGenre>(`/genres/by-slug/${slug}`)
    },

    async getCollect(searchTerm?:string) {
        return axiosClassic.get<ICollection[]>(getGanresUrl('collections'), {
            params: searchTerm ? {searchTerm} : {} })
    },

    async create() {
        return axios.post<string>(getGanresUrl(`/`))
    },

    async delete(_id:string) {
        return axios.delete<string>(getGanresUrl(`/${_id}`))
    },

    async update(_id:string, data: IGenreEditInput) {
        return axios.put<string>(getGanresUrl(`/${_id}`), data)
    },

    async getById(_id:string) {
        return axios.get<IGenreEditInput>(getGanresUrl(`/${_id}`))
    },


}