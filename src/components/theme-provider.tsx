"use client";
import { useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted] = useState(true);
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      {mounted ? children : null}
    </NextThemesProvider>
  );
}
