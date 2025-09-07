import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';

import { IProject } from '@/common';

interface IProps extends IProject {}

export const UrlBtn: React.FC<IProps> = (props) => {
  const { url } = props;

  // --------------------------------------------------
  if (!url) {
    return null;
  }

  return (
    <Link
      role="button"
      className="icon__button"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.stopPropagation();
      }}>
      <BiLinkExternal />
    </Link>
  );
};
