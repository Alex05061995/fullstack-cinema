import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./RootReducer";

export const store =  configureStore({
    reducer: reducers,
    devTools: true
})

export type TypeRootState = ReturnType<typeof store.getState>