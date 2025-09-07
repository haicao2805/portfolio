import Image from 'next/image';

import { IProject } from '@/common';

interface IProps extends IProject {}

export const ProjectLogo: React.FC<IProps> = (props) => {
  const { logo, title } = props;

  return (
    <div
      aria-hidden
      className="bg-card-bg mx-16 flex h-40 w-40 items-center justify-center rounded-lg">
      {logo ? (
        <Image
          src={logo}
          alt={title}
          width={40}
          height={40}
          quality={100}
          className="rounded-lg"
          unoptimized
          loading="lazy"
        />
      ) : (
        <div className="bg-card-bg h-full w-full rounded-lg"></div>
      )}
    </div>
  );
};
