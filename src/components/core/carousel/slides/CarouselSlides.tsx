import Image from 'next/image';

import { ICarouselSlide } from '@/common';

export interface ICarouselSlidesProps {
  slides: ICarouselSlide[];
}

export const CarouselSlides: React.FC<ICarouselSlidesProps> = (props) => {
  const { slides } = props;

  return (
    <div className="flex touch-pan-y touch-pinch-zoom">
      {slides.map((item) => (
        <CarouselSlide key={item.id} data={item} />
      ))}
    </div>
  );
};

// ==================================================
interface ICarouselSlideProps {
  data: ICarouselSlide;
}

const CarouselSlide: React.FC<ICarouselSlideProps> = (props) => {
  const { data } = props;

  return (
    <div className="relative aspect-[4/3] flex-none basis-full translate-3d md:aspect-video">
      <Image
        className="object-contain select-none"
        fill
        quality={100}
        loading="lazy"
        src={data.src}
        alt={data.alt}
        sizes="100vw"
      />
    </div>
  );
};
