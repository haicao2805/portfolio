import { BiCodeAlt } from 'react-icons/bi';

import { TExperiencePosition } from '@/common';
import { getPeriodFormat } from '@/utils/formatted.util';
import { PositionActions } from './PositionActions';

interface IProps extends TExperiencePosition {}

export const PositionHeading: React.FC<IProps> = (props) => {
  const { title, periodFrom, periodTo, type } = props;

  // --------------------------------------------------
  const period = getPeriodFormat({ from: periodFrom, to: periodTo });

  // --------------------------------------------------
  const subtitle = type ? `${type} | ${period}` : period;

  return (
    <div className="flex items-center justify-between gap-12">
      <div className="flex items-start gap-12">
        <div
          aria-hidden
          className="border-divider bg-card-bg z-10 mx-4 flex h-24 w-24 items-center justify-center rounded-full border">
          <BiCodeAlt size={12} className="text-primary" />
        </div>

        <div className="flex flex-col">
          <h6 className="text-base font-semibold">{title}</h6>

          <p className="text-text-secondary text-xs font-medium">{subtitle}</p>
        </div>
      </div>

      <PositionActions />
    </div>
  );
};
