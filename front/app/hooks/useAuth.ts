import { useTypesSelector } from "./useTypesSelector";

export const useAuth = () => useTypesSelector(state => state.user)