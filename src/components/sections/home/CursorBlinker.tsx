'use client';

import React from 'react';

import { motion, Variants } from 'framer-motion';

const cursorVariants: Variants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

export const CursorBlinker: React.FC = () => {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="bg-primary inline-block h-20 w-2 translate-y-1"
    />
  );
};
