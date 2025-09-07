import { cn } from '@/utils/tailwind.util';

export interface IInputHelperTextProps {
  isError?: boolean;
  helperText: React.ReactNode;
}

export const InputHelperText: React.FC<IInputHelperTextProps> = (props) => {
  const { isError, helperText } = props;

  return <p className={cn('text__field--helper__text', isError && 'error')}>{helperText}</p>;
};
