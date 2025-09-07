'use client';

import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

// --------------------------------------------------
type TUseCarouselProps = {
  options?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
};

// --------------------------------------------------
useEmblaCarousel.globalOptions = {
  loop: true,
  // duration: 30,
};

// --------------------------------------------------
export const useCarousel = (opts?: TUseCarouselProps) => {
  const { options, plugins } = opts || {};
  return useEmblaCarousel(options, plugins);
};
