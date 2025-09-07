import { cn } from '@/utils/tailwind.util';

export interface IInputLabelProps {
  id?: string;
  isError?: boolean;
  isRequired?: boolean;
  label: React.ReactNode;
}

export const InputLabel: React.FC<IInputLabelProps> = (props) => {
  const { id, isError, isRequired, label } = props;

  return (
    <label
      htmlFor={id}
      className={cn('text__field--label group-has-[input:focus]:text-primary', isError && 'error')}>
      {label}

      {!!isRequired && <span className="text__field--required">{' *'}</span>}
    </label>
  );
};
