import { ActorService } from "@/services/actor.service"
import { toastError } from "@/utils/toast-error"
import { useQuery } from "react-query"
import { IOption } from "@/components/ui/Select/select.interface"

export const useAdminActors = () => {
    const queryData = useQuery('List of actor', () => ActorService.getAll(), {
        select: ({data}) => 
            data.map((actor): IOption => ({
                label: actor?.name ? actor?.name : '', //
                value: actor?._id ? actor?._id : '' //
            })),

        onError: (error) => {
            toastError(error, 'Actor list')
        }
        
    })

    return queryData
}