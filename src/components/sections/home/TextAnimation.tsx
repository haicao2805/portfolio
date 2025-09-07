'use client';

import React from 'react';

import { textAnimation } from '@/common';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

const TEXT_ANIMATION_DURATION = 60;

export const TextAnimation: React.FC = () => {
  // --------------------------------------------------
  const textIndex = useMotionValue(0);
  const count = useMotionValue(0);
  const updatedThisRound = useMotionValue(true);

  // --------------------------------------------------
  const baseText = useTransform(textIndex, (latest) => textAnimation[latest] || '');
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => baseText.get().slice(0, latest));

  // --------------------------------------------------
  React.useEffect(() => {
    const controls = animate(count, TEXT_ANIMATION_DURATION, {
      type: 'tween',
      delay: 0,
      duration: 1,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === textAnimation.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });

    return () => {
      controls.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <motion.span className="text-primary inline">{displayText}</motion.span>;
};
