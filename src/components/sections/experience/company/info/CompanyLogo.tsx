import Image from 'next/image';

import { TExperience } from '@/common';

interface IProps extends TExperience {}

export const CompanyLogo: React.FC<IProps> = (props) => {
  const { company } = props;

  return (
    <div
      aria-hidden
      className="border-divider bg-card-bg flex h-32 w-32 items-center justify-center rounded-full border p-4">
      {company.logo ? (
        <Image
          src={company.logo}
          alt={company.name}
          width={24}
          height={24}
          quality={100}
          className="rounded-full"
          unoptimized
          loading="lazy"
        />
      ) : (
        <div className="bg-text-secondary h-8 w-8 rounded-full" />
      )}
    </div>
  );
};
