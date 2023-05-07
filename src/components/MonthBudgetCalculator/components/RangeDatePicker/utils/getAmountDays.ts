export function getAmountDays(
  startDate: string | Date,
  endDate: string | Date
): number {
  const start = typeof startDate === "string" ? new Date(startDate) : startDate;
  const end = typeof endDate === "string" ? new Date(endDate) : endDate;

  const differenceInMilliseconds = end.getTime() - start.getTime();

  const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

  return Math.ceil(differenceInDays) + 1;
}
