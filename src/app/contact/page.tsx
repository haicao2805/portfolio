import { Metadata } from 'next';

import { AppRoutes } from '@/common';
import { Contact } from '@/components/sections/contact/Contact';

export const metadata: Metadata = {
  title: 'Contact | Hai Cao - Portfolio',
  openGraph: {
    title: 'Contact | Hai Cao - Portfolio',
    url: AppRoutes.websitePath.contact,
  },
};

export default function Page() {
  return <Contact />;
}
