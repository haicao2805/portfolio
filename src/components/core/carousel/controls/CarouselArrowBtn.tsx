import { MdKeyboardArrowLeft } from 'react-icons/md';

import { cn } from '@/utils/tailwind.util';

export interface ICarouselArrowBtnProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant: 'prev' | 'next';
}

export const CarouselArrowBtn: React.FC<ICarouselArrowBtnProps> = (props) => {
  const { variant, className, ...rest } = props;

  return (
    <button
      {...rest}
      className={cn(
        'absolute top-1/2 hidden -translate-y-1/2 rounded-full bg-black/50 p-4 hover:bg-black/70 disabled:hidden md:flex',
        variant === 'prev' ? 'left-4' : 'right-4',
        className,
      )}>
      <MdKeyboardArrowLeft
        className={cn('text-2xl text-white md:text-4xl', variant === 'next' && 'rotate-180')}
      />
    </button>
  );
};
