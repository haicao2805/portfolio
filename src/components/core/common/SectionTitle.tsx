export interface ISectionTitleProps {
  subtitle: string;
  title: React.ReactNode;
}

export const SectionTitle: React.FC<ISectionTitleProps> = (props) => {
  const { subtitle, title } = props;

  return (
    <div className="flex flex-col gap-4">
      <h6 className="emoji__title">{subtitle}</h6>
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
};
