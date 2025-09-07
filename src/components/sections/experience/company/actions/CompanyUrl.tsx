import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';

import { TExperience } from '@/common';

interface IProps extends TExperience {}

export const CompanyUrl: React.FC<IProps> = (props) => {
  const { company } = props;

  // --------------------------------------------------
  if (!company.url) {
    return null;
  }

  return (
    <Link
      title={`${company.name} Website`}
      role="button"
      className="icon__button"
      href={company.url}
      target="_blank"
      rel="noopener noreferrer">
      <BiLinkExternal />
    </Link>
  );
};
