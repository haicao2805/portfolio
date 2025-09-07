'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/tailwind.util';

interface IProps {
  className?: string;
  menu: { id: string; title: string; route: string };
}

const MenuListItemComponent: React.FC<IProps> = (props) => {
  const { menu, className } = props;

  // --------------------------------------------------
  const pathname = usePathname();

  // --------------------------------------------------
  const isSelected = React.useMemo(() => {
    return pathname === menu.route;
  }, [menu.route, pathname]);

  return (
    <Link
      href={menu.route}
      className={cn(
        'hover:text-primary text-base font-semibold uppercase transition-colors',
        className,
        isSelected ? 'text-primary' : 'text-foreground',
      )}>
      {menu.title}
    </Link>
  );
};

export const MenuListItem = React.memo(MenuListItemComponent);
