import Image from 'next/image';

import { ICarouselSlide } from '@/common';
import { cn } from '@/utils/tailwind.util';

export interface ICarouselThumbsProps {
  slides: ICarouselSlide[];
  selectedIndex: number;
  onClick: (index: number) => void;
}

export const CarouselThumbs: React.FC<ICarouselThumbsProps> = (props) => {
  const { slides, selectedIndex, onClick } = props;

  return (
    <div className="inline-flex gap-8">
      {slides.map((item, index) => {
        return (
          <CarouselThumb
            key={item.id}
            data={item}
            isSelected={selectedIndex === index}
            onClick={() => onClick(index)}
          />
        );
      })}
    </div>
  );
};

// ==================================================
interface ICarouselThumbProps {
  data: ICarouselSlide;
  isSelected: boolean;
  onClick: () => void;
}

const CarouselThumb: React.FC<ICarouselThumbProps> = (props) => {
  const { data, isSelected, onClick } = props;

  return (
    <div
      className={cn(
        `relative aspect-square flex-none basis-[60px] cursor-pointer touch-manipulation after:absolute after:inset-0 after:border-2 after:content-[''] md:basis-[80px] md:after:border-4`,
        isSelected ? 'after:border-primary' : 'opacity-50 after:border-transparent',
      )}
      onClick={onClick}>
      <Image
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        loading="lazy"
        src={data.src}
        alt={data.alt}
        sizes="(max-width: 768px) 60px, 80px"
      />
    </div>
  );
};
