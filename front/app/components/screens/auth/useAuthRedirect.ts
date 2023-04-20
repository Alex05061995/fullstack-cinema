import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/router";
import { useEffect } from "react";

export const UseAuthRedirect = () => {
    const {user} = useAuth();
    const {query, push} = useRouter();
    const redirect = query.redirect ? String(query.redirect) : '/';

    useEffect(() => {
        if(user) push(redirect)
    }, [user, redirect, push])
}