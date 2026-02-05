'use client';

import { ThemeProvider } from "next-themes";
import { ReactLenis } from '@studio-freight/react-lenis';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
      <ReactLenis root>
        {/* @ts-expect-error React 19 types mismatch */}
        {children}
      </ReactLenis>
    </ThemeProvider>
  );
}
