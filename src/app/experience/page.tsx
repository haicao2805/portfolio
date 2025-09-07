import { Metadata } from 'next';

import { AppRoutes } from '@/common';
import { Experience } from '@/components/sections/experience';

export const metadata: Metadata = {
  title: 'Experience | Hai Cao - Portfolio',
  openGraph: {
    title: 'Experience | Hai Cao - Portfolio',
    url: AppRoutes.websitePath.experience,
  },
};

export default function Page() {
  return <Experience />;
}
