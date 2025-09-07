// --------------------------------------------------
export const getPeriodFormat = (opts: { from?: string; to?: string }) => {
  const { from, to } = opts;

  if (!from) {
    return '';
  }

  let periodTo = `Present`;
  if (to) {
    periodTo = to;
  }

  return `${from} - ${periodTo}`;
};
