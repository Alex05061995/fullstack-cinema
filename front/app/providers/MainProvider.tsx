import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import Layout from '@/components/layout/Layout';

import { store } from '@/store/store';

import AuthProvider from './AuthProvider/AuthProvider';
import HeadProvider from './HeadProvider/HeadProvider';
import ReduxToast from './ReduxToast';
import { TypeComponentAuthFields } from '@/shared/types/auth.types';

interface IMainProvider {
	children: ReactNode;
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const MainProvider: FC<TypeComponentAuthFields & IMainProvider> = ({ children, Component }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					<AuthProvider Component={Component}>
						<Layout>{children}</Layout>
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	);
};

export default MainProvider;
