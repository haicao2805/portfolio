'use client';

import React from 'react';

import { usePathname } from 'next/navigation';

export const useVisitors = () => {
  // --------------------------------------------------
  const path = usePathname();

  // --------------------------------------------------
  const trackVisitor = React.useCallback(async () => {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const lastTracked = localStorage.getItem('lastTracked');

      if (lastTracked === today) {
        return;
      }

      await fetch('/api/visitor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userAgent: navigator.userAgent,
          path,
        }),
      });

      localStorage.setItem('lastTracked', today);
    } catch (err) {
      console.error('Failed to track visitor:', err);
    }
  }, [path]);

  // --------------------------------------------------
  React.useEffect(() => {
    trackVisitor();

    return () => {};
  }, [trackVisitor]);
};
