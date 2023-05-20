export function convertStringNumberToNumber(
  stringNumber: string
): number {
  return +stringNumber.replace(/ /g, "");
}
