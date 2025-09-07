export const CurrentDot: React.FC = () => {
  return (
    <span className="relative flex items-center justify-center">
      <span className="bg-primary absolute inline-flex h-12 w-12 animate-ping rounded-full opacity-50" />
      <span className="bg-primary relative inline-flex h-8 w-8 rounded-full" />
      <span className="sr-only">Current Employer</span>
    </span>
  );
};
