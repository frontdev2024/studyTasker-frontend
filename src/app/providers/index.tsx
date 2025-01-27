import React, { ReactNode } from 'react';
import { PrimeReactProvider } from 'primereact/api';

const ProvidersContext = ({children}: Readonly<{children: ReactNode}>) => {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
};
export default ProvidersContext;
