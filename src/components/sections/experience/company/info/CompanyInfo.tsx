import { TExperience } from '@/common';
import { getPeriodFormat } from '@/utils/formatted.util';
import { CompanyLogo } from './CompanyLogo';
import { CurrentDot } from './CurrentDot';

interface IProps extends TExperience {}

export const CompanyInfo: React.FC<IProps> = (props) => {
  const { company } = props;

  // --------------------------------------------------
  const period = getPeriodFormat({ from: company.periodFrom, to: company.periodTo });

  // --------------------------------------------------
  const subtitle = company.location ? `${company.location} | ${period}` : period;

  return (
    <div className="flex items-center gap-12">
      <CompanyLogo {...props} />

      <div className="flex flex-col">
        <div className="flex items-center gap-12">
          <h6 className="text-base font-semibold">{company.name}</h6>

          {!!company.isCurrentEmployer && <CurrentDot />}
        </div>

        <p className="text-text-secondary text-xs font-medium">{subtitle}</p>
      </div>
    </div>
  );
};
