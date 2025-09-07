'use client';

import React from 'react';

import { motion, Variants } from 'framer-motion';

import { Menu } from '@/common';
import { MenuListItem } from './MenuListItem';

const sidebarVariants: Variants = {
  open: {
    clipPath: `circle(150% at top right)`,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
  closed: {
    clipPath: 'circle(0px at top right)',
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuDrawer: React.FC = () => {
  // --------------------------------------------------
  const [isOpen, setIsOpen] = React.useState(false);

  // --------------------------------------------------
  const handleOpen = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  // --------------------------------------------------
  const handleClose = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <motion.div initial={false} animate={isOpen ? 'open' : 'closed'} className="relative">
      <button
        className="icon__button--squared z-10"
        onClick={() => {
          if (!isOpen) {
            handleOpen();
            return;
          }
          handleClose();
        }}>
        <svg width="1rem" height="1rem" viewBox="0 0 24 24">
          <Path
            variants={{
              closed: { d: 'M 3 5.077 L 21 5.077' },
              open: { d: 'M 6 18.923 L 18 5.077' },
            }}
          />
          <Path
            d="M 3 12 L 21 12"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: 'M 3 18.923 L 21 18.923' },
              open: { d: 'M 6 5.077 L 18 18.923' },
            }}
          />
        </svg>
      </button>

      <motion.div className="bg-foreground fixed inset-0" variants={sidebarVariants} />

      <motion.div className="bg-background fixed inset-0" variants={sidebarVariants}>
        <motion.ul
          variants={navVariants}
          className="flex h-full w-full flex-col items-center justify-center gap-24">
          {Menu.options.map((menu) => {
            return (
              <motion.li
                key={menu.id}
                className="cursor-pointer rounded-lg px-12 py-4 transition-colors"
                variants={itemVariants}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}>
                <MenuListItem menu={menu} className="text-2xl" />
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const Path = (props: PathProps) => (
  <motion.path
    fill="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    className="stroke-foreground"
    {...props}
  />
);
