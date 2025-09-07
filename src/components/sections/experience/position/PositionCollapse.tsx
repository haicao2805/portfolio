import { TExperiencePosition } from '@/common';
import { SkillList } from '@/components/core/common';

interface IProps extends TExperiencePosition {}

export const PositionCollapse: React.FC<IProps> = (props) => {
  const { descriptions, skills } = props;

  return (
    <div className="flex flex-col gap-12 pl-44 md:pl-60">
      <ul className="flex flex-col gap-8">
        {descriptions?.map((desc, idx) => {
          return (
            <li key={idx} className="flex gap-8 text-base">
              <span className="select-none">-</span>
              {desc}
            </li>
          );
        })}
      </ul>

      {!!skills?.length && <SkillList data={skills} />}
    </div>
  );
};
