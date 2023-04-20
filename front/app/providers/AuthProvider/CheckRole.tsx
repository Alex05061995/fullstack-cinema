import { useAuth } from '@/hooks/useAuth';
import { TypeComponentAuthFields } from '@/shared/types/auth.types';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

interface ICheckRole {
    children: ReactNode;
}

const CheckRole:FC<TypeComponentAuthFields & ICheckRole> = ({children, Component: {isOnlyAdmin, isOnlyUser}}) => {
    const {user} = useAuth();
    const router = useRouter();
    const Children = () => <>{children}</>;
    const isUser = user && !user.isAdmin;

    if(user?.isAdmin) return <Children />
    if(isOnlyAdmin) {
        router.pathname !== '/404' && router.replace('/404');
        return null
    }

    if(isUser && isOnlyUser) {
        return <Children />
    } else {
        router.pathname !== '/auth' && router.replace('/auth');
        return null
    }
}

export default CheckRole