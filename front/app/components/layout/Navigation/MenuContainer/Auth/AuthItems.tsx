import { FC } from 'react';

import { getAdminUrl } from '@/config/url.config';

import MenuItem from '../MenuItem';

import LogoutButton from './LogoutButton';
import { useAuth } from '@/hooks/useAuth';
import {useState, useEffect} from 'react'

const AuthItems: FC = () => {
 
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    },[])
  
	const { user } = useAuth();
  return (
		<>
			{user && hydrated ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
			)}
 
			{user?.isAdmin && hydrated && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminUrl(''),
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	)
};

export default AuthItems;
