'use client';

import React from 'react';

import { ICarouselSlide } from '@/common';
import { CarouselArrowBtn, CarouselSlides, CarouselThumbs } from '@/components/core/carousel';
import { useCarousel, useCarouselThumb, usePrevNextButtons } from '@/hooks/carousel';

export interface IProjectCarouselProps {
  slides: ICarouselSlide[];
}

const ProjectCarouselComponent: React.FC<IProjectCarouselProps> = (props) => {
  const { slides } = props;

  // --------------------------------------------------
  const [emblaMainRef, emblaMainApi] = useCarousel();

  // --------------------------------------------------
  const [emblaThumbsRef, emblaThumbsApi] = useCarousel({
    options: {
      containScroll: 'keepSnaps',
      dragFree: true,
    },
  });

  // --------------------------------------------------
  const { selectedIndex, onClick: onThumbClick } = useCarouselThumb({
    emblaApi: emblaMainApi,
    emblaThumbsApi,
  });

  // --------------------------------------------------
  const { disabledBtn, onClick } = usePrevNextButtons({ emblaApi: emblaMainApi });

  return (
    <div className="flex flex-col gap-8">
      <div className="relative">
        <div ref={emblaMainRef} className="overflow-hidden">
          <CarouselSlides slides={slides} />
        </div>

        <CarouselArrowBtn
          variant="prev"
          onClick={() => onClick({ variant: 'prev' })}
          disabled={disabledBtn.prev}
        />

        <CarouselArrowBtn
          variant="next"
          onClick={() => onClick({ variant: 'next' })}
          disabled={disabledBtn.next}
        />
      </div>

      <div ref={emblaThumbsRef} className="overflow-hidden">
        <CarouselThumbs slides={slides} selectedIndex={selectedIndex} onClick={onThumbClick} />
      </div>
    </div>
  );
};

export const ProjectCarousel = React.memo(ProjectCarouselComponent);
