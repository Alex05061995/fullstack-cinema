import { ITableItem } from "@/components/ui/AdminTable/AdminTable/admin-table.interface";
import { getAdminUrl } from "@/config/url.config";
import { useDebounce } from "@/hooks/useDebounce";
import { userService } from "@/services/user.service";
import { convertMondoDbDate } from "@/utils/date/convertMogoDbDate";
import { toastError } from "@/utils/toast-error";
import { ChangeEvent, useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { toastr } from "react-redux-toastr";

export const useUsers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);

    const queryData = useQuery(['user list', debouncedSearch], () =>
        userService.getAll(debouncedSearch), {
        select: ({ data }) => data.map((user): ITableItem => ({
            _id: user._id,
            editUrl: getAdminUrl(`user/edit/${user._id}`),
            items: [user.email, convertMondoDbDate(user.createdAt)]
        })),
        onError: (error) => {
            toastError(error, 'User list')
        }
    }
    )

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    const  {mutateAsync: deleteAsync} = useMutation('delete user', (userId:string) => userService.deleteUser(userId), {
        onError: (error) => {
            toastError(error, 'Delete User') 
        },
        onSuccess: () => {
            toastr.success('Delete user', 'User was deleted successful'),
            queryData.refetch()
        }
    })
    return useMemo(() => ({
        handleSearch, ...queryData, searchTerm, deleteAsync
    }), [queryData, searchTerm, deleteAsync])
}