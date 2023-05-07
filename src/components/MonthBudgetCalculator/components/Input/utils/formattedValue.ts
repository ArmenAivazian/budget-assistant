export function formattedValue(value: string, isNumber: boolean) {
  if (isNumber) {
    const number = value.replace(/[^0-9]/g, "");

    return number.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return value;
}
