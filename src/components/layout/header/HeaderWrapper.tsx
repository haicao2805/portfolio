'use client';

import React from 'react';

import { cn } from '@/utils/tailwind.util';

interface IHeaderWrapperProps {
  children: React.ReactNode;
}

const THRESHOLD = 64;
const HALF_THRESHOLD = THRESHOLD / 2;

export const HeaderWrapper: React.FC<IHeaderWrapperProps> = (props) => {
  const { children } = props;

  // --------------------------------------------------
  const frame = React.useRef(0);
  const lastScrollY = React.useRef(0);
  const ticking = React.useRef(false);

  // --------------------------------------------------
  const [isShow, setIsShow] = React.useState(true);

  // --------------------------------------------------
  const updateScroll = React.useCallback(() => {
    const currentScrollY = window.scrollY;
    const diff = currentScrollY - lastScrollY.current;

    if (currentScrollY <= 0) {
      setIsShow(true);
    } else if (diff > HALF_THRESHOLD) {
      setIsShow(false);
      lastScrollY.current = currentScrollY;
    } else if (diff < -THRESHOLD) {
      setIsShow(true);
      lastScrollY.current = currentScrollY;
    }

    ticking.current = false;
  }, []);

  // --------------------------------------------------
  const handleScroll = React.useCallback(() => {
    if (ticking.current) {
      return;
    }

    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(updateScroll);
    ticking.current = true;
  }, [updateScroll]);

  // --------------------------------------------------
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frame.current);
    };
  }, [handleScroll]);

  return (
    <header
      className={cn(
        `sticky top-0 z-[1020] transition-transform duration-300`,
        !isShow && '-translate-y-full',
      )}>
      {children}
    </header>
  );
};
