export function percentageToScaleOutOfTen(percentage: number): number {
  percentage < 0 && (percentage = 0);
  percentage > 100 && (percentage = 100);

  const scaledValue = (percentage / 100) * 10;
  return parseFloat(scaledValue.toFixed(1));
}
