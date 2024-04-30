function replaceAllDashExceptFirst(str: string) {
  return str.replace(/-/g, (match, indx) => (!indx ? match : ""));
}

export function formattedValue(value: string, isNumber: boolean) {
  if (isNumber) {
    const numberWithDash = value.replace(/[^(0-9)|-]/g, "");

    const number = replaceAllDashExceptFirst(numberWithDash);

    return number.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return value;
}
