import Link from 'next/link';

import { Logo } from '@/assets/svgs';
import { MenuDrawer } from './MenuDrawer';
import { MenuList } from './MenuList';
import { ThemeToggleBtn } from './ThemeToggleBtn';
import { HeaderWrapper } from './HeaderWrapper';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <nav className="border-divider bg-background md:bg-background/30 container flex h-64 items-center justify-between gap-12 border-b md:mt-16 md:rounded-full md:border md:backdrop-blur-md">
        <Link href="/">
          <Logo
            width={40}
            height={40}
            className="transition-transform duration-300 hover:scale-110"
          />
        </Link>

        <div className="hidden md:block">
          <MenuList />
        </div>

        <div className="flex gap-12">
          <ThemeToggleBtn />

          <div className="md:hidden">
            <MenuDrawer />
          </div>
        </div>
      </nav>
    </HeaderWrapper>
  );
};
