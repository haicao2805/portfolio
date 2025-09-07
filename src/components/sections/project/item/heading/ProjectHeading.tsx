import { IProject } from '@/common';
import { getPeriodFormat } from '@/utils/formatted.util';
import { ProjectActions } from './actions';
import { ProjectLogo } from './ProjectLogo';

interface IProps extends IProject {}

export const ProjectHeading: React.FC<IProps> = (props) => {
  const { title, periodFrom, periodTo } = props;

  // --------------------------------------------------
  const period = getPeriodFormat({ from: periodFrom, to: periodTo });

  return (
    <div className="flex items-center">
      <ProjectLogo {...props} />

      <div className="border-divider flex w-full items-center justify-between gap-12 border-l border-dotted p-12">
        <div className="flex flex-col">
          <h6 className="text-base font-semibold">{title}</h6>

          <p className="text-text-secondary text-xs font-medium">{period}</p>
        </div>

        <ProjectActions {...props} />
      </div>
    </div>
  );
};
