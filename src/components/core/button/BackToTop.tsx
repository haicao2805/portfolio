'use client';

import React from 'react';
import { MdArrowUpward } from 'react-icons/md';

export const BackToTop: React.FC = () => {
  // --------------------------------------------------
  const handleClick = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <button
      title="Back to top"
      className="button outlined group max-md:hidden"
      onClick={handleClick}>
      Back to top
      <MdArrowUpward className="group-hover:animate-bounce" />
    </button>
  );
};
