import { ITableItem } from "@/components/ui/AdminTable/AdminTable/admin-table.interface";
import { getAdminUrl } from "@/config/url.config";
import { useDebounce } from "@/hooks/useDebounce";
import { ActorService } from "@/services/actor.service";
import { toastError } from "@/utils/toast-error";
import { useRouter } from "next/router";
import { ChangeEvent, useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { toastr } from "react-redux-toastr";

export const useActors = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);
    const { push } = useRouter();

    const queryData = useQuery(['actor list', debouncedSearch], () =>
        ActorService.getAll(debouncedSearch), {
        select: ({ data }) => data.map((actor): ITableItem => ({
            _id: actor._id || '', //
            editUrl: getAdminUrl(`actor/edit/${actor._id}`),
            items: [actor?.name ? actor?.name : '', String(actor.countMovies)] //
        })),
        onError: (error) => {
            toastError(error, 'Actor list')
        }
    }
    )

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    const { mutateAsync: createAsync } = useMutation('create actor', () => ActorService.create(), {
        onError: (error) => {
            toastError(error, 'Delete Actor')
        },
        onSuccess: ({ data: _id }) => {
            toastr.success('Create actor', 'Actor was created successful'),
                push(getAdminUrl(`actor/edit/${_id}`))
        }
    })

    const { mutateAsync: deleteAsync } = useMutation('delete actor', (actorId: string) => ActorService.delete(actorId), {
        onError: (error) => {
            toastError(error, 'Delete Actor')
        },
        onSuccess: () => {
            toastr.success('Delete actor', 'Actor was deleted successful'),
                queryData.refetch()
        }
    })
    return useMemo(() => ({
        handleSearch, ...queryData, searchTerm, deleteAsync, createAsync
    }), [queryData, searchTerm, deleteAsync, createAsync])
}