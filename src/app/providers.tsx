'use client';

import { NextUIProvider } from '@nextui-org/react';

interface providerProps {
	children: React.ReactNode;
}

const Providers = ({ children }: providerProps) => {
	return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
