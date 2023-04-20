import { GenreService } from "@/services/genre.service"
import { toastError } from "@/utils/toast-error"
import { useQuery } from "react-query"
import { IOption } from "@/components/ui/Select/select.interface"

export const useAdminGenres = () => {
    const queryData = useQuery('List of genre', () => GenreService.getAll(), {
        select: ({data}) => 
            data.map((genre): IOption => ({
                label: genre.name,
                value: genre._id
            })),

        onError: (error) => {
            toastError(error, 'Actor list')
        }
        
    })

    return queryData
}