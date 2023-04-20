import { ITableItem } from "@/components/ui/AdminTable/AdminTable/admin-table.interface";
import { getAdminUrl } from "@/config/url.config";
import { useDebounce } from "@/hooks/useDebounce";
import { MovieService } from "@/services/movie.service";
import { convertMondoDbDate } from "@/utils/date/convertMogoDbDate";
import { getGenresList } from "@/utils/movie/getGenresListEach";
import { toastError } from "@/utils/toast-error";
import { useRouter } from "next/router";
import { ChangeEvent, useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { toastr } from "react-redux-toastr";

export const useMovies = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);
    const {push} = useRouter();

    const queryData = useQuery(['movie list', debouncedSearch], () =>
        MovieService.getAll(debouncedSearch), {
        select: ({ data }) => data.map((movie): ITableItem => ({
            _id: movie._id,
            editUrl: getAdminUrl(`movie/edit/${movie._id}`),
            items: [movie.title, getGenresList(movie.genres), String(movie.rating)]
        })),
        onError: (error) => {
            toastError(error, 'Movie list')
        }
    }
    )

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    const  {mutateAsync: createAsync} = useMutation('create movie', () => MovieService.create(), {
        onError: (error) => {
            toastError(error, 'Delete Movie') 
        },
        onSuccess: ({data: _id}) => {
            toastr.success('Create movie', 'Movie was created successful'),
            push(getAdminUrl(`movie/edit/${_id}`))
        }
    })


    const  {mutateAsync: deleteAsync} = useMutation('delete movie', (movieId:string) => MovieService.delete(movieId), {
        onError: (error) => {
            toastError(error, 'Delete Movie') 
        },
        onSuccess: () => {
            toastr.success('Delete movie', 'Movie was deleted successful'),
            queryData.refetch()
        }
    })
    return useMemo(() => ({
        handleSearch, ...queryData, searchTerm, deleteAsync, createAsync
    }), [queryData, searchTerm, deleteAsync, createAsync])
}