import { IProfileInput } from "@/components/screens/profile/profile.interface"
import { getUsersUrl } from "@/config/api.config"
import { IMovie } from "@/shared/types/newMovie.types"
import { IUser } from "@/store/user/user.types"
import axios  from "api/interceptors"
export const userService = {
    async getAll(searchTerm?:string) {
        return axios.get<IUser[]>(getUsersUrl(''), {
            params: searchTerm ? {
                searchTerm
            } : {}
        })
    },

    async getProfile() {
        return axios.get<IUser>(getUsersUrl('/profile'))
    },

    async getFavorites() {
        return axios.get<IMovie[]>(getUsersUrl('profile/favorites'))
    },

    async toggleFavorite(movieId: string) {
        return axios.put<IUser>(getUsersUrl('profile/favorites'), {movieId: movieId})
    },

    async updateProfile(data: IProfileInput) {
        return axios.put<IUser>(getUsersUrl('/profile'), data)
    },

    async getById (_id: string) {
        return axios.get<IUser>(getUsersUrl(`/${_id}`))
    },

    async update(_id:string, data: IProfileInput) {
        return axios.put<string>(getUsersUrl(`/${_id}`), data)
    },

    async deleteUser(_id:string) {
        return axios.delete<string>(getUsersUrl(`/${_id}`))
    }
}