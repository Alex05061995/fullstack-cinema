import { TypeRootState } from "@/store/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useTypesSelector:TypedUseSelectorHook<TypeRootState> = useSelector;