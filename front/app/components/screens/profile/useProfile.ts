import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import { IProfileInput } from "./profile.interface";
import { useMutation, useQuery } from "react-query";
import { userService } from "@/services/user.service";
import { toastError } from "@/utils/toast-error";
import { toastr } from "react-redux-toastr";

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
    const {isLoading} = useQuery(['profile'], () => userService.getProfile(), {
        onSuccess: ({data}) => {
            setValue('email', data.email)
        },
        onError: (error) => {
            toastError(error, 'Get profile')
        }
    })

    const {mutateAsync} = useMutation('update user', (data: IProfileInput) => userService.updateProfile(data), {
        onError: (error) => {
            toastError(error, 'Update profile')
        },
        onSuccess: () => {
            toastr.success('Update profile', 'Update was successful');
        }
    })

    const onSubmit:SubmitHandler<IProfileInput> = async (data) => {
        await mutateAsync(data)
    }

    return {
        onSubmit, isLoading
    }
}