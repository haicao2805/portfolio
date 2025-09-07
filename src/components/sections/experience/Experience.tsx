import { Menu, workExperienceData } from '@/common';
import { SectionTitle } from '@/components/core/common';
import { Company } from './company';

export const Experience: React.FC = () => {
  return (
    <section id={Menu.EXPERIENCE} className="flex flex-col gap-24">
      <SectionTitle subtitle="🚀 Where did I grow?" title={'Experience'} />

      {workExperienceData.map((exp) => {
        return <Company key={exp.id} {...exp} />;
      })}
    </section>
  );
};
