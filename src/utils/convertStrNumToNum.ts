export function convertStrNumToNum(stringNumber: string): number {
  return +stringNumber.replace(/ /g, "");
}
