'use client';

import React, { ReactNode } from 'react'
import { ThemeProvider } from '@wits/next-themes'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: any) {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  );
}
