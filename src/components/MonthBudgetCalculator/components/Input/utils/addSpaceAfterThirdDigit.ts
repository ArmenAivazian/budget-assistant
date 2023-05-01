export const addSpaceAfterThirdDigit = (number: string) => {
  const parts = [];

  for (let i = number.length; i > 0; i -= 3) {
    parts.unshift(number.slice(Math.max(0, i - 3), i));
  }

  return parts.join(" ");
};
