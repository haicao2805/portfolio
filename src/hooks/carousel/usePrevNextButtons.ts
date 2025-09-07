'use client';

import React from 'react';

import { EmblaCarouselType } from 'embla-carousel';

type TUsePrevNextButtonsProps = {
  emblaApi: EmblaCarouselType | undefined;
  onButtonClick?: (emblaApi: EmblaCarouselType) => void;
};

type TUsePrevNextButtonsReturn = {
  disabledBtn: { prev: boolean; next: boolean };
  onClick: (opts: { variant: 'prev' | 'next' }) => void;
};

export const usePrevNextButtons = (opts: TUsePrevNextButtonsProps): TUsePrevNextButtonsReturn => {
  const { emblaApi, onButtonClick } = opts;

  // --------------------------------------------------
  const [disabledBtn, setDisabledBtn] = React.useState<{
    prev: boolean;
    next: boolean;
  }>({ prev: true, next: true });

  // --------------------------------------------------
  const onClick = React.useCallback(
    (params: { variant: 'prev' | 'next' }) => {
      if (!emblaApi) {
        return;
      }

      const { variant } = params;

      if (variant === 'prev') {
        emblaApi.scrollPrev();
      } else {
        emblaApi.scrollNext();
      }

      if (onButtonClick) {
        onButtonClick(emblaApi);
      }
    },
    [emblaApi, onButtonClick],
  );

  // --------------------------------------------------
  const onSelect = React.useCallback((_emblaApi: EmblaCarouselType) => {
    setDisabledBtn({
      prev: !_emblaApi.canScrollPrev(),
      next: !_emblaApi.canScrollNext(),
    });
  }, []);

  // --------------------------------------------------
  React.useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);

    return () => {};
  }, [emblaApi, onSelect]);

  return {
    disabledBtn,
    onClick,
  };
};
