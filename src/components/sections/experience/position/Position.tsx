import { TExperiencePosition } from '@/common';
import { Accordion } from '@/components/core/accordion';
import { PositionCollapse } from './PositionCollapse';
import { PositionHeading } from './PositionHeading';

interface IProps extends TExperiencePosition {}

export const Position: React.FC<IProps> = (props) => {
  const { isExpanded } = props;

  return (
    <div className="last:before:bg-background relative last:before:absolute last:before:left-0 last:before:h-full last:before:w-20">
      <Accordion
        isExpanded={isExpanded}
        slots={{
          heading: <PositionHeading {...props} />,
          collapse: <PositionCollapse {...props} />,
        }}
        slotProps={{
          wrapper: {
            className: 'gap-12',
          },
        }}
      />
    </div>
  );
};
