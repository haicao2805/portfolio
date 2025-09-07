'use client';

import React from 'react';

import { EmblaCarouselType } from 'embla-carousel';

type TUseCarouselThumbProps = {
  emblaApi: EmblaCarouselType | undefined;
  emblaThumbsApi: EmblaCarouselType | undefined;
};

type TUseCarouselThumbReturn = {
  selectedIndex: number;
  onClick: (index: number) => void;
};

export const useCarouselThumb = (opts: TUseCarouselThumbProps): TUseCarouselThumbReturn => {
  const { emblaApi, emblaThumbsApi } = opts;

  // --------------------------------------------------
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // --------------------------------------------------
  const onClick = React.useCallback(
    (index: number) => {
      if (!emblaApi || !emblaThumbsApi) {
        return;
      }
      emblaApi.scrollTo(index);
    },
    [emblaApi, emblaThumbsApi],
  );

  // --------------------------------------------------
  const onSelect = React.useCallback(() => {
    if (!emblaApi || !emblaThumbsApi) {
      return;
    }
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, emblaThumbsApi]);

  // --------------------------------------------------
  React.useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onSelect();

    emblaApi.on('select', onSelect).on('reInit', onSelect);

    return () => {};
  }, [emblaApi, onSelect]);

  return {
    selectedIndex,
    onClick,
  };
};
