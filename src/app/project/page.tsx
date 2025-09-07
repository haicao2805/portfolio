import { Metadata } from 'next';

import { AppRoutes } from '@/common';
import { ProjectSection } from '@/components/sections/project';

export const metadata: Metadata = {
  title: 'Project | Hai Cao - Portfolio',
  openGraph: {
    title: 'Project | Hai Cao - Portfolio',
    url: AppRoutes.websitePath.project,
  },
};

export default function Page() {
  return <ProjectSection />;
}
