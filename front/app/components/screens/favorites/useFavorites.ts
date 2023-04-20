import { useAuth } from "@/hooks/useAuth"
import { userService } from "@/services/user.service"
import { useQuery } from "react-query"

export const useFavorites =  () => {
    const {user} = useAuth()
    const {
		isLoading,
		data: favorites,
		refetch,
	} = useQuery('Favorite movies', () => userService.getFavorites(), {
		select: ({ data }) => data,
        enabled: !!user
	})
    
    return {
        isLoading, 
        favorites,
        refetch
    }
}