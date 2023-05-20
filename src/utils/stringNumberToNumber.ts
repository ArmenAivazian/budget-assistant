export function stringNumberToNumber(stringNumber: string): number {
  return +stringNumber.replace(/ /g, "");
}
