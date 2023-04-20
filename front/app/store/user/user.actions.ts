import { AuthService } from "@/services/auth/auth.service"
import { toastError } from "@/utils/toast-error";
import { createAsyncThunk } from "@reduxjs/toolkit"
import { errorCatch } from "api/api.helpers";
import { toastr } from "react-redux-toastr";
import { IAuthResponse, IEmailPassword } from "./user.interface"


/*regist*/
export const register =  createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/register',
    async ({email, password}, {rejectWithValue}) => {
        try {
            const response = await AuthService.register(email, password);
            toastr.success('Registration', 'Complete Successfully');
            return response.data;
        } catch(e) {
            toastError(e);
            return rejectWithValue(e);
        }
    }
)


/*logim*/
export const login =  createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/login',
    async ({email, password}, {rejectWithValue}) => {
        try {
            const response = await AuthService.login(email, password);
            toastr.success('Login', 'Complete Successfully');
            return response.data;
        } catch(e) {
            toastError(e);
            return rejectWithValue(e);
        }
    }
)



/*logOut*/
export const logout =  createAsyncThunk('auth/logout', async () => {
    await AuthService.logout()
})


/*checkAuth*/
export const checkAuth =  createAsyncThunk<IAuthResponse>(
    'auth/check-auth',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const response = await AuthService.getNewTOkens();
            return response.data;
        } catch(e) {
            if(errorCatch(e) === 'jwt expired') {
                toastr.error(
                    'LogOut',
                    'You authorization is finished, sing in again!'
                )
                dispatch(logout())
            }
            
            return rejectWithValue(e);
        }
    }
)