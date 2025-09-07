import { TExperience } from '@/common';
import { Position } from '../position';
import { CompanyActions } from './actions';
import { CompanyInfo } from './info';

interface IProps extends TExperience {}

export const Company: React.FC<IProps> = (props) => {
  const { positions } = props;

  return (
    <div className="flex w-full flex-col gap-12">
      <div className="flex items-center justify-between gap-12">
        <CompanyInfo {...props} />
        <CompanyActions {...props} />
      </div>

      <div className="before:bg-divider relative flex flex-col gap-12 before:absolute before:left-16 before:h-full before:w-1 before:content-['']">
        {positions.map((position) => {
          return <Position key={position.id} {...position} />;
        })}
      </div>
    </div>
  );
};
