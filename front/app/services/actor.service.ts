import { IActorEditInput } from "@/components/screens/admin/actorEdit/actor-edit.interface"
import { getActorsBySlugUrl, getActorssUrl } from "@/config/api.config"
import { IActor } from "@/shared/types/newMovie.types"
import { axiosClassic } from "api/interceptors"
import axios  from "api/interceptors"


export const ActorService = {


    async getAll(searchTerm?:string) {
        return axiosClassic.get<IActor[]>(getActorssUrl(''), {
            params: searchTerm ? {searchTerm} : {} 
        })
    },

    async getBySlug(slug: string) {
        return axiosClassic.get<IActor>(getActorsBySlugUrl(`/${slug}`))
    },

    async update(_id:string, data: IActorEditInput) {
        return axios.put<string>(getActorssUrl(`/${_id}`), data)
    },

    async getById(_id:string) {
        return axios.get<IActorEditInput>(getActorssUrl(`/${_id}`))
    },

    async delete(_id:string) {
        return axios.delete<string>(getActorssUrl(`/${_id}`))
    },

    async create() {
        return axios.post<string>(getActorssUrl(''))
    }
    
}