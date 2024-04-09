'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

interface providerProps {
	children: React.ReactNode;
}

const Providers = ({ children }: providerProps) => {
	return (
		<SessionProvider>
			<NextUIProvider>{children}</NextUIProvider>
		</SessionProvider>
	);
};

export default Providers;
