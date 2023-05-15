'use client';

import { ThemeProvider } from '@wits/next-themes'

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  );
}
