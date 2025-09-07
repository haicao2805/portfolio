'use client';

import React from 'react';

import { useTheme } from 'next-themes';

import { MoonIcon, SunIcon } from '@/assets/icons';

export const ThemeToggleBtn: React.FC = () => {
  // --------------------------------------------------
  const { resolvedTheme, setTheme } = useTheme();

  // --------------------------------------------------
  const toggleTheme = React.useCallback(
    (opts: { currentTheme?: string }) => {
      if (typeof window === 'undefined') {
        return;
      }

      const { currentTheme } = opts;
      const otherTheme = currentTheme === 'light' ? 'dark' : 'light';

      if (!document.startViewTransition) {
        setTheme(otherTheme);
        return;
      }

      document.startViewTransition(() => {
        setTheme(otherTheme);
      });
    },
    [setTheme],
  );

  return (
    <button
      className="icon__button--squared"
      aria-label={`Toggle theme`}
      onClick={() => {
        toggleTheme({ currentTheme: resolvedTheme });
      }}>
      <SunIcon className="dark:hidden" />
      <MoonIcon className="hidden dark:inline-block" />
    </button>
  );
};
