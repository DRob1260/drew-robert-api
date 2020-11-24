export const calculatePositivityRate = (
  current: {
    positive: number;
    tested: number;
  },
  previous: {
    positive: number;
    tested: number;
  }
): number => {
  const newTests = current.tested - previous.tested;
  const newPositive = current.positive - previous.positive;
  return newPositive / newTests || 0.0;
};
