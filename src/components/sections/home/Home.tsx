import DOMPurify from 'isomorphic-dompurify';

import { homeData, Menu, Socials } from '@/common';
import { SectionTitle } from '@/components/core/common';
import { CursorBlinker } from './CursorBlinker';
import { TextAnimation } from './TextAnimation';

export const Home: React.FC = () => {
  return (
    <section id={Menu.HOME} className="flex flex-col gap-12">
      <SectionTitle
        subtitle="👋 Hello!"
        title={
          <>
            {`I'm `}
            <TextAnimation />
            <CursorBlinker />
          </>
        }
      />

      <div className="text-text-secondary flex flex-col gap-12 text-justify text-base">
        {homeData.descriptions.map((desc, index) => {
          return (
            <span key={index} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(desc) }} />
          );
        })}
      </div>

      <div className="flex flex-wrap gap-8">
        {Socials.options.map((social) => {
          const IconComponent = social.icon;

          return (
            <a
              role="button"
              key={social.id}
              title={social.title}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button hover:text-primary">
              <IconComponent aria-hidden size={16} />
              {social.title}
            </a>
          );
        })}
      </div>
    </section>
  );
};
