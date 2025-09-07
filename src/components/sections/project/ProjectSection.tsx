import { Menu, projectData } from '@/common';
import { SectionTitle } from '@/components/core/common';
import { Project } from './item';

export const ProjectSection: React.FC = () => {
  return (
    <section id={Menu.PROJECT} className="flex flex-col gap-24">
      <SectionTitle subtitle="👀 What I did?" title={'Projects'} />

      <div className="flex flex-col">
        {projectData.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
