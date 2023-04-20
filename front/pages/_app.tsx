import type { AppProps } from 'next/app';
import MainProvider from 'providers/MainProvider';

import '@/assets/styles/globals.scss';
import { TypeComponentAuthFields } from '@/shared/types/auth.types';

type TypeAppProps = TypeComponentAuthFields & AppProps;

export default function App({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	);
}
