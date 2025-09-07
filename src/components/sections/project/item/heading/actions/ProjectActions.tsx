import { IProject } from '@/common';
import { ProjectImages } from './images';
import { ToggleBtn } from './ToggleBtn';
import { UrlBtn } from './UrlBtn';

interface IProps extends IProject {}

export const ProjectActions: React.FC<IProps> = (props) => {
  return (
    <div className="flex justify-end gap-8">
      <ProjectImages {...props} />
      <UrlBtn {...props} />
      <ToggleBtn />
    </div>
  );
};
