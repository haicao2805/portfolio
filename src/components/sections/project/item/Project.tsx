import { IProject } from '@/common';
import { Accordion } from '@/components/core/accordion';
import { ProjectCollapse } from './ProjectCollapse';
import { ProjectHeading } from './heading';

interface IProps extends IProject {}

export const Project: React.FC<IProps> = (props) => {
  const { isExpanded } = props;

  return (
    <Accordion
      isExpanded={isExpanded}
      slots={{
        heading: <ProjectHeading {...props} />,
        collapse: <ProjectCollapse {...props} />,
      }}
      slotProps={{
        wrapper: {
          className: 'border-divider flex flex-col border-b',
        },
      }}
    />
  );
};
