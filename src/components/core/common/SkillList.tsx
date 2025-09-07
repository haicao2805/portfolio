import { skillIcon, Skills } from '@/common';
import { SkillChip } from '../chip';

export interface ISkillListProps {
  data: string[];
}

export const SkillList: React.FC<ISkillListProps> = (props) => {
  const { data } = props;

  return (
    <div className="flex flex-wrap gap-8">
      {data.map((skill) => {
        return (
          <SkillChip key={skill} icon={skillIcon?.[skill]} label={Skills.translate?.[skill]} />
        );
      })}
    </div>
  );
};
