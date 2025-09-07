import { cn } from '@/utils/tailwind.util';

export interface ILoadingProps {
  className?: string;
}

export const Loading: React.FC<ILoadingProps> = (props) => {
  const { className } = props;

  return <div className={cn('loading', className)} />;
};
