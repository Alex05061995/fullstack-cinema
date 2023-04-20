import { getStoreLocal } from "@/utils/local-storage";
import { createSlice } from "@reduxjs/toolkit";
import { checkAuth, login, logout, register } from "./user.actions";
import { IInitialState } from "./user.interface";

const initialState:IInitialState = {
    isLoading: false,
    user: getStoreLocal('user')
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state, actions) => {
            state.isLoading = true;
        })
        builder.addCase(register.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.user = actions.payload.user;
        })
        builder.addCase(register.rejected, (state, actions) => {
            state.isLoading = false;
            state.user = null;
        })


        builder.addCase(login.pending, (state, actions) => {
            state.isLoading = true;
        })
        builder.addCase(login.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.user = actions.payload.user;
        })
        builder.addCase(login.rejected, (state, actions) => {
            state.isLoading = false;
            state.user = null;
        })

        builder.addCase(logout.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.user = null;
        })

        builder.addCase(checkAuth.fulfilled, (state, actions) => {
            state.user = actions.payload.user;
        })
    }
})

export const {reducer} = userSlice;