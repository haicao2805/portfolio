import { cn } from '@/utils/tailwind.util';

export interface ISkillChipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  icon?: React.ReactNode;
  label: string;
}

export const SkillChip: React.FC<ISkillChipProps> = (props) => {
  const { className, icon, label, ...rest } = props;

  return (
    <div
      {...rest}
      aria-labelledby={label}
      className={cn(
        'border-card-border bg-card-bg hover:border-card-hover-border flex items-center gap-4 rounded-sm border px-8 py-4 text-xs font-semibold transition-colors',
        className,
      )}>
      {icon}
      {label}
    </div>
  );
};
