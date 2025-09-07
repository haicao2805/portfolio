// --------------------------------------------------
export const isDefined = <T>(value: T | null | undefined) => {
  return value !== undefined && value !== null;
};

// --------------------------------------------------
export const isBrowser = () => {
  return typeof window !== 'undefined';
};
