import { Menu } from '@/common';
import { SectionTitle } from '@/components/core/common';
import { ContactForm } from './ContactForm';

export const Contact: React.FC = () => {
  return (
    <section id={Menu.CONTACT} className="flex flex-col gap-12">
      <SectionTitle
        subtitle="😎 Interested?"
        title={
          <>
            {`Let's `}
            <span className="text-primary">Connect!</span>
          </>
        }
      />

      <p className="text-text-secondary text-base">
        Do you have a project that you would like to collaborate on? Please feel free to contact me.
      </p>

      <ContactForm />
    </section>
  );
};
