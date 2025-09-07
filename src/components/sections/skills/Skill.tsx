import { Menu, mySkills } from '@/common';
import { SectionTitle, SkillList } from '@/components/core/common';

export const Skill: React.FC = () => {
  return (
    <section id={Menu.SKILL} className="border-divider mt-24 flex flex-col gap-8 border-t py-16">
      <SectionTitle subtitle="😁 What can I do?" title={'Skills'} />

      <p className="text-text-secondary text-justify text-sm">
        {`These are the technologies and skills I’ve learned or used in my projects. I’m always curious and eager to explore new tools, so this list will keep evolving as I grow in my career.`}
      </p>

      <div className="flex flex-col gap-24">
        {mySkills.map((category) => {
          return (
            <div key={category.id} className="flex flex-col gap-4">
              <div>
                <span className="text-text-secondary text-[10px] font-medium tracking-widest uppercase">{`< ${category.title} />`}</span>
              </div>

              <SkillList data={category.skills} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
