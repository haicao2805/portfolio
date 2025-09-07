import { cn } from '@/utils/tailwind.util';
import { InputHelperText } from './InputHelperText';
import { InputLabel } from './InputLabel';

export interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isFullWidth?: boolean;
  isError?: boolean;

  label?: React.ReactNode;
  value?: any;
  inputRef?: React.Ref<any>;
  helperText?: React.ReactNode;
}

export const TextField: React.FC<ITextFieldProps> = (props) => {
  const {
    id,
    isFullWidth,
    label,
    className,
    inputRef,
    helperText,
    isError,
    required,
    ...restProps
  } = props;

  return (
    <div className="text__field--root group">
      {!!label && <InputLabel id={id} isError={isError} isRequired={required} label={label} />}

      <input
        {...restProps}
        ref={inputRef}
        id={id}
        className={cn('text__field--input', isFullWidth && 'w-full', className, isError && 'error')}
        required={required}
        aria-invalid={!!isError}
      />

      {!!helperText && <InputHelperText isError={isError} helperText={helperText} />}
    </div>
  );
};
